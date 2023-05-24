const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const app = express();
const https = require('http');
const port = 1000;

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
connection.connect(err => {
    if (err) { (console.log('err')) }
    console.log("Database connected successfully")
})


let cors = require("cors");
app.use(cors());

// create application/json parser
var jsonParser = bodyparser.json()
app.use(jsonParser);

app.post("/party", (req, res) => {
    console.log("hello", req.body)
    const {User, Name, Place,Description,Date,Time} = req.body;
    console.log( User,Name,Place,Description,Date,Time);

    // Enter data into database
    const sql = 'insert into events (User ,Name ,Description ,Place,StartDate, StartTime) values(?, ?, ?, ?, ?, ?)';

    // with placeholder
    connection.query(
        sql,
        [User,Name,Description,Place, Date, Time],
        function (err, results) {
            if (err) {
                data = { message: "error", Boolean: 0 }
                res.json(data)
            }
            else {
                data = { message: "Party is schedule", Boolean: 1 }
                res.json(data)
            }
              console.log(results, "this is result");
              console.log(err, "this is error")
        });
})

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});