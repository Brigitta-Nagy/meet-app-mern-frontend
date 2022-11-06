
const mongoose = require('mongoose')

const eventSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String, 
      uppercase: true,
      required: [false, 'Please add title']
    },
    city: {
      type: String, 
      required: false, 
      uppercase: true, 
      trim: true
    }, 
    address: {
      type: String, 
      required: [false, 'Please add exact address']
      }, 
    date: {
      type: String, 
      required: false
    },
    time: {
      type: String, 
      required: false
    },
    description: {
      type: String, 
      // required: [true, 'Please add more details']
    },
    participants: {
      type: Number, 
      // required: [true, 'Please add max. participants']
    },
   joinedUsers:[String]
    },

      {
        timestamps: true,
      }
)

module.exports = mongoose.model('Event', eventSchema)
