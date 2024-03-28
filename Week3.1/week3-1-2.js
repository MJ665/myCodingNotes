/**
    * * Highlight: authentication and zod introduction
    * ! Important: zod is a input validation library 
    * ? Question: 
    * TODO todo: 
**/

const express=require("express");
const app = express()
const port = 3000
const zod = require("zod")

app.post("/something", function(req,res,next){
    res.send("returning something")
})


app.listen(port,()=>{console.log("we are listening of port " + port)})