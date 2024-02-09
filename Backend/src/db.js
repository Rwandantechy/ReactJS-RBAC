const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DB;

async function connectDatabase() {
  try {
    await mongoose.connect(uri, { dbName: databaseName });
    console.log("Connected to MongoDB successfully! Database: " + databaseName);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
}

module.exports = {
  connectDatabase,
};
