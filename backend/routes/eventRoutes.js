const express = require("express")
const router = express.Router()
const Event = require("../models/eventModel")
const asyncHandler = require("express-async-handler")


router.get("/", async (req, res)=> {
  const events = await Event.find()
  
  res.status(200).json(events)
})

router.post("/create", asyncHandler(async (req, res)=> {
  if (!req.body.title || !req.body.city || !req.body.address || !req.body.date || !req.body.time || !req.body.description || !req.body.participants) {
    res.status(400)
    throw new Error("Please add all the details")
  }
  const event = await Event.create({
   title: req.body.title,
   city: req.body.city,
   address: req.body.address,
   date: req.body.date,
   time: req.body.time,
   description: req.body.description,
   participants: req.body.participants
  })
  
  res.status(200).json(event)
  console.log(event)
}))

router.put("/:id", asyncHandler(async (req, res)=> {
  const event = await Event.findById(req.params.id)
  if(!event){
    res.status(400)
    throw new Error("Event not available")
  }
  const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.send({message: `update events ${req.params.id}`})
  res.status(200).json({message: `update events ${req.params.id}`})
}))


router.delete("/:id",  asyncHandler(async (req, res)=> {
  const event = await Event.findById(req.params.id)
  if(!event){
    res.status(400)
    throw new Error("Event not available")
  }
  await event.remove()
  
  res.status(200).json({id: req.params.id})
}))







module.exports = router
