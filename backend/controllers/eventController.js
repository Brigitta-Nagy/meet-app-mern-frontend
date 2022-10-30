const asyncHandler = require('express-async-handler')
// const { default: JoinedEvents } = require('../../frontend/src/components/JoinedEvents')

const Event = require('../models/eventModel')
const User = require('../models/userModel')
// const Joined = require('../models/joinedModel')

// @desc    Get events
// @route   GET /api/events
// @access  Private
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({ user: req.user.id })

  res.status(200).json(events)
})

// @desc    Get all events
// @route   GET /api/events/events
// @access  Public
const getAllEvents = asyncHandler(async (req, res) =>{
  const allEvents = await Event.find()

  res.status(200).json(allEvents)
})
// @desc    Set event
// @route   POST /api/events
// @access  Private
const setEvent = asyncHandler(async (req, res) => {
  
  if (!req.body.title && !req.body.city) {
    res.status(400)
    throw new Error('Please add all field')
  }
  const event = await Event.create({
    title: req.body.title,
    city:req.body.city, 
    address: req.body.address, 
    date: req.body.date,
    time: req.body.time,
    description:req.body.description,
    participants: req.body.participants,
    user: req.user.id,
  })

  res.status(200).json(event)
})
 
// @desc    Update event
// @route   PUT /api/events/:id
// @access  Private
const updateEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id)

  if (!event) {
    res.status(400)
    throw new Error('Event not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the event user
  if (event.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }


  const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
 
  })

  res.status(200).json(updatedEvent)
})

// @desc    Delete event
// @route   DELETE /api/events/:id
// @access  Private
const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id)

  if (!event) {
    res.status(400)
    throw new Error('Event not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the event user
  if (event.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await event.remove()

  res.status(200).json({ id: req.params.id })
})

// const joinedEvents = asyncHandler(async (req, res) => {
//   const events = await Joined.find(
//     // { user: req.user.id }
//     )

//   res.status(200).json(joinedEvents)
// })

// app.get("/joined", (req, res)=>{
//   Joined.find()
//   .then(items => res.json(items))
//   .catch(err => console.log(err))
// })

module.exports = {
  getAllEvents,
  getEvents,
  setEvent,
  updateEvent,
  deleteEvent,
  
}
