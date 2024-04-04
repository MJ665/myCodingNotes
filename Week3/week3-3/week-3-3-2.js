const express = require("express")
const app = express()
const zod= require("zod")
const mongoose =require("mongoose")
 app.use (express.json())
 app.use((err,req,res,next)=>{
    res.json({err:"some Error occured",msg:err}).send("some error  occured")
 })



 mongoose.connect(
    "mongodb+srv://hackathonmj641:1029384756@cluster0.bomrqhm.mongodb.net/",
  ); 
  const User = mongoose.model("Users",{
    email:String,
    name:String,
    password:String
  })



  async function userExists(username,pass){
const existingUser = await User.findOne({email:username})
if (existingUser){return true}else{return falase}
 }


 app.post("signUp",(req,res)=>{
    inputUser=req.body.email
    inputPass=req.body.password
    inputName=req.body.name
    if(!useExists(inputUser,inputPass)){
        try{
            const user = new User ({inputUser,inputName,inputPass})
            user.save()
            res.send("user created successfully")
        }catch(err){
            res.json({err:"some error while signuping the user", msg:err})
        }
    }else{res.status(400).send("user already exists")}
 })


 app.listen(3000,()=>{console.log("the app is listening on 3000")})