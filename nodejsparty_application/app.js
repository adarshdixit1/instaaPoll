const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const app = express();
const https = require('http');
const port = 80;

// get the client
const mysql = require('mysql2');
const { error } = require("console");

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'akash',
    password: 'Adarsh!@#$%1',
});

// check database connection
connection.connect(err=>{
    if(err){(console.log('err'))}
    console.log("Database connected successfully")
})


let cors = require("cors");
app.use(cors());

// create application/json parser
var jsonParser = bodyparser.json()
app.use(jsonParser);

app.post("/home", (req, res) => {
    console.log("hello", req.body)
    const{email,password}=req.body;
    console.log(email,password)

    // console.log(jsonParser)

    connection.query(`select * from singup where email='${email}' and password='${password}'`, (error, resp, field) => {
        // res.json({ status: resp });
            if(email=="ajfo12@gmail.com" && password=="Adarsh"){
                console.log("Admin login")
               data= {message:"success",data:"You are admin", Boolean:1}
                res.json(data)
            }
            else if (resp.length > 0) {
                console.log("Enter a right username")
                data= {message:"success",data:"you are success fully login", Boolean:1}
                res.json(data)
            }
            else{
                console.log("You enter a wrong username and password")
                data= {message:"success",data:"Error", Boolean:0}
                res.json(data)
            }      
    });
})

app.get("/home", (req, res) => {
    
    res.send();
})

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});