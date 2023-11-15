const { MongoClient } = require("mongodb");
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
const db = client.db(process.env.MONGO_DB);
export default db;