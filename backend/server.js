const express = require("express")
require("dotenv").config()
const cors = require("cors")
const port = process.env.PORT || 4000
const connectDB = require("./connection")
const asyncHandler = require("express-async-handler")
const Event = require ("./models/eventModel")




connectDB()
const app = express()

app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: false }));


// app.use("/api/events" , require('./routes/eventRoutes'))
app.post("/create",  (req, res)=> {
 Event.create({
  title: req.body.title,
   city: req.body.city,
   address: req.body.address,
   date: req.body.date,
   time: req.body.time,
   description: req.body.description,
   participants: req.body.participants
 }).then((doc)=>console.log(doc))
  .catch((err)=>console.log(err))
})

app.get("/events", (req,res)=>{
  Event.find()
  .then(items => res.json(items))
  .catch((err)=>console.log(err))
})

app.listen(4000, ()=> console.log(`server running on ${port}`))