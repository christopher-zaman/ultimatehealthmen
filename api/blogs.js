import clientPromise from "./mongodb.js";

const databaseName =
  process.env.MONGODB_DB || "ultimateHealthMen";

const collectionName = "blogPosts";

function cleanSlug(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .trim()
    .toLowerCase()
    .slice(0, 200);
}

function serializePost(post) {
  return {
    ...post,
    _id: post._id.toString(),
  };
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

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");

    return response.status(405).json({
      success: false,
      message: "Only GET requests are allowed.",
    });
  }

  try {
    const mongoClient = await clientPromise;
    const database = mongoClient.db(databaseName);
    const blogCollection =
      database.collection(collectionName);

    const slug = cleanSlug(request.query.slug);

    /*
      If a slug was supplied, return the matching published post.
    */
    if (slug) {
      const post = await getPublishedPost(
        blogCollection,
        slug
      );

      if (!post) {
        return response.status(404).json({
          success: false,
          message: "The requested blog post was not found.",
        });
      }

      return response.status(200).json({
        success: true,
        post,
      });
    }

    /*
      Otherwise, return the published-post list.
    */
    const posts = await getPublishedPosts(
      blogCollection
    );

    return response.status(200).json({
      success: true,
      posts,
    });
  } catch (error) {
    console.error("Blog retrieval error:", error);

    return response.status(500).json({
      success: false,
      message:
        "Blog posts could not be loaded. Please try again shortly.",
    });
  }
}