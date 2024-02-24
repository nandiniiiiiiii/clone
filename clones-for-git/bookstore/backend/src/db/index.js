import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

//connecting mongoodb with node
const connectDB = async() =>{
    try {
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGOBD not found ",error);
        process.exit(1);
    }
}

export default connectDB;