import express from 'express'
import { config, configDotenv } from 'dotenv';

configDotenv();
const app = express();
const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("The server is working!");
})

app.get("/login",(req,res)=>{
    res.send("Login here!");
})

app.listen(port,(req,res)=>{
    console.log(`Server listening at port: ${port}`);
})