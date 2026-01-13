import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

export const connectDB = async() => {
    try {
        const DB_URL = process.env.DB_URL;
        const conn = await mongoose.connect(DB_URL);
        console.log("MongoDB connected", conn.connection.host);      
        
    } catch (error) {
        console.log("Failed to connect to MongoDB",error);
        process.exit(1); //1 means failure, 0 means success        
    }
}