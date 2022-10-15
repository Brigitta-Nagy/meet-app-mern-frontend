
import React, {useState, useEffect} from "react"
import {Link, useNavigate} from "react-router-dom"


function EventsPage() {
  const [events, setEvents] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchEvents = async()=> {
      const response = await fetch("http://localhost:4000/api/events")
      const json = await response.json()

      if(response.ok){
        setEvents(json)
      }
    } 
    fetchEvents()
  }, [])

  return (
    <>  <div>EventsPage</div>
          <div className="eventsContainer">
            {events && events.map((event)=>(
              <p key={event._id}>{event.title}</p>
            ))}
          </div>
    <button onClick={()=>navigate("create")}>Create an event</button>
    </>

  )
}

export default EventsPage