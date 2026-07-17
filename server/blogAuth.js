import {
  createHmac,
  timingSafeEqual,
} from "node:crypto";

export const blogAuthCookieName =
  "ultimate_health_blog_auth";

const authenticationDurationSeconds = 60 * 60;

function getAuthSecret() {
  const authSecret = process.env.BLOG_AUTH_SECRET;

  if (!authSecret) {
    throw new Error(
      "Missing BLOG_AUTH_SECRET environment variable."
    );
  }

  return authSecret;
}

function createSignature(encodedPayload) {
  return createHmac("sha256", getAuthSecret())
    .update(encodedPayload)
    .digest("base64url");
}

function signaturesMatch(
  providedSignature,
  expectedSignature
) {
  const providedBuffer = Buffer.from(
    providedSignature || ""
  );

  const expectedBuffer = Buffer.from(
    expectedSignature || ""
  );

  if (
    providedBuffer.length !== expectedBuffer.length
  ) {
    return false;
  }

  return timingSafeEqual(
    providedBuffer,
    expectedBuffer
  );
}

export function createBlogAuthToken() {
  const payload = {
    purpose: "blog-admin",
    expiresAt:
      Date.now() +
      authenticationDurationSeconds * 1000,
  };

  const encodedPayload = Buffer.from(
    JSON.stringify(payload)
  ).toString("base64url");

  const signature = createSignature(encodedPayload);

  return `${encodedPayload}.${signature}`;
}

export function verifyBlogAuthToken(token) {
  if (!token || typeof token !== "string") {
    return false;
  }

  const [encodedPayload, providedSignature] =
    token.split(".");

  if (!encodedPayload || !providedSignature) {
    return false;
  }

  const expectedSignature =
    createSignature(encodedPayload);

  if (
    !signaturesMatch(
      providedSignature,
      expectedSignature
    )
  ) {
    return false;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(
        encodedPayload,
        "base64url"
      ).toString("utf8")
    );

    return (
      payload.purpose === "blog-admin" &&
      Number.isFinite(payload.expiresAt) &&
      payload.expiresAt > Date.now()
    );
  } catch {
    return false;
  }
}

export function getCookieValue(request, cookieName) {
  const cookieHeader = request.headers.cookie || "";

  const cookies = cookieHeader
    .split(";")
    .map((cookie) => cookie.trim())
    .filter(Boolean);

  for (const cookie of cookies) {
    const separatorIndex = cookie.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const name = cookie.slice(0, separatorIndex);
    const value = cookie.slice(separatorIndex + 1);

    if (name === cookieName) {
      return decodeURIComponent(value);
    }
  }

  return "";
}

export function isBlogAdminAuthenticated(request) {
  const token = getCookieValue(
    request,
    blogAuthCookieName
  );

  return verifyBlogAuthToken(token);
}

export function createBlogAuthCookie(token) {
  return [
    `${blogAuthCookieName}=${encodeURIComponent(token)}`,
    "Path=/",
    "HttpOnly",
    "Secure",
    "SameSite=Strict",
    `Max-Age=${authenticationDurationSeconds}`,
  ].join("; ");
}

export function createExpiredBlogAuthCookie() {
  return [
    `${blogAuthCookieName}=`,
    "Path=/",
    "HttpOnly",
    "Secure",
    "SameSite=Strict",
    "Max-Age=0",
  ].join("; ");
}