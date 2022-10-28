
import {useEffect, useState} from "react"
// import EventItem from "./EventItem"

import 'bootstrap/dist/css/bootstrap.min.css'

function EventsCards({event}) {
  const [events, setEvents] = useState([])
  const [joinActive, setJoinActive] = useState(false)
  const [search, setSearch] = useState("")
  

  useEffect(() => {
    fetch('http://localhost:5000/api/events/events')
      .then(res => {return res.json()
      })
      .then(data => {
        setEvents(data)
      })
      .catch(err => console.log(err))
  }, [])



  const handleClick = ()=>{
    setJoinActive(!joinActive)
    
   }
  return(
    <div>
      <h3 className='m-3'>Events you can join :</h3>
        <input type="text" placeholder="Search by city..." onChange={e=>setSearch(e.target.value)} className="searchBar"/>
      <div className='event '>
        <ul >
        {events.filter((event)=>{
          return search.toLowerCase() === '' ? event : event.city.toLowerCase().includes(search) 
        })
        .map((event) => (
          
          <li className="m-2" key={event._id}>
            <h3>{event.title}</h3>
            <h4>When: {event.date}, {event.time}</h4>
            <p><strong>Where: </strong>{event.city}, {event.address}</p>
            <p>Description: {event.description}</p>
            <p>Max. participants:{event.participants} </p>
            <button className="btn-me btn-block" 
          onClick={() => handleClick(event._id)}
          //  onClick={handleClick} className= {`btn-me btn-block ${joinActive} ? notJoin-button : "" `}
          >{joinActive ? "Joined" : "Join"}</button>

            </li>
          ))}
          </ul>
     
      
      
       
       
      
       </div>
      
    </div>
  )


}

export default EventsCards

