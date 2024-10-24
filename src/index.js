import mongoose from "mongoose";
import express from "express"

const app = express()

import { DB_NAME } from "./constants";
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
