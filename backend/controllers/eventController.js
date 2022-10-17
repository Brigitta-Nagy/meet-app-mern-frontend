const asyncHandler = require('express-async-handler')

const Event = require('../models/eventModel')
const User = require('../models/userModel')

// @desc    Get event
// @route   GET /api/event
// @access  Private
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({ user: req.user.id })

  res.status(200).json(events)
})

// @desc    Set event
// @route   POST /api/events
// @access  Private
const setEvent = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.city || req.body.address || req.body.date || req.body.time) {
    res.status(400)
    throw new Error('Please add all the details')
  }

  const event = await Event.create({
    title: req.body.title,
    city: req.body.city,
    address: req.body.address,
    date: req.body.date,
    time: req.body.time,
    description: req.body.description,
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

  // Make sure the logged in user matches the event publisher
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

  // Make sure the logged in user matches the event publisher
  if (event.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await event.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getEvent,
  setEvent,
  updateEvent,
  deleteEvent,
}