import express from "express";
import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from 'body-parser'

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.get("/",(req,res)=>{
    res.send("Hello Server");
})

const MONGO_URI = process.env.CONNECTION_URI;
const PORT = process.env.PORT || 5000;

mongoose
.connect(MONGO_URI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`serever is running on port ${PORT}`)
    })
})
.catch((err)=>{
    console.log(err);
})