import {
  createHash,
  timingSafeEqual,
} from "node:crypto";

import clientPromise from "./mongodb.js";

import {
  blogAuthCookieName,
  createBlogAuthCookie,
  createBlogAuthToken,
  createExpiredBlogAuthCookie,
  getCookieValue,
  verifyBlogAuthToken,
} from "../server/blogAuth.js";

const databaseName =
  process.env.MONGODB_DB || "ultimateHealthMen";

const attemptsCollectionName = "blogAuthAttempts";

const maximumAttempts = 5;
const attemptWindowMilliseconds = 15 * 60 * 1000;
const blockedDurationMilliseconds =
  15 * 60 * 1000;

function cleanPin(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, 200);
}

function createDigest(value) {
  return createHash("sha256")
    .update(value)
    .digest();
}

function valuesMatch(providedValue, expectedValue) {
  const providedDigest = createDigest(
    providedValue || ""
  );

  const expectedDigest = createDigest(
    expectedValue || ""
  );

  return timingSafeEqual(
    providedDigest,
    expectedDigest
  );
}

function getRequestIp(request) {
  const forwardedFor =
    request.headers["x-forwarded-for"];

  if (typeof forwardedFor === "string") {
    return forwardedFor
      .split(",")[0]
      .trim()
      .slice(0, 100);
  }

  return (
    request.socket?.remoteAddress || "unknown"
  ).slice(0, 100);
}

function createAttemptKey(requestIp) {
  const authSecret = process.env.BLOG_AUTH_SECRET;

  if (!authSecret) {
    throw new Error(
      "Missing BLOG_AUTH_SECRET environment variable."
    );
  }

  return createHash("sha256")
    .update(`${requestIp}:${authSecret}`)
    .digest("hex");
}

async function getAttemptsCollection() {
  const mongoClient = await clientPromise;
  const database = mongoClient.db(databaseName);

  return database.collection(
    attemptsCollectionName
  );
}

async function isTemporarilyBlocked(
  collection,
  attemptKey
) {
  const attemptRecord = await collection.findOne({
    attemptKey,
  });

  return Boolean(
    attemptRecord?.blockedUntil &&
      attemptRecord.blockedUntil > new Date()
  );
}

async function recordFailedAttempt(
  collection,
  attemptKey
) {
  const now = new Date();
  const windowStart = new Date(
    now.getTime() - attemptWindowMilliseconds
  );

  const existingRecord =
    await collection.findOne({
      attemptKey,
    });

  const isCurrentWindow =
    existingRecord?.windowStartedAt &&
    existingRecord.windowStartedAt >= windowStart;

  const attempts = isCurrentWindow
    ? (existingRecord.attempts || 0) + 1
    : 1;

  const update = {
    attemptKey,
    attempts,
    windowStartedAt: isCurrentWindow
      ? existingRecord.windowStartedAt
      : now,
    lastAttemptAt: now,
    blockedUntil:
      attempts >= maximumAttempts
        ? new Date(
            now.getTime() +
              blockedDurationMilliseconds
          )
        : null,
  };

  await collection.updateOne(
    {
      attemptKey,
    },
    {
      $set: update,
    },
    {
      upsert: true,
    }
  );
}

async function clearFailedAttempts(
  collection,
  attemptKey
) {
  await collection.deleteOne({
    attemptKey,
  });
}

async function handleAuthenticationStatus(
  request,
  response
) {
  const token = getCookieValue(
    request,
    blogAuthCookieName
  );

  return response.status(200).json({
    success: true,
    authenticated: verifyBlogAuthToken(token),
  });
}

async function handleLogin(request, response) {
  const configuredPin = process.env.BLOG_ADMIN_PIN;

  if (!configuredPin) {
    throw new Error(
      "Missing BLOG_ADMIN_PIN environment variable."
    );
  }

  const requestIp = getRequestIp(request);
  const attemptKey = createAttemptKey(requestIp);

  const attemptsCollection =
    await getAttemptsCollection();

  const blocked = await isTemporarilyBlocked(
    attemptsCollection,
    attemptKey
  );

  if (blocked) {
    return response.status(429).json({
      success: false,
      message:
        "Too many incorrect attempts. Please wait 15 minutes and try again.",
    });
  }

  const submittedPin = cleanPin(
    request.body?.pin
  );

  if (!valuesMatch(submittedPin, configuredPin)) {
    await recordFailedAttempt(
      attemptsCollection,
      attemptKey
    );

    return response.status(401).json({
      success: false,
      message: "The PIN is incorrect.",
    });
  }

  await clearFailedAttempts(
    attemptsCollection,
    attemptKey
  );

  const token = createBlogAuthToken();

  response.setHeader(
    "Set-Cookie",
    createBlogAuthCookie(token)
  );

  return response.status(200).json({
    success: true,
    authenticated: true,
    message: "Access granted.",
  });
}

function handleLogout(response) {
  response.setHeader(
    "Set-Cookie",
    createExpiredBlogAuthCookie()
  );

  return response.status(200).json({
    success: true,
    authenticated: false,
    message: "You have been signed out.",
  });
}

export default async function handler(request, response) {
  try {
    if (request.method === "GET") {
      return handleAuthenticationStatus(
        request,
        response
      );
    }

    if (request.method === "POST") {
      return handleLogin(request, response);
    }

    if (request.method === "DELETE") {
      return handleLogout(response);
    }

    response.setHeader(
      "Allow",
      "GET, POST, DELETE"
    );

    return response.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  } catch (error) {
    console.error(
      "Blog authentication error:",
      error
    );

    return response.status(500).json({
      success: false,
      message:
        "Authentication is temporarily unavailable.",
    });
  }
}