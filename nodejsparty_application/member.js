const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const app = express();
const https = require('http');
const port = 100;

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

app.post("/Add_Member", (req, res) => {
    console.log("hello", req.body)
    const{Event,Name}=req.body;
    console.log(Event,Name)

    // Enter data into database
    const sql = 'insert into participants (Event,Name) values(?, ?)';
    

    // with placeholder
    connection.query(
        sql,
        [Event,Name],
        function (err, results) {
            if (results) {
                data = { message: "Member data for party is done", Boolean: 1 }
                res.json(data)
            }
            else {
                data = { message: "error", Boolean: 0 }
                res.json(data)
            }
            // console.log(results);
            console.log(err)
        });

    
})

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});