const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const app = express();
const https = require('http');
const port = 800;

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

app.post("/Party", (req, res) => {
    console.log("hello", req.body)
    const { name, rating } = req.body;
    console.log(name, rating);

    // Enter data into database
    const sql = 'insert into party (Name,Number) values(?, ?)';

    // with placeholder
    connection.query(
        sql,
        [name,rating],
        function (err, results) {
            if (err) {
                data = { message: "error", Boolean: 0 }
                res.json(data)
            }
            else {
                data = { message: "Party is schedule", Boolean: 1 }
                res.json(data)
            }
            //   console.log(results, "this is result");
            //   console.log(err, "this is error")
        });
})

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});