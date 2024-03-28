const express = require ("express")
const app = express()
app.get("/",function (req,res){
     res.send( "<h1>Hello From My Application</h1>")
})

app.use(express.json())
/**
    * * Highlight: the thing that can be send along with the get request is query parameter
    * we can use req.query.n to get the n vairable from the query
**/
function sum (n){
    let sum = 0
    while (n>0){
        sum=sum +n
        n--
    }
    return sum
}
app.get("/sum",(req,res)=>{
    let n= parseInt(req.query.n)
   res.send(`<h2>the vaue is ${sum(n)}</h2>`)
})



/**
    * * Highlight: list of important status codes
    * 1. **200 OK:** The request was successful.

2. **201 Created:** The request was successful, and a new resource was created.

3. **204 No Content:** The server successfully processed the request, but there is no content to send in the response.

4. **400 Bad Request:** The server could not understand the request due to invalid syntax or other client-side error.

5. **401 Unauthorized:** The request requires user authentication, and the credentials provided are not valid.

6. **403 Forbidden:** The server understood the request, but it refuses to authorize it.

7. **404 Not Found:** The server could not find the requested resource.

8. **405 Method Not Allowed:** The method specified in the request is not allowed for the resource identified by the request URI.

9. **500 Internal Server Error:** A generic error message returned when an unexpected condition was encountered on the server.

10. **502 Bad Gateway:** The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed.

11. **503 Service Unavailable:** The server is not ready to handle the request. Common causes include server overload or maintenance.



type of requests
get
put
post
delete

**/


const user =[{
    name :"harkirat",
    kidney:{
        health:[false,true]
    }
},
]

app.get("/kidney",(req,res)=>{
    res.json({
         userName: user[0]["name"],
        numberOfKidney:user[0]["kidney"]["health"].length, 
        kidney1Status:user[0]["kidney"]["health"][0],
        kidney2Status:user[0]["kidney"]["health"][1]

    })
})

/**
    * * Highlight: expected inpur format
{
    "name" :"meet",
    "kidney":{
        "health":[true,true]
    }
}
**/
app.post("/addUserKidney",(req,res)=>{
    console.log(req.body)
    console.log(JSON.stringify(req.body))
    user.push(req.body)
 let    userArrLength=user.length
    res.json({
        status:"the request added successfully",
        data:{
            userName: user[userArrLength-1 ]["name"],
            numberOfKidney:user[userArrLength-1]["kidney"]["health"].length, 
            kidney1Status:user[userArrLength-1]["kidney"]["health"][0],
            kidney2Status:user[userArrLength-1]["kidney"]["health"][1],
        }
    })
})


app.put("/makeHealthTrueKidney",(req,res)=>{
    let reqbody=req.body
    let reqNam=reqbody['name']
    let filteredName=user.filter(()=>{

    })
})





/**
    * * Highlight: Map filter and arrow functions week 2.6
**/

function sum (){
    return "hello"
}
const sum2= ()=>{
return "hello"
}


/**
    * * Highlight: given an array give me back a new array where each value is multiplied by 2
**/

let arr = [1,2,3,4,5,6,7,8,9]
let newArr= arr.map((e)=>{return e*2})
console.log(newArr)
function transform(e){return e*3}
let newArr2 = arr.map (transform)
console.log(newArr2)



function checkEven(n){
    return true?(n%2 == 0):false
}
console.log(checkEven(2))


let newArr3=arr.filter(checkEven)
console.log(newArr3)
let arr2 = ["hritik", "magan","harkirat", "mahesh","himanshu", "meet", "mohan"]
let newArr4 = arr2.filter((e)=>{
    return e.startsWith("h")
})
console.log(newArr4)

// output:
// [
//     2,  4,  6,  8, 10,
//    12, 14, 16, 18
//  ]
//  [
//     3,  6,  9, 12, 15,
//    18, 21, 24, 27
//  ]
//  true
//  [ 2, 4, 6, 8 ]
// [ 'hritik', 'harkirat', 'himanshu' ]


app.listen(3000)


