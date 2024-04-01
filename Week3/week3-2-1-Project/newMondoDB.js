const mongoose= require("mongoose")
const express = require ("express")
const app = express()
const jwtPassword = password


app.use(express.json())

mongoose.connect("mongodb+srv://hackathonmj641:1029384756@cluster0.bomrqhm.mongodb.net/")
const mongoModel= mongoose.model("User",{
    name:string,
    username:string,
    password:string
})

app.post("/signUp",(req,res)=>{
    if (userExists(req.body.email)){
        res.status(400).json("user already exists")
    }
const user = new User ({
    name : req.body.name,
    email : req.body.email,
    password : req.body.password
})
user.save()
res.json({
    msg:"User successfully created"
})
})


user.save()

async function  userExists(username,password){
    const existingUser= await User.findOne({email:username})
if (existingUser){return true}else{return false}
}

app.post ("/signin",(req,res)=>{
    const username=req.body.username
    const password = req.body.password
    if(!userExists){
        return res.status(403).json({
            "error": "user not exits",
            
        })
    }
    var token = jwt.sign({username:username},jwtPassword)
    return res.json({
        userSignedIN:True,
        token : token
    })
})

app.get("/users",(req,res)=>{
    const token = req.header.authorization
    try { 
        const decode = jwt.verify(token,jwtPassword)
        const userName = decode.username

        if(!userExists(userName)){
            throw "user not exist"
        }
        else{return userList}
    }catch(err){
        return res.status(400).json({
            error:"error",
            msg:err
        })
    }
})









app.use((err,req,res,next)=>{
    res.json({
        "error":500,
        "errorMsg":err
    })
})

app.listen(3000, ()=>{console.log("we are listening on port 3000")})