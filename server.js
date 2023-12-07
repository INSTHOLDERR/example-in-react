import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import conn from "./connection.js";
import router from "./router.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())
app.use("/",router);

conn().then(()=>{
    app.listen(process.env.PORT, error=>{
       if(error){
          console.log(error);
          return;
       }
       console.log("Server started");
    });
 })
    .catch(error=>{
       console.log(error);
 })
 