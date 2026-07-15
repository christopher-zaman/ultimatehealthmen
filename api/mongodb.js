import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error(
    "Missing MONGODB_URI environment variable."
  );
}

let client;
let clientPromise;

/*
  During local development, Vite and Node may reload files often.
  Storing the connection promise globally avoids creating a new
  MongoDB connection every time the file reloads.
*/
if (process.env.NODE_ENV === "development") {
  if (!global.mongoClientPromise) {
    client = new MongoClient(mongoUri);
    global.mongoClientPromise = client.connect();
  }

  clientPromise = global.mongoClientPromise;
} else {
  client = new MongoClient(mongoUri);
  clientPromise = client.connect();
}

export default clientPromise;