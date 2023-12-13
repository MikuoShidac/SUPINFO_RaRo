import mongoose from "mongoose";

console.log("Connecting to MongoDB");
export const client = await mongoose.connect(
  "mongodb+srv://supinfo-3apis:2023@serverlessinstance0.ec3gy.mongodb.net/RaRo_API-DB",
  {
    serverSelectionTimeoutMS: 5000,
  }
);
console.log("Connected to MongoDB");