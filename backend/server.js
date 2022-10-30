const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose")
const Event = require("./models/eventModel")
const Joined = require("./models/joinedModel");
const { userInfo } = require("os");
// mongoose.connect("mongodb://localhost:5000", {
//   useNewUrlParser: "true",
//   useUnifiedTopology: "true"
// })
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// app.post("/joined", (req, res) =>{
//   Joined.create({
//     title: req.body.title,
//     city:req.body.city,
//     address:req.body.address,
//     date:req.body.date,
//     time:req.body.time,
//     participants:req.body.participants,
//     description: req.body.description,
//   })
//   .then(doc => console.log(doc))
//   .catch(err => console.log(err))
//   })

//   app.get("/joined", (req, res)=>{
     
//     Joined.find(
//       //IF 
//       // { user: req.user.id }
//       )
//     .then(items => {
//       console.log("hey")
//       res.json(items)})
//     .catch(err => console.log(err))
//   })




app.put("/update/:id", (req, res) => {
  
  Event.findByIdAndUpdate(req.params.id,
    { title: req.body.title,
      city:req.body.city,
      address:req.body.address,
      date:req.body.date,
      time:req.body.time,
      participants:req.body.participants,
      description: req.body.description,
  }

)
  .then((doc) => console.log(doc))
  .catch((err) => console.log(err));

  // Event.find({}, function (err, events) {
  //     console.log(events);
  // })

});

  


 

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
