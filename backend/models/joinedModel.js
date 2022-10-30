const mongoose = require('mongoose')

const joinedSchema = mongoose.Schema(
  {   
  //   user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   // required: true,
  //   ref: 'User',
   
  // },
    
    title: {
      type: String, 
      uppercase: true,
     
    },
    city: {
      type: String, 
     
      uppercase: true, 
      trim: true
    }, 
    address: {
      type: String, 
     
      }, 
    date: {
      type: String, 
      
    },
    time: {
      type: String, 
     
    },
    description: {
      type: String, 
      // required: [true, 'Please add more details']
    },
    participants: {
      type: Number, 
      // required: [true, 'Please add max. participants']
    },
    },
  
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Joined', joinedSchema)
