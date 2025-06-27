import mongoose from "mongoose";

export async function connect() {
  try {
    const url = process.env.MONGODB_URL || "";
    console.log(url);

    await mongoose.connect(url);

    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ Something went wrong in connecting to the database");
    console.log(error);
  }
}
