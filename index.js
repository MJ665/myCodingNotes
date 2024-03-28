/**
    * * Highlight: 0-1
    * * Highlight: 2.2
    * * Highlight: Node js & its run time
    * * Highlight: backend communication protocol
    * * Highlight:  express basic
    * * Highlight: routes status codes
**/


/**
    * * Highlight: ecma script
    * ecmascript is a scripting language specification on which javascript is based ecma international is in change of standardizing ecmascript
**/


const express = require ("express")
const bodyParser= require("body-parser")
const app = express()
// to set default port we have to do write command 
// terminal command
// export PORT=8080
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.get ('/',(req,res)=>{

    res.send("<b>Hello World!</b>")
})
app.post ('/printReqBody',(req,res)=>{
    console.log(req.body)
    res.send("<b>Hello body parser World!</b>")
})
app.post('/backend-api/conversations',function (req,res){
    /**
        * rum some calculation ML model
    **/
   res.json({yeLeTeraResponse:"chutiye ye kya bhej raha hai"})
})
app.listen(port,()=>{
    console.log(`listening on ${port}`)
})