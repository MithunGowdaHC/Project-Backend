import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MOngoDB Connected",connectionInstance.sanitizeFilter)
  } catch (error) {
    console.log("Error", error);
    process.exit(1);
  }
};

export default connectDB