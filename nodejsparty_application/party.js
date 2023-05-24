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

app.post("/eventRating", (req, res) => {
    // console.log("hello", req.body)
    for(i=0;i<req.body.ratingValue.length;i++){
        let Participant=req.body.participantId[i].Id
        console.log(Participant)
        let RatingPoint=req.body.ratingValue[i]
        console.log(RatingPoint)

        // Enter data into database
  const sql = 'insert into rating  (Participant,RatingPoint) values(?, ?)';

  connection.query(
    sql,
    [Participant,RatingPoint],
    function (err, results) {
          console.log(results, "this is result");
          // console.log(err, "this is error")
    });
    }


    // data=req.body
//     const keys = Object.keys(data);
// const keysWithValue = keys.filter((key) => data[key] !== null);
// i=0
// keysWithValue.forEach((key) => {
    // i=key
    // console.log(data[i])
//   console.log(key);
//   event_id=parseInt(key)
  
  // with placeholder
 

});   
    // } 
// )

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});