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

// check database connection
connection.connect(err => {
    if (err) { (console.log('err')) }
    console.log("Database connected successfully")
})
let cors = require("cors");
app.use(cors());

app.get("/Rating",(req,res)=>{
    const sql=`SELECT Name as name, AVG(number) as number  FROM akash.party GROUP BY name;`

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