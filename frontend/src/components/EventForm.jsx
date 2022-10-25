import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createEvent } from '../features/events/eventSlice'
import { useNavigate } from 'react-router-dom'

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
  //})
  const [title, setTitle] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [participants, setParticipants] = useState('')
  const [description, setDescription] = useState('')
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
  //  axios.post( {
  //   title: event.title, 
  //   city:event.city, 
  //   address:event.address, 
  //   date:event.date,
  //   time:event.time,
  //   description:event.description, 
  //   participants:event.participants
  //  })
  //  .then(res=> {
  //   console.log(res.data)
  //  })
     
     dispatch(createEvent({ title, city, address, date, time, participants, description }))
    setTitle('')

    navigate("/dashboard")
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}> 
        <div className='form-group'>
          <h2 className='mb-2'>Create an event</h2>
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
            name='date'
            placeholder='date'
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
        <textarea className="form-control" 
            type = "textarea"
            name='description' 
            value={description} 
            placeholder='event description'
            id="exampleFormControlTextarea1" 
            rows="3" 
            onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>    
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Event
          </button>
        </div>
      </form>
    </section>
  )
}

export default EventForm

  // useEffect(()=>{
  //   fetch("http://localhost:5000/events")
  //   .then(res=>{
  //     return res.json()
  //   })
  //   .then(data => {
  //     setEvent(data)
  //   })
  // },[])