const mongoose = require("mongoose");
// const dotenv = require("dotenv");

const connectDB = () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGO_URI, {});
    const mongoURI = "mongodb+srv://akash:campus123@campusconnectapp.dbmhxi1.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(mongoURI, () => {
      console.log("connected to mongo Successfully");
    })
    // console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;
