import { app } from "./app.js";
import connectDB from "./db/index.js";
import 'dotenv/config'

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });















  

/*import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants.js";

import 'dotenv/config'

const app = express();

( async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    if(connection) app.listen(process.env.PORT , () => {
      console.log(`app is listning at PORT : ${process.env.PORT}`);
      console.log(connection.connection.host);
      
    })
  } catch (err) {
    console.error("Error :", err);
    throw err;
  }
})()*/
