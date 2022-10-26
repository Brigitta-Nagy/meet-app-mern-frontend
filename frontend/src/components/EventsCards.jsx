
import {useEffect, useState} from "react"
// import EventItem from "./EventItem"

import 'bootstrap/dist/css/bootstrap.min.css'

function EventsCards() {
  const [events, setEvents] = useState([])
  const [joinActive, setJoinActive] = useState(false)

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
    setJoinActive(current => !current)
   }
  return(
    <div>
      <h3 className='m-3'>Events you can join :</h3>
      <input search/>
      <div className='event '>
     
      {events.map((event) => (
         <ul>
       <li className="m-3" key={event._id}><h2>{event.title}</h2>
        <h4>Date and time: {event.date}, {event.time}</h4>
        <p><strong>Address: </strong>{event.city}, {event.address}</p>
        <p>Description: {event.description}</p>
        <p>Max. participants:{event.participants} </p>
        <button className="btn-me btn-block" onClick={handleClick}>Join</button>
        </li>
         </ul>
        
        ))}
      
      
       </div>
      
    </div>
  )


}

export default EventsCards

//  <EventItem key={event._id} event={event} />
      //    ))}
// {events.map(event => (<li key={event._id}>{event.title}</li>))}
// fetch(url)
// .then(function(response) {
// if (response.status >= 400) {
//    throw new Error("Bad response from server");
// }
// return response.json();
// })
// .then(function(data) {
//  console.log(data);
// });