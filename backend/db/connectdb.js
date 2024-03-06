import mongoose from "mongoose";

const connectToMongo = async (url) => {
    return mongoose.connect(url).then(()=>console.log("connect to db"))
  
};

export default connectToMongo;
