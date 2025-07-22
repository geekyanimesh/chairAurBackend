const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT

app.get('/',(req,res)=>{
    res.send("The code works!")
})

app.get("/twitter",(req,res)=>{
    res.send("twitter.com")
})

app.get("/login",(req,res)=>{
    res.send('<h1>Login here!</h1>')
})

app.listen(port,()=>{
    console.log(`Listening on port: ${port}`); 
})
