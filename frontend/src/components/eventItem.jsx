import { useDispatch } from 'react-redux'
import { deleteEvent } from '../features/events/eventSlice'
// import { updateEvent } from '../features/events/eventSlice'

function EventItem({ event }) {
  const dispatch = useDispatch()

  return (
    <div className='event'>
      <h2>{event.title}</h2>
      <h4>Date and time: {event.date}, {event.time}</h4>
      <p><strong>Address: </strong>{event.city}, {event.address}</p>
      <p>Description: {event.description}</p>
      <p>Max. participants:{event.participants} </p>
      <div className="">
      <button onClick={() => dispatch(deleteEvent(event._id))} className='btn-me mb-0'>
        delete this event
      </button>
      
      {/* <button onClick={() => dispatch(updateEvent(event._id))} className='btn-me mb-0'>
        update this event
      </button> */}
      </div>
    </div>
  )
}

export default EventItem
