const connection = require("../config/database")

const deleteEvent=(req,res)=>{
    // console.log("hello", req.body)
    const {event_id } = req.body;
    console.log( event_id);

    // Enter data into database
    const sql = `DELETE akash.participants, akash.rating, akash.events,akash.event_link FROM akash.events AS t1 INNER JOIN akash.event_link AS t2 ON t1.Id = t2.Event INNER JOIN akash.participants AS t3 ON t1.Id= t3.Event INNER JOIN akash.rating AS t4 ON t3.Id = t4.participan WHERE t1.User='3'`

    // with placeholder
    connection.query(
        sql,
        [event_id],
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
        return;

}

const creatEventData= (req,res) => {
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
        return;
}
// app.post("/party", (req, res) => { 
// })

const viewRating=(req,res)=>{
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
}
// app.post("/rating",(req,res)=>{
//     //   let data=req.body
        
//     })

const addParticipants=(req,res)=>{
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
}
// app.post("/Add_Member", (req, res) => {   
// })

const showParticipants=(req,res)=>{
    const event =req.body.Event
    console.log(event)
    const sql=`SELECT * FROM akash.participants where Event=${event} ORDER BY Name asc`

    connection.query(sql,function(err,result){
        console.log(err)
        const data = result
        console.log(data)
        res.json(data)
    })
}
// app.post("/participant",(req,res)=>{
    
// })

const InputCreatLink=(req,res)=>{
    console.log("hello", req.body)
    const {event_id, link, hour} = req.body;
    console.log( event_id, link, hour);

    // Enter data into database
    const sql = 'insert into event_link (Event, Link, ExpiryTime, IsExpired) values(?, ?, ?, ?)';

    // with placeholder
    connection.query(
        sql,
        [event_id,link,hour,0],
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
              console.log(err, "this is error")
        });
}
// app.post("/eventlink", (req, res) => {
    
// })

module.exports = {
    creatEventData,
    viewRating,
    addParticipants,
    showParticipants,
    InputCreatLink,
    deleteEvent
};