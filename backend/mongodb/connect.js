import mongoose from "mongoose";

const connectDB=(url)=>{
    mongoose.set('strictQuery',true);
    mongoose.connect(url).then(console.log("Connected to MongoDB")).catch((error)=>{console.log("Error in connecting to MongoDB : " + error)})
}

export default connectDB;