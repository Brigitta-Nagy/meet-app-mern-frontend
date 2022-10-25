const express = require("express")
const path = require("path")
require("dotenv").config()
const cors = require("cors")
const connectDB = require("./connection")
const port = process.env.PORT || 4000
const asyncHandler = require("express-async-handler")
const Event = require ("./models/eventModel")
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB()
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


 app.use("/api/events" , require('./routes/eventRoutes'))
  app.use('/api/users', require("./routes/userRoutes"))

//   app.post("/create",  (req, res)=> {
//  Event.create({
//   title: req.body.title,
//    city: req.body.city,
//    address: req.body.address,
//    date: req.body.date,
//    time: req.body.time,
//    description: req.body.description,
//    participants: req.body.participants
//  }).then((doc)=>console.log(doc))
//   .catch((err)=>console.log(err))
// })

// app.get("/events", (req,res)=>{
//   Event.find()
//   .then(items => res.json(items))
//   .catch((err)=>console.log(err))
// })

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);

app.listen(port, ()=> console.log(`server running on ${port}`))