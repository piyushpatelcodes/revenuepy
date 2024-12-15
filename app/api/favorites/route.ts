import { auth } from "@clerk/nextjs/server";
import { MongoClient } from "mongodb";

// MongoDB URI and Database Name
const uri = process.env.MONGODB_URI || ""; // Ensure MongoDB URI is set in environment variables
const client = new MongoClient(uri);

// Define the MongoDB Database and Collection Name
const DB_NAME = "crypto_db"; // Database name
const COLLECTION_NAME = "user_favorite_crypto"; // Collection name

export async function GET(req: Request) {
  const user = await auth();
  const userId = user?.userId;

  // Handle unauthorized access
  if (!userId) {
    return Response.json({ error: "Unauthorized. Please log in to continue." }, { status: 401 });
  }

  try {
    // Connect to MongoDB
    await client.connect();

    // Access the database and collection
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Find the user document
    const userEntry = await collection.findOne({ userId });

    if (userEntry && userEntry.favoriteCrypto.length > 0) {
      return Response.json(
        { success: true, favoriteCrypto: userEntry.favoriteCrypto },
        { status: 200 }
      );
    } else {
      return Response.json(
        { success: true, message: "No favorite cryptos found.", favoriteCrypto: [] },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("MongoDB Error:", error);
    return Response.json(
      { error: "Failed to fetch data. Please try again later." },
      { status: 500 }
    );
  } finally {
    // Ensure the MongoDB connection is closed
    await client.close();
  }
}
