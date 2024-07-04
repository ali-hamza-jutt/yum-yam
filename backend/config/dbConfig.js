import mongoose from "moongoose";

const connectDB=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/yum-yam');
    console.log('Connected');
}

export default connectDB;