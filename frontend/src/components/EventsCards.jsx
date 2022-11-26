
import {useEffect, useRef, useState} from "react"
import { ReactDOM } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigate, useNavigate } from "react-router-dom"
import EventForm from "./EventForm"
// import { Scrollbars } from 'react-scroll'


function EventsCards({userId, event}) {
  const navigate = useNavigate()
  const [events, setEvents] = useState([])
  const [joinActive, setJoinActive] = useState(false)
  const [search, setSearch] = useState("")
  const [joinedUsers, setjoinedUsers] = useState()
  // const [style, setStyle] = useState()
  
  // const maxPartRef = useRef()
  // const changeStyle = () => {
  //   console.log("you just clicked");
  
  //   setStyle("btn-me");
  // };
  
 

  useEffect((event) => {
    fetch('http://localhost:5000/api/events/events')
      .then(res => {
        let resultJson = res.json();
        return resultJson;
      })
      .then(data => {
        setEvents(data)
      })
      .catch(err => console.log(err))
  }, [])
  
  
  const handleClick = (event) =>{
    console.log('User id: ' + userId);
    let queryString = event._id + '-' + userId;
    axios.put(`/participant/${queryString}`, joinedUsers)
  
    .then((res) =>  {
      console.log(res);
      // console.log(user._id);
      
 })
    .catch((err) => console.log(err))
    
    window.location.reload()
    // changeStyle()
    
    //   navigate("/dashboard")
    console.log(`event:${event._id}, user: ${userId}, joinedUsers: ${event.joinedUsers.length}`)
    console.log(event.joinedUsers)
   
   }

   const handleUnclick = (event) =>{
    console.log('User id: ' + userId);
    let queryString = event._id + '-' + userId;
    axios.put(`/noparticipant/${queryString}`, joinedUsers)
  
    .then((res) =>  {
      console.log(res);
      // console.log(user._id);
      
 })
    .catch((err) => console.log(err))
    
    window.location.reload()
    // changeStyle()
    
    //   navigate("/dashboard")
    console.log(`event:${event._id}, user: ${userId}, joinedUsers: ${event.joinedUsers.length}`)
    console.log(event.joinedUsers)
   
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
    <div className="container-landing ">
      <h3 className='m-3'>Events you can join:</h3>
        <input type="text" placeholder="Search by city..." onChange={e=>setSearch(e.target.value)} className="searchBar"/>
      <div className="event-ul">
        <ul className="event-card">
        {events.filter((event)=>{
          return search.toUpperCase() === '' ? event : event.city.toUpperCase().includes(search.toUpperCase());
        }).filter((event) => {
          return !event.joinedUsers.includes(userId);
        })
        .map((event) => 
          
          <li className="event" key={event._id}>
            <h5>{event.title}</h5>
            <p className="mb-0"><strong>When: </strong> {event.date}, {event.time}</p>
            <p className="mb-0"><strong>Where: </strong>{event.city}, {event.address}</p>
            <p className="mb-0">Description: {event.description}</p>
            {/* <p >Max. participants: {event.participants}</p>
            <p >Participants so far: {event.joinedUsers.length}</p> */}
            
            <p >{event.joinedUsers.length >= event.participants ? '' : `Spaces left: ${event.participants - event.joinedUsers.length}`}</p>
            {/* <p>{event.joinedUsers.includes(userId) ? 'true' : 'false'}</p> */}
            <h5><strong>{event.joinedUsers.length >= event.participants ? 'This event is not accepting any more participants. Check back later' : ''}</strong></h5>
            <div>
            <button className={`btn-me btn-block ${event.joinedUsers.includes(userId) ? 'hidden' : 'shown'} ${event.joinedUsers.length >= event.participants ? 'unclickable' : ''}`} onClick={(() =>handleClick(event, event._id, userId))} >JOIN</button>
            <button className={`test btn-me btn-block ${event.joinedUsers.includes(userId) ? 'shown' : 'hidden'}`} onClick={(() =>handleUnclick(event, event._id, userId))} >UNJOIN</button>
           </div>
           

            </li>
        )}
          </ul>
      
       </div>
      
    </div>
  )


}

export default EventsCards

