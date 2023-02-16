const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const Event = require("./models/eventModel");
const User = require("./models/userModel");
const Joined = require("./models/joinedModel");
const { userInfo } = require("os");
const { db } = require("./models/eventModel");

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

// app.post("participant", (req, res)=>{
//   console.log(req.body)
// })

app.put("/update/:id", (req, res) => {
  // const newJoinedUser = User.email
  Event.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      city: req.body.city,
      address: req.body.address,
      date: req.body.date,
      time: req.body.time,
      participants: req.body.participants,
      description: req.body.description
    }
    //{
    //     $push: {
    //  joinedUsers:newJoinedUser

    // } }
  )

    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => console.log(err));
});

//});
// app.put(`/update/${Event._id}`, (req, res) => {
// console.log(req.params)
// })

app.put("/participant/:queryString", (req, res) => {


  let eventId = req.params.queryString.split("-")[0];
  let userId = req.params.queryString.split("-")[1];

  const newJoinedUser = userId;

  Event.findByIdAndUpdate(eventId, {
    $addToSet: {
      joinedUsers: newJoinedUser,
    },
  })

    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => console.log(err));
});

app.put("/noparticipant/:queryString", (req, res) => {
 

  let eventId = req.params.queryString.split("-")[0];
  let userId = req.params.queryString.split("-")[1];

  const newJoinedUser = userId;

  Event.findByIdAndUpdate(eventId, {
    $pull: {
      joinedUsers: newJoinedUser,
    },
  })

    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => console.log(err));
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
