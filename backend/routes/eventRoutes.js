const express = require("express")
const router = express.Router()


router.get("/", async (req, res)=> {
  res.send({message: "get events"})
  res.status(200).json({message: "get events"})
})

router.post("/", async (req, res)=> {
  // res.send({message: "create events"})
  console.log(req.body)
  res.status(200).json({message: "create events"})
})

router.put("/:id", async (req, res)=> {
  res.send({message: `update events ${req.params.id}`})
  res.status(200).json({message: `update events ${req.params.id}`})
})


router.delete("/:id", async (req, res)=> {
  res.send({message: `delete events ${req.params.id}`})
  res.status(200).json({message: `delete events ${req.params.id}`})
})







module.exports = router
