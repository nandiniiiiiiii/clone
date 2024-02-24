import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/index.js';
import cors from 'cors';
import Book from './routs/books.route.js'

//creating app
const app = express();

//using cors to do cross host talks
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))
app.use(express.json());

//adding all the routs
app.use("/api/v1/book", Book)

//to configure dotenv file
dotenv.config({
    path: './env'
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server running at: ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("MONGO db connection failed !!! ", error)
    })
