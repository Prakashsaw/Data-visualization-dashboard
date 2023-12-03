import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connection Established...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
