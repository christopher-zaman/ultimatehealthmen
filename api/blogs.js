import clientPromise from "./mongodb.js";

import {
  isBlogAdminAuthenticated,
} from "../server/blogAuth.js";

const databaseName =
  process.env.MONGODB_DB || "ultimateHealthMen";

const collectionName = "blogPosts";
const defaultAuthor = "Amanda Gaskin, APRN";

function cleanText(value, maximumLength = 1000) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maximumLength);
}

function cleanSlug(value) {
  return cleanText(value, 200)
    .toLowerCase();
}

function createSlug(title) {
  return cleanText(title, 200)
    .toLowerCase()
    .replaceAll("’", "")
    .replaceAll("'", "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 150);
}

function isValidImageUrl(value) {
  if (!value) {
    return true;
  }

  try {
    const url = new URL(value);

    return (
      url.protocol === "https:" ||
      url.protocol === "http:"
    );
  } catch {
    return false;
  }
}

function cleanContentSections(content) {
  if (!Array.isArray(content)) {
    return [];
  }

  return content
    .slice(0, 20)
    .map((section) => ({
      heading: cleanText(section?.heading, 200),
      body: cleanText(section?.body, 10000),
    }))
    .filter(
      (section) =>
        section.heading && section.body
    );
}

function calculateReadTime(post) {
  const articleText = [
    post.intro,
    ...post.content.map((section) => section.body),
  ].join(" ");

  const wordCount = articleText
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = Math.max(
    1,
    Math.ceil(wordCount / 200)
  );

  return `${minutes} min read`;
}

function getEasternDateString(date = new Date()) {
  const parts = new Intl.DateTimeFormat(
    "en-US",
    {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }
  ).formatToParts(date);

  const values = Object.fromEntries(
    parts.map((part) => [
      part.type,
      part.value,
    ])
  );

  return `${values.year}-${values.month}-${values.day}`;
}

function serializePost(post) {
  return {
    ...post,
    _id: post._id.toString(),
  };
}

function createPostFromRequest(requestBody) {
  const title = cleanText(requestBody.title, 200);
  const excerpt = cleanText(
    requestBody.excerpt,
    500
  );

  const intro =
    cleanText(requestBody.intro, 2000) ||
    excerpt;

  const content = cleanContentSections(
    requestBody.content
  );

  const image = cleanText(
    requestBody.image,
    2000
  );

  return {
    title,
    excerpt,
    intro,
    content,
    category:
      cleanText(requestBody.category, 100) ||
      "Men’s Health",
    image,
    imageAlt:
      cleanText(requestBody.imageAlt, 300) ||
      title,
    relatedServiceSlug: cleanText(
      requestBody.relatedServiceSlug,
      150
    ),
  };
}

function validatePost(post) {
  if (!post.title) {
    return "Please enter a blog title.";
  }

  if (!post.excerpt) {
    return "Please enter an excerpt.";
  }

  if (!post.intro) {
    return "Please enter an introduction.";
  }

  if (post.content.length === 0) {
    return "Please add at least one complete content section.";
  }

  if (!isValidImageUrl(post.image)) {
    return "Please enter a valid image URL.";
  }

  return null;
}

async function createUniqueSlug(
  collection,
  title
) {
  const baseSlug = createSlug(title);

  if (!baseSlug) {
    throw new Error(
      "A valid slug could not be created from the title."
    );
  }

  let candidateSlug = baseSlug;
  let suffix = 2;

  while (
    await collection.findOne(
      {
        slug: candidateSlug,
      },
      {
        projection: {
          _id: 1,
        },
      }
    )
  ) {
    candidateSlug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }

  return candidateSlug;
}

async function getPublishedPosts(collection) {
  const posts = await collection
    .find(
      {
        status: "published",
      },
      {
        projection: {
          title: 1,
          slug: 1,
          excerpt: 1,
          intro: 1,
          category: 1,
          author: 1,
          image: 1,
          imageAlt: 1,
          readTime: 1,
          relatedServiceSlug: 1,
          publishedAt: 1,
          date: 1,
        },
      }
    )
    .sort({
      publishedAt: -1,
      createdAt: -1,
    })
    .toArray();

  return posts.map(serializePost);
}

async function getPublishedPost(collection, slug) {
  const post = await collection.findOne({
    slug,
    status: "published",
  });

  return post ? serializePost(post) : null;
}

async function handleGet(
  request,
  response,
  collection
) {
  const slug = cleanSlug(request.query.slug);

  response.setHeader(
    "Cache-Control",
    "no-store"
  );

  if (slug) {
    const post = await getPublishedPost(
      collection,
      slug
    );

    if (!post) {
      return response.status(404).json({
        success: false,
        message:
          "The requested blog post was not found.",
      });
    }

    return response.status(200).json({
      success: true,
      post,
    });
  }

  const posts = await getPublishedPosts(
    collection
  );

  return response.status(200).json({
    success: true,
    posts,
  });
}

async function handlePost(
  request,
  response,
  collection
) {
  if (!isBlogAdminAuthenticated(request)) {
    return response.status(401).json({
      success: false,
      message:
        "Your session has expired. Please enter the PIN again.",
    });
  }

  const post = createPostFromRequest(
    request.body || {}
  );

  const validationError = validatePost(post);

  if (validationError) {
    return response.status(400).json({
      success: false,
      message: validationError,
    });
  }

  const now = new Date();

  const slug = await createUniqueSlug(
    collection,
    post.title
  );

  const document = {
    ...post,
    slug,
    author: defaultAuthor,
    readTime: calculateReadTime(post),
    date: getEasternDateString(now),
    status: "published",
    publishedAt: now,
    createdAt: now,
    updatedAt: now,
    source: "new-blog-form",
  };

  const insertResult =
    await collection.insertOne(document);

  const savedPost = {
    ...document,
    _id: insertResult.insertedId.toString(),
  };

  return response.status(201).json({
    success: true,
    message:
      "The blog post was published successfully.",
    post: savedPost,
    url: `/blog/${savedPost.slug}`,
  });
}

export default async function handler(request, response) {
  try {
    const mongoClient = await clientPromise;
    const database = mongoClient.db(databaseName);

    const collection =
      database.collection(collectionName);

    if (request.method === "GET") {
      return handleGet(
        request,
        response,
        collection
      );
    }

    if (request.method === "POST") {
      return handlePost(
        request,
        response,
        collection
      );
    }

    response.setHeader("Allow", "GET, POST");

    return response.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  } catch (error) {
    console.error("Blog API error:", error);

    return response.status(500).json({
      success: false,
      message:
        "The blog request could not be completed. Please try again shortly.",
    });
  }
}