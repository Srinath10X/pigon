import mongoose from "mongoose";

export async function connectDB(): Promise<void> {
  try {
    const req = await mongoose.connect(process.env.DATABASE_URL!);
    console.log("Database connected to host: ", req.connection.host);
  } catch (error: any) {
    console.log("Failed to connect with database", error.message);
  }
}
