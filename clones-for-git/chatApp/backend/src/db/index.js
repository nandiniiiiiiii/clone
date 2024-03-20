import mongoose from 'mongoose';

//connecting mongoodb with node
const connectDB = async() =>{
    const DB_NAME = "chat-app"
    try {
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\nMONGODB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGOBD not found ",error);
        process.exit(1);
    }
}

export default connectDB;