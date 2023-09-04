import mongoose from "mongoose";

const connectMongo = async() => {
    try{
      await mongoose.connect(process.env.MONGODB_URI)
      console.log('Database is connected')
  
    }catch(error){
      console.error('Database connection Error')
    }
  }
  
  export default connectMongo