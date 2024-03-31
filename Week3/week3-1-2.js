/**
    * * Highlight: authentication and zod introduction
    * ! Important: zod is a input validation library 
    * ? Question: 
    * TODO todo: 
**/

const express=require("express");
const app = express()
const port = 3000
app.use(express.json())
const z = require("zod")

const mySchema= z.array(z.number()); // this will represent the structure of array of number

// app.post("/health-checkup", function(req,res,next){
//     // use this link in postman - http://localhost:3000/health-checkup
//     const kidneys = req.body.kidneys;
//     const response = mySchema.safeParse(kidneys)
//     if (!response.success){
//         res.status(411).json({
//             msg:"you are giving the wrong input"
//         })
//     }else{
//         res.send({response})
//     }
// /* when i send 
// {
//     "kidneys":[1,2]
// }
// i get 
// {"response":{"success":true,"data":[1,2]}}

// and whend i send 
// {
//     "kidneys":[1,2 , "a", "b"]
// }
// i get
// {"response":{"success":false,"error":{"issues":[{"code":"invalid_type","expected":"number","received":"string","path":[2],"message":"Expected number, received string"},{"code":"invalid_type","expected":"number","received":"string","path":[3],"message":"Expected number, received string"}],"name":"ZodError"}}}

// */
// })



// suppose we have a input schema
// {
//     email:string,
//     password: atleast 8 letter,
//     country : "IN", "US", "EU", "AU"
// }
const schema2= z.object({
    email:z.string().email().endsWith("@gmail.com"),
    password:z.string().min(8),
    country:z.literal("IN").or(z.literal("US")).or(z.literal("EU")).or(z.literal("AU")),
    kidneys:z.array(z.number())
})

app.post("/health-checkup", (req,res,next)=>{
    const obj1= req.body.obj1
    const response = schema2.safeParse(obj1)
    if(!response.success){
        res.status(411).json({msg:"you gave wrong input", response})
    }else{res.send(response)}
/* 
when we give 
{
    "obj1":{
        "email":"hariom@gmail.com",
        "password": "12345678",
        "country":"US",
        "kidneys":[1,2]
    }
}
we get
{"success":true,"data":{"email":"hariom@gmail.com","password":"12345678","country":"US","kidneys":[1,2]}}
when we give 

{
    "obj1":{
        "email":121212,
        "password": "123456",
        "country":"CHINAAAAA",
        "kidneys":[1,2,"qwe","iupo"]
    }
}
we get
{"msg":"you gave wrong input","response":{"success":false,"error":{"issues":[{"code":"invalid_type","expected":"string","received":"number","path":["email"],"message":"Expected string, received number"},{"code":"too_small","minimum":8,"type":"string","inclusive":true,"exact":false,"message":"String must contain at least 8 character(s)","path":["password"]},{"code":"invalid_union","unionErrors":[{"issues":[{"code":"invalid_union","unionErrors":[{"issues":[{"code":"invalid_union","unionErrors":[{"issues":[{"received":"CHINAAAAA","code":"invalid_literal","expected":"IN","path":["country"],"message":"Invalid literal value, expected \"IN\""}],"name":"ZodError"},{"issues":[{"received":"CHINAAAAA","code":"invalid_literal","expected":"US","path":["country"],"message":"Invalid literal value, expected \"US\""}],"name":"ZodError"}],"path":["country"],"message":"Invalid input"}],"name":"ZodError"},{"issues":[{"received":"CHINAAAAA","code":"invalid_literal","expected":"EU","path":["country"],"message":"Invalid literal value, expected \"EU\""}],"name":"ZodError"}],"path":["country"],"message":"Invalid input"}],"name":"ZodError"},{"issues":[{"received":"CHINAAAAA","code":"invalid_literal","expected":"AU","path":["country"],"message":"Invalid literal value, expected \"AU\""}],"name":"ZodError"}],"path":["country"],"message":"Invalid input"},{"code":"invalid_type","expected":"number","received":"string","path":["kidneys",2],"message":"Expected number, received string"},{"code":"invalid_type","expected":"number","received":"string","path":["kidneys",3],"message":"Expected number, received string"}],"name":"ZodError"}}}
*/
})





// Authentication

// in all the request from the user user has to send username and password -> dumb way of authenticaiton
// smart way
// give the user back a token on signup / signin
// ask the user to send back the token in all future requests
// when the user logs out askkk the user to forget the token or revoke it from backend







app.listen(port,()=>{console.log("we are listening of port " + port)})