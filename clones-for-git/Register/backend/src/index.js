import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './db/index.js';
import UserRouter from './routs/user.rout.js';

//creating app
const app = express();

//using cors to do cross host talks(middleware)
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))
app.use(express.json());

//adding all the routs
app.use("/api/v1/users",UserRouter) 

//to configure dotenv file
dotenv.config({
    path: './env'
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server running at: ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MONGO db connection failed !!! ",error)
})
