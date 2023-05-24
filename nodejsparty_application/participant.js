const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const app = express();
const https = require('http');
const port = 500;
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



app.post("/participant",(req,res)=>{
    const event =req.body.Event
    console.log(event)
    const sql=`SELECT * FROM akash.participants where Event=${event} ORDER BY Name asc`

    connection.query(sql,function(err,result){
        console.log(err)
        const data = result
        console.log(data)
        res.json(data)
    })
})

app.post("/ratingData",(req,res)=>{
    const event =req.body.Event
    console.log(event)
    const sql=`SELECT * FROM akash.participants where Event=${event} ORDER BY Name asc`

    connection.query(sql,function(err,result){
        console.log(err)
        const data = result
        console.log(data)
        res.json(data)
    })
})


app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});