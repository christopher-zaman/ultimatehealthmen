import { MongoClient } from "mongodb";
import { blogPosts } from "../src/data/blogData.js";

const mongoUri = process.env.MONGODB_URI;

const databaseName =
  process.env.MONGODB_DB || "ultimateHealthMen";

const collectionName = "blogPosts";
const defaultAuthor = "Amanda Gaskin, APRN";

if (!mongoUri) {
  throw new Error(
    "Missing MONGODB_URI environment variable."
  );
}

function createPublishedDate(date) {
  if (!date) {
    return new Date();
  }

  return new Date(`${date}T12:00:00.000Z`);
}

function preparePost(post) {
  const now = new Date();

  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    intro: post.intro || post.excerpt,
    category: post.category || "Men’s Health",
    author: post.author || defaultAuthor,
    date: post.date,
    publishedAt: createPublishedDate(post.date),
    readTime: post.readTime || "5 min read",
    content: Array.isArray(post.content)
      ? post.content
      : [],
    image: post.image || "",
    imageAlt: post.imageAlt || post.title,
    relatedServiceSlug:
      post.relatedServiceSlug || "",
    status: "published",
    updatedAt: now,
  };
}

async function seedBlogs() {
  const client = new MongoClient(mongoUri);

  try {
    await client.connect();

    const database = client.db(databaseName);
    const collection =
      database.collection(collectionName);

    /*
      Each slug must identify exactly one blog post.
    */
    await collection.createIndex(
      { slug: 1 },
      { unique: true }
    );

    const operations = blogPosts.map((post) => {
      const preparedPost = preparePost(post);

      return {
        updateOne: {
          filter: {
            slug: preparedPost.slug,
          },
          update: {
            $set: preparedPost,
            $setOnInsert: {
              createdAt: new Date(),
            },
          },
          upsert: true,
        },
      };
    });

    if (operations.length === 0) {
      console.log("No blog posts were found to migrate.");
      return;
    }

    const result =
      await collection.bulkWrite(operations);

    console.log("Blog migration completed.");
    console.log(`Posts processed: ${operations.length}`);
    console.log(`Posts inserted: ${result.upsertedCount}`);
    console.log(`Posts updated: ${result.modifiedCount}`);
    console.log(`Posts matched: ${result.matchedCount}`);
  } finally {
    await client.close();
  }
}

seedBlogs().catch((error) => {
  console.error("Blog migration failed:", error);
  process.exitCode = 1;
});