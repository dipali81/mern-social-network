import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbconfig.js";
import dns from "node:dns/promises";

dotenv.config(); // loads .env variables
dns.setServers(["1.1.1.1"]);
console.log(await dns.getServers());
// [ '127.0.0.53' ]
connectDB();
const app = express();
app.listen(process.env.PORT, () => {
    console.log(`server started at http://localhost:${process.env.PORT}`);
})