const mongoose = require('mongoose')
require("dotenv").config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MongoDB_URI)

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error)
 
  }
}

module.exports = connectDB