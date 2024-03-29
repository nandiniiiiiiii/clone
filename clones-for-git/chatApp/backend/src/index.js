import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN
}))
app.use(express.json())
dotenv.config({
    path: './env'
})

//adding routes
app.use("/", (req, res) => {
    console.log("hello");
    res.send('hello world');
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`server running at port: ${process.env.PORT}`);
        console.log(`http://localhost:${process.env.PORT}/`)
    });
})
.catch((err)=>{
    console.log("MONGO db connection failed !!! ", err)
})
