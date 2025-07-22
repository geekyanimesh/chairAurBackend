import express from 'express';
import { configDotenv } from 'dotenv';
configDotenv();
const app = express();
const port = process.env.PORT

app.get("/",(req,res)=>{
    res.send("Server is ready");
})

app.listen(port,(req,res)=>{
    console.log(`Server listening at: ${port}`);  
})