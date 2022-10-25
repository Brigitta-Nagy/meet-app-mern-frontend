// import { useEffect, useState } from "react"
// import { useSelector, useDispatch } from 'react-redux'
// import { getEvents, reset } from '../features/events/eventSlice'
// import axios from 'axios'
// import { response } from "express"



// function EventsCards() {
//   const dispatch = useDispatch()
//   const [events, setEvents] = useState([])
//   // const { events, isLoading, isError, message } = useSelector(
//   //   (state) => state.events)
  

//   return (
//     <>
//     <section className='content col-sm'>
       
//           <div className='events'>
//             <p>Events:</p>
           
//              {events.map((event) => {
//               return (
//                <div>
//               <h2>{event.title}</h2>
//               <h3>Date and time: {event.date}, {event.time}</h3>
//               <p>Address: {event.city}, {event.address}</p>
//               <p>Description: {event.description}</p>
//               <p>Max. participants:{event.participants} </p>
//               </div>
//             )})}
//           </div>
            
//       </section>
//       </>
//   )
// }

// export default EventsCards