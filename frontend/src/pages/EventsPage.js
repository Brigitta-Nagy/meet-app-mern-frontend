
import React, { useEffect} from "react"
import { useNavigate} from "react-router-dom"
// import {Button} from "react-bootstrap"
import {useSelector, useDispatch} from 'react-redux'
import EventForm from "../components/EventForm"
import EventItem from "../components/EventItem"
import {getEvents, reset } from "../features/events/eventSlice"


function EventsPage() {
  const navigate = useNavigate()
  
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { events,  isError, message } = useSelector(
    (state) => state.events
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/')
    }

    dispatch(getEvents())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])



  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Events</p>
      </section>

      <EventForm />

      <section className='content'>
        {events.length > 0 ? (
          <div className='event'>
            {events.map((event) => (
              <EventItem key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
    </>
  )
}

export default EventsPage
  
  
  
  
  
  // const [events, setEvents] = useState([])
  // const navigate = useNavigate()
  // const {user} = useSelector((state) => state.auth)
  // useEffect(() => {
  //   axios.get("/events")
  //   .then((res)=>{
  //     console.log(res)
  //     setEvents(res.data)
  //   })
  //   .catch((err)=>console.log(err))
  // },[])
  //   const fetchEvents = async()=> {
  //     const response = await fetch("/events")
  //     const json = await response.json()

  //     if(response.ok){
  //       setEvents(json)
  //     }
  //   } 
  //   fetchEvents()
  // }, [])
  // return(
  //   <div className="container d-flex">
  //   <h1>Your events add events</h1>
  // {events ? (
  //   <>
  //     {events.map((event) => {
  // return (
  //     <div className="eventCard m-1 border border-light"
  //     key={event._id}    >
  //     <h5>Event title: {event.title}</h5>
  //     <p>Location: {event.city}<br/>
  //     Exact address: {event.address}<br/>
  //     Date and time: {event.date}, {event.time} <br/>
  //     More details: {event.description}<br/>
  //     max. participants: {event.participants}</p>

  //     <div className="d-flex justify-content-between m-1"
      
  //     >
  //       <Button className="btn  btn-sm"
  //          variant="outline-success m-1"
  //         // onClick={() =>
  //         //   updatePost(post._id, post.title, post.description)
  //         // }
  //         style={{ width: "50%" }}
  //       >
  //         UPDATE
  //       </Button>
  //       <Button className="btn  btn-sm"
  //         // onClick={() => deletePost(post._id)}
  //         variant="outline-danger m-1"
  //         style={{ width: "50%" }}
  //       >
  //         DELETE
  //       </Button>
  //       </div>
  //   </div>
  // );
  //     })}

  //     </>
  // ):("")}

//      <Button variant="outline-success m-1" onClick={()=>navigate("/create")}>Create Event</Button>
//   </div>

// );}

// export default EventsPage