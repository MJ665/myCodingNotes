/**
    * * Highlight: authentication and zod introduction
    * ! Important: zod is a input validation library 
    * ? Question: 
    * TODO todo: 
**/

const express=require("express");
const app = express()
const port = 3000
const z = require("zod")

const mySchema= z.array(z.number()); // this will represent the structure of array of number

app.post("/health-checkup", function(req,res,next){
    const kidneys = req.body.kidneys;
    const response = mySchema.safeParse(kidneys)
    res.send({response})
})


app.listen(port,()=>{console.log("we are listening of port " + port)})