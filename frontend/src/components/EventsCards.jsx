// import axios from "axios"
import {useEffect, useState} from "react"
// import EventItem from "./EventItem"
// import {Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

function EventsCards() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/events/events')
      .then(res => {return res.json()
      })
      .then(data => {
        setEvents(data)
      })
      .catch(err => console.log(err))
  }, [])

  return(
    <div>
      <p>Events you can join</p>
      <div className='event '>
     
      {events.map((event) => (
         <ul>
       <li className="m-3" key={event._id}><h2>{event.title}</h2>
        <h3>Date and time: {event.date}, {event.time}</h3>
        <p>Address: {event.city}, {event.address}</p>
        <p>Description: {event.description}</p>
        <p>Max. participants:{event.participants} </p>
        <button className="btn btn-info">Join</button>
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