import { useDispatch } from 'react-redux'
import { deleteEvent } from '../features/events/eventSlice'

function EventItem({ event }) {
  const dispatch = useDispatch()

  return (
    <div className='event'>
      <h2>{event.title}</h2>
      <h3>Date and time: {event.date}, {event.time}</h3>
      <p>Address: {event.city}, {event.address}</p>
      <p>Description: {event.description}</p>
      <p>Max. participants:{event.participants} </p>
      <button onClick={() => dispatch(deleteEvent(event._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default EventItem
