const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema (
  {
    user:{
      type:mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  title: 
   {type: String, required: [true, 'Please add title']},
  city: 
   {type: String, required: [true, 'Please add city'], lowercase: true, trim: true}, 
  address: 
    {type: String, required: [true, 'Please add exact address']}, 
  date: 
    {type: Date, required: [false, 'Please add date']},
  time: 
    {type: String, required: [true, 'Please add time']},
  description: 
    {type: String, required: [true, 'Please add more details']},
  participants: {
    type: Number, required: [true, 'Please add max. participants']},
  },
    {
      timestamps: true,
    }
      
)

const Event = mongoose.model("Event", eventSchema)

module.exports = Event;