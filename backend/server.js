const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.listen(port, ()=> console.log(`server running on ${port}`))