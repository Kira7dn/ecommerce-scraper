import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URI) return console.log("MONGODB_URI not found");
  if (isConnected) return console.log("Already connected to database");
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("Successfully connected to database");
  } catch (error) {
    console.log(`Failed to connect to database: ${error}`);
  }
};
