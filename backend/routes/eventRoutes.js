const express = require('express')
const router = express.Router()
const {
  getAllEvents,
  getEvents,
  setEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/eventController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getEvents).post(protect, setEvent)
router.route('/:id').delete(protect, deleteEvent)
// .put(updateEvent)
 router.route('/events').get(getAllEvents)
  router.route("/update/:id").put(protect, updateEvent)
// (req, res) => {
//     Event.findByIdAndUpdate({_id:req.params.id}, {
//       title:req.body.title, 
//       description: req.body.description})
//     })
//       .then(doc => console.log(doc))
//       .catch(err => console.log(err))


module.exports = router
