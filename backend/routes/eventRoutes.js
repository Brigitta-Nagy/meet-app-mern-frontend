const express = require('express')
const router = express.Router()

const {
  getAllEvents,
  getEvents,
  setEvent,
  updateEvent,
  deleteEvent,
  joinedEvents
} = require('../controllers/eventController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getEvents).post(protect, setEvent)

router.route('/:id').delete(protect, deleteEvent)
// .put(updateEvent)
 router.route('/events').get(getAllEvents)
 router.route("/update/:id").put(protect, updateEvent)

// router.route("/joined").get(joinedEvents)

// (req, res) => {
//     Event.findByIdAndUpdate({_id:req.params.id}, {
//       title:req.body.title, 
//       description: req.body.description})
//     })
//       .then(doc => console.log(doc))
//       .catch(err => console.log(err))
// router.put(`/joined/:id`, async (req, res)=>{
//     try{
//       const events = await Event.findById(req.params.id)
//       if(events.joinedUsers.filter(joined => joined.user.toString() === req.user.id).length > 0 ){
//         return res.status(400).json({msg:"already joined"})
//       }
//       events.joinedUsers.unshift({user:req.user.id})
//       await events.joinedUsers.save()
//       res.json(events.joinedUsers)
//     }catch (err) {
//       console.log(err.message);
//       req.status(500).send("Server Error")
//     }
// })

module.exports = router
