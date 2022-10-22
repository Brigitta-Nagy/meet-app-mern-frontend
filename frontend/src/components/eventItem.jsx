import { useDispatch } from 'react-redux'
import { deleteEvent } from '../features/auth/events/eventSlice'

function EventItem({ event }) {
  const dispatch = useDispatch()

  return (
    <div className='event'>
      <div>{new Date(event.createdAt).toLocaleString('en-US')}</div>
      <h2>{event.text}</h2>
      <button onClick={() => dispatch(deleteEvent(event._id))} >
        X
      </button>
    </div>
  )
}

export default EventItem