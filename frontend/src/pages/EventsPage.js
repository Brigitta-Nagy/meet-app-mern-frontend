
import axios from "axios"
import React, {useState, useEffect} from "react"
import {Link, useNavigate} from "react-router-dom"
import {Button} from "react-bootstrap"


function EventsPage() {
  const [events, setEvents] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("/events")
    .then((res)=>{
      console.log(res)
      setEvents(res.data)
    })
    .catch((err)=>console.log(err))
  },[])
  //   const fetchEvents = async()=> {
  //     const response = await fetch("/events")
  //     const json = await response.json()

  //     if(response.ok){
  //       setEvents(json)
  //     }
  //   } 
  //   fetchEvents()
  // }, [])
  return(
    <div className="container d-flex">
    <h1>Your events</h1>
  {events ? (
    <>
      {events.map((event) => {
  return (
      <div className="eventCard m-1 border border-light"
      key={event._id}    >
      <h5>Event title: {event.title}</h5>
      <p>Location: {event.city}<br/>
      Exact address: {event.address}<br/>
      Date and time: {event.date}, {event.time} <br/>
      More details: {event.description}</p>

      <div className="d-flex justify-content-between m-1"
      
      >
        <Button className="btn  btn-sm"
           variant="outline-info m-1"
          // onClick={() =>
          //   updatePost(post._id, post.title, post.description)
          // }
          style={{ width: "50%" }}
        >
          UPDATE
        </Button>
        <Button className="btn  btn-sm"
          // onClick={() => deletePost(post._id)}
          variant="outline-danger m-1"
          style={{ width: "50%" }}
        >
          DELETE
        </Button>
        </div>
    </div>
  );
      })}

      </>
  ):("")}

     <Button variant="outline-info m-1" onClick={()=>navigate("create")}>Create Event</Button>
  </div>

);}

export default EventsPage