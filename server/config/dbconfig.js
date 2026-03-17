import mongoose from "mongoose";

async function connectDB(){
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("mongodb connected.")
    } catch (error) {
        console.log("connection error ", error);
        process.exit(1);
    }
}
export default connectDB;