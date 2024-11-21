// require('dotenv').config()
import dotenv from "dotenv";

import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listening at port ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("Error");
  });
/*
import express from "express"

const app = express()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
        console.log('Error', error);
        
    })

    app.listen(process.env.PORT, ()=> {
        console.log(`The server is listening at port ${process.env.PORT}`);
        
    })
  } catch (error) {
    console.log("Error", error);
  }
})();
*/
