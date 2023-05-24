const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const app = express();
const https = require('http');
const port = 150;

// create application/json parser
var jsonParser = bodyparser.json()
app.use(jsonParser);

// get the client
const mysql = require('mysql2');
const { error } = require("console");
let cors = require("cors");
app.use(cors());

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'akash',
    password: 'Adarsh!@#$%1',
});

// check database connection
connection.connect(err => {
    if (err) { (console.log('err')) }
    console.log("Database connected successfully")
})

app.post("/party_detail",(req,res)=>{
    // console.log(req,"this is nodejs data")
    // console.log(req.body.user_id,"this is nodejs data")
    // res.json("test");
    const data= req.body.user_id
    // console.log(data)
    const sql=`SELECT * FROM akash.events where User=${data};`

    connection.query(sql,function(err,result){
        // console.log(err)
        const data = result
        // console.log(data)
        res.json(data)
    })
})

app.post("/count",(req,res)=>{
    // console.log(req,"this is nodejs data")
    // console.log(req.body.user_id,"this is nodejs data")
    // res.json("test");
    const data= req.body.user_id
    // console.log(data)
    const sql=`SELECT COUNT(*) AS row_count FROM events where User=${data};`

    connection.query(sql,function(err,result){
        // console.log(err)
        const data = result
        // console.log(data)
        res.json(data)
    })
})


app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});