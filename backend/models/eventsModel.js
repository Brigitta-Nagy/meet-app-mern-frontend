const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema ({
  title: 
   {type: String, required: true},
  city: 
   {type: String, required: true, lowercase: true, trim: true}, 
  address: 
    {type: String, required: true}, 
  date: 
    {type: Date, required: true},
  time: 
    {type: time, required: true},
  description: 
    {type: String, required: true},
  attendants: {
    type: Number, required: true},
  
    
})

const Event = mongoose.model("Event", eventSchema)

module.exports = Event;