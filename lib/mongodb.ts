import { Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let db: Db;

if (!uri) throw new Error("Please provide the MongoDB URI");

export async function connectToDB() {
  if (client) return { client, db };

  client = await MongoClient.connect(uri!, options);
  db = client.db("crypto_db");
  console.log("db connected: ", db);
  
  return { client, db };
}



