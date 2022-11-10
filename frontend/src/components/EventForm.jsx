import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createEvent } from '../features/events/eventSlice'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
// import eventModel from '../../../backend/models/eventModel'


function EventForm() {
  const navigate = useNavigate()
  // const [event, setEvent] = useState({
  //   title: '', 
  //   city: '', 
  //   address:'', 
  //   date: '',
  //   time: '',
  //   description:'', 
  //   participants:'' 
  // })

  const [title, setTitle] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [participants, setParticipants] = useState('')
  const [description, setDescription] = useState('')
  const [joinedUsers, setJoinedUsers] = useState('')

  const dispatch = useDispatch()

  // const onChange = (e) =>{
  //   const {name, value} = e.target;
  //    setEvent((prev)=>{
  //     return {
  //       ...prev, 
  //       [name]:value,
      
  //     }
  //   })
  // }

  // const { title,  city, address, date, time, description,  participants} = event
  const onSubmit = (e) => {
    e.preventDefault();

    // console.log('Event: ' + event);

  //  axios.post('/', {
  //   title: title, 
  //   city: city, 
  //   address: address, 
  //   date: date,
  //   time: time,
  //   description: description, 
  //   participants: participants
  //  })
  //  .then(res=> {
  //   console.log(res.data)
  //  })

     dispatch(createEvent({ title, city, address, date, time, participants, description}))
     navigate("/dashboard")
     window.location.reload()

  }

  return (
    <section className='form container-create'>
        <form onSubmit={onSubmit}> 
        <div className='form-group'>
          <h2 className='mb-5'>Create an event</h2>
            <input
              name='title'
              placeholder='event title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <input
              name='city'
              placeholder='city'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <input
              name='address'
              placeholder='exact address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <input
              type="date" 
              name="begin" 
              placeholder="dd-mm-yyyy" 
              min="1997-01-01" max="2030-12-31"
              value={date}
              onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className='form-group'>
            <input
              name='time'
              placeholder='time'
              value={time}
              onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className='form-group'>
            <input
              name='city'
              placeholder='Max. participants'
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
          />
        </div>
        <div className='form-group'>
            <textarea className="form-group"
              type = "textarea"
              name='description' 
              value={description} 
              placeholder='event description'
              id="exampleFormControlTextarea1" 
              rows="3" 
              onChange={(e) => setDescription(e.target.value)}>
            </textarea>
        </div>    
        <div className='form-group mb-5'>
            <button className='btn-me btn-block' type="submit" >
              Add Event
            </button>
            <button className='btn-me btn-block'
                onClick={() => navigate(-1)}
              > BACK
            </button>
        </div>
    </form>
    </section>
  )
}

export default EventForm
