const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const app = express();
const https = require('http');
const port = 60;

// for generate random number
const crypto = require("crypto");
const n = crypto.randomInt(100000000, 9999999999);
console.log(n);
// get the client
// const mysql = require('mysql2');
// const { error } = require("console");

// create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'akash',
//     password: 'Adarsh!@#$%1',
// });

// check database connection
// connection.connect(err => {
//     if (err) { (console.log('err')) }
//     console.log("Database connected successfully")
// })


let cors = require("cors");
app.use(cors());

// create application/json parser
var jsonParser = bodyparser.json()
app.use(jsonParser);

app.post("/creatlink", (req, res) => {
    console.log("hello", req.body)
    // console.log(typeof(req.body.event_id))
    event_id=parseInt(req.body.event_id)
    const new_number = n+event_id
    console.log(new_number)
    const hexadecimalNumber = new_number.toString(16);
    console.log(hexadecimalNumber)
})

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});