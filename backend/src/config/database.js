import mongoose from "mongoose";
import dns from "node:dns";
import { DB_NAME } from "./constants.js";

// Force Node.js c-ares resolver to use public DNS for MongoDB SRV lookups
// Fixes querySrv EBADRESP and ECONNREFUSED on college Wi-Fi / Windows 11
dns.setServers(["8.8.8.8", "1.1.1.1"]);
dns.setDefaultResultOrder("ipv4first");

const connectDB = async () => {
    try {
        const rawUri = process.env.MONGODB_URI?.trim().replace(/\/+$/, "");
        if (!rawUri) {
            throw new Error("MONGODB_URI is not defined in .env file");
        }

        const connectionInstance = await mongoose.connect(`${rawUri}/${DB_NAME}`, {
            family: 4, // Force IPv4 to avoid broken IPv6 TLS handshakes (SSL Alert 80)
            serverSelectionTimeoutMS: 10000
        });

        console.log(`\nMongoDB connected !!! ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection failed", error);
        process.exit(1);
    }
};

export default connectDB;