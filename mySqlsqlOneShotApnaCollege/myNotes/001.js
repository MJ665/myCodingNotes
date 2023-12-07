let mysql2 = require ("mysql2")
require("dotenv").config()
let connection = mysql2.createConnection({
    host: process.env.host,
    user:process.env.user,
    password:process.env.password,
    database: process.env.database
})
connection.connect((err)=>{
    if(err){
        return console.log( " we got an error"+ err)
    }else{
        return console.log("we got it")
    }
})

// insert statment
let sql = `INSERT INTO todos(title,completed)
           VALUES('Learn how to insert a new row',true)`;

// execute the insert statment
connection.query(sql);
connection.end((err)=>{
    if(err){
        return console.log("we again got an error while ending "+err)
    }else{
        return console.log("successfulle closing the connection")
    }
})