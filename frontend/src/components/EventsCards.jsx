
import {useEffect, useRef, useState} from "react"
import { ReactDOM } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigate, useNavigate } from "react-router-dom"

function EventsCards({userId}) {
  const navigate = useNavigate()
  const [events, setEvents] = useState([])
  const [joinActive, setJoinActive] = useState(false)
  const [search, setSearch] = useState("")
  const [leftPlaces, setLeftPlaces] = useState(5)
  const maxPartRef = useRef()
  
  const joined = event => {
   
    // axios.post("/joined", events)
   
    // .then((res) =>  console.log(res))
    // .catch((err) => console.log(err))
    //   navigate("/dashboard")
      
    event.currentTarget.classList.toggle('green');
    console.log(event.currentTarget)
    if(event.currentTarget.innerHTML === 'Join') {
      event.currentTarget.innerHTML = 'Joined';
    } else {
      event.currentTarget.innerHTML = 'Join';
    }
  }
 

  useEffect((event) => {
    fetch('http://localhost:5000/api/events/events')
      .then(res => {return res.json()
      })
      .then(data => {
        setEvents(data)
        console.log(`user array length: ${event.joinedUsers}.length`)
        console.log(data)
      })
      .catch(err => console.log(err))
  }, [])
  
  
  const handleClick = (event) =>{
    console.log(`event:${event._id}, user: ${userId}`)
    console.log(event)

    event.joinedUsers.push(userId)

   }
 



  // const handleClick = (event)=>{
  //    console.log(event)
     
  //   // setJoinActive(!joinActive)
  //    axios.post("/joined", event)
  //    .then((res) => {
      
  //     console.log(res)})
  //    .catch((err) => console.log(err))
    // navigate("/dashboard")
  //   }
  return(
    <div>
      <h3 className='m-3'>Events you can join :</h3>
        <input type="text" placeholder="Search by city..." onChange={e=>setSearch(e.target.value)} className="searchBar"/>
      <div className='event '>
        <ul >
        {events.filter((event)=>{
          return search.toLowerCase() === '' ? event : event.city.toLowerCase().includes(search) 
        })
        .map((event) => 
          
          <li className="m-2" ref={maxPartRef} key={event._id}>
            <h3>{event.title}</h3>
            <h4 >When: {event.date}, {event.time}</h4>
            <p><strong>Where: </strong>{event.city}, {event.address}</p>
            <p>Description: {event.description}</p>
            <p >Max. participants: {event.participants}</p>
            <p >Participants so far: {event.joinedUsers}</p>
           
            <button onClick={(() =>handleClick(event, userId))} >JOIN</button>
            <button className='btn-me btn-block' onClick={joined}
            //  key = {event._id}
          /* onClick={()=>joined(this)} */> 
            {joinActive ? "no" : "yes"}
            </button>

            </li>
        )}
          </ul>
     
      
      
       
       
      
       </div>
      
    </div>
  )


}

export default EventsCards

