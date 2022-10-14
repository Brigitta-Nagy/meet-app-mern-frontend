const express = require("express")
require("dotenv").config()
const cors = require("cors")
const port = process.env.PORT || 4000
const connectDB = require("./connection")



connectDB()
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.use("/api/events" , require('./routes/eventRoutes'))

app.listen(4000, ()=> console.log(`server running on ${port}`))