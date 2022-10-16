import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom"
import axios from "axios"


function CreateEvent() {
  const navigate = useNavigate()
  const [event, setEvent] = useState({
    title: '', 
    city: '', 
    address:'', 
    date: '',
    time: '',
    description:''
  })

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setEvent((prev)=>{
      return {
        ...prev, 
        [name]:value,
      }
      
    })
  }
  useEffect(()=>{
    console.log(event)
  }, [event])

  const createEvent = (e)=> {
    e.preventDefault();
    console.log(event)
    const newEvent= {
      title: event.title, 
    city: event.city, 
    address: event.address, 
    date: event.date,
    time: event.time,
    description:event.description

    }
    
    axios
    .post('/create', event)
    .then((res)=>{ 
      console.log(res)
      newEvent.save()})
    .catch((err)=>{
      console.log(err)})
    navigate(-1)
    
  }

  return (
    <div className='createEventContainer'>
      <h1>Create Your Event</h1>
        <Form>
          <Form.Group className="mb-2 container" >
            <Form.Control className="mb-2" 
            name='title' 
            placeholder='event title'
            value={event.title}
            onChange={handleChange}/>

            <Form.Control className="mb-2" 
            name='city' 
            value={event.city} 
            placeholder='enter the city'onChange={handleChange}/>

            <Form.Control className="mb-2" 
            name='address'
            value={event.address} 
            placeholder='exact address'onChange={handleChange}/>

            <Form.Control className="mb-2" 
            name='date' 
            value={event.date}
            placeholder='date'onChange={handleChange}/>

            <Form.Control className="mb-2"
            name='time'
            value={event.time}
            placeholder='what time' onChange={handleChange}/>
            
            <Form.Control className="mb-2"
            name='participants'
            value={event.participants}
            placeholder='max. participants' onChange={handleChange}
            type="number"/>

            <label for="exampleFormControlTextarea1"></label>

            <textarea className="form-control" 
            name='description' 
            value={event.description} 
            placeholder='event description'
            id="exampleFormControlTextarea1" 
            rows="3" onChange={handleChange}></textarea>


          </Form.Group>
          <Button variant="outline-info m-1" onClick={createEvent}>Create Event</Button>
        </Form>
      <Button variant="outline-info m-1" onClick={()=>navigate(-1)}>Back</Button>

    </div>
  );
}

export default CreateEvent;