const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const app = express();
const https = require('http');
const port = 900;

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

// create application/json parser
var jsonParser = bodyparser.json()
app.use(jsonParser);

// check database connection
connection.connect(err => {
    if (err) { (console.log('err')) }
    console.log("Database connected successfully")
})
let cors = require("cors");
app.use(cors());

app.post("/rating",(req,res)=>{
//   let data=req.body
    console.log(req.body.event_id,"this is req.body")
    const sql=`SELECT p.Name, ROUND(AVG(r.RatingPoint),1) as Rating
    FROM participants p
    INNER JOIN rating r ON p.Id = r.Participant 
    where p.Event='${req.body.event_id}'
    GROUP BY p.Name
    order by Rating desc;`

    connection.query(sql,function(err,result){
        // console.log(err)
        const data = result
        console.log(data)
        res.json(data)
    })
})


app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});