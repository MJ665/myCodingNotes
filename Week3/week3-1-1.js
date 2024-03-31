/**
    * * Highlight: this is 3-1-1 middle ware and global caches
    * * Highlight: There are 3 ways to sendt the query to the server
    * 1. query parameter along with the url
    * 2. header of the api request
    * 3. body of the api request
**/

const express=require("express")
const app = express()

// Uncliner way of writing the code  of the middle ware is

// app.get("/health-checkup",function(req,res){
//     const username = req.headers.username
//     const  password = req.headers.password
//     if(username ==="harkirat" && password === "password"){
//         if (kidneyID===1 || kidneyID == 2){
//             res.json({
//                 msg:"your kidney is fine"
//             })
//         }
//     }
// })

// this is also the wrong and dumb way to do validation 

// app.get("/health-checkup",(req,res)=>{
//     const username=req.headers.username
//    const password = req.headers.password
//    const kidneyID=req.params.kidneyID
//    if (username != "harkirat" || password !="password"){
//    res.send(400).json({"msg":"something up with the inputs"}) 
//    return
//    }
//   if(kidneyID!=1 ||   kidneyID !=2){
//     res.status(411).json({
//         msg:"your inputs are wrong"
//     });
//     return;
//   } 
// })


// app.get ("/health-check",func1(req,res){
//     console.log("hello")
// },func2(req,res,next){},func3(req,res,next){})
// )

// to get the postman body parameter then always use app.use()

// example:
// we can use this instead of 

// app.get(".....abc1",func1())
// app.get(".....abc2",func1())
// app.get(".....abc3",func1())
// app.use(express.json())
// app.use(func1())

/**
    * ! Important: Middle ware assignment 
    * number of request counter and
    * average time yout server is taking to handle reques
**/

// app.use will always run first before triggering and initializing the app.use method
// it is used to call the middle ware when calling the every route

app.post("health-checkup",function(req,res){
    const kidneys=req.body.kidneys;
    const kidneysLength=kidneys.length;
    res.send("you have " + kidneys+ " in the body")
});
// global catches
// it is a special king of middle ware given by express for error handelling  and it takse 4 arguments err,req,res,next
app.use(function(err,req,res,next){
//     to keep the track of count of the number of exception in the backend
errorCount++;
res.json({msg:"sorry there is some thing got wrong with the server"})
})






// async function  middleWare(req,res,next){
//     await fetch()
//     next()
// }
// or 
function middleWare(req,res,next){
    fetch().then(()=>{
        next()
    })
}




app.listen(3000,()=>{console.log(" the applicxation is listening on port 3000")})