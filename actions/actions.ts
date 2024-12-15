"use server";
import { auth } from "@clerk/nextjs/server";
import { MongoClient } from "mongodb";

// MongoDB URI and Database Name
const uri = process.env.MONGODB_URI || ""; // Ensure MongoDB URI is set in environment variables
const client = new MongoClient(uri);

// Define the MongoDB Database and Collection Name
const DB_NAME = "crypto_db"; // Database name
const COLLECTION_NAME = "user_favorite_crypto"; // Collection name

// Function to add favorite crypto
export async function addFavoriteCrypto(username: string, crypto: string) {
  const user = await auth();
  const userId = user?.userId;

  // Handle unauthorized access
  if (!userId) {
    return { error: "Unauthorized. Please log in to continue." };
  }

  try {
    // Connect to MongoDB
    await client.connect();

    // Access the database and collection
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Check if the user document exists
    const userEntry = await collection.findOne({ userId });

    if (userEntry) {
      // Check if the crypto already exists in the array
      if (userEntry.favoriteCrypto.includes(crypto)) {
        return { info: `${crypto} is already in your favorites.` };
      }

      // Manually update the array without $push
      const updatedCryptoList = [...userEntry.favoriteCrypto, crypto];
      await collection.updateOne(
        { userId }, // Filter
        { $set: { favoriteCrypto: updatedCryptoList } } // Manually set the new array
      );

      return { success: `${crypto} added to favorites!` };
    } else {
      // Create a new user document if it doesn't exist
      await collection.insertOne({
        userId,
        username,
        favoriteCrypto: [crypto], // Initialize with the provided crypto
      });
      return { success: `${crypto} added as your first favorite!` };
    }
  } catch (error) {
    console.error("MongoDB Error:", error);
    return { error: "Failed to add data. Please try again later." };
  } finally {
    // Ensure the MongoDB connection is closed
    await client.close();
  }
}
