import { useDispatch } from 'react-redux'
import { deleteEvent,  } from '../features/events/eventSlice'
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import {useState, } from "react"
import axios from "axios"
import {toast} from "react-toastify"



function EventItem({ event }) {
  const dispatch = useDispatch()
  // const [events, setEvents] = useState([])
  const [updatedEvent, setUpdatedEvent] = useState({
    id:"", 
    title:"",
    description:"", 
    city: "", 
    address: "",
    time: "",
    date: "", 
    participants: ""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateEvent = (id, title, description, city, address, time, date, participants) => {
    setUpdatedEvent((prev) => {
      return {
        ...prev,
        id: id,
        title: title,
        city: city, 
        address: address, 
        time: time, 
        date: date,
        participants: participants,
        description: description,
        
      };
    });
    handleShow();
  };
function notify(){
  toast("Are you sure?")
}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEvent((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveUpdatedEvent = () => {
    console.log(updatedEvent);

    axios
      .put(`/update/${updatedEvent.id}`, updatedEvent)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };

  return (
    <div className='event'>
      <h5>{event.title}</h5>
      <p className="mb-0"><strong>When: </strong> {event.date}, {event.time}</p>
      <p className="mb-0"><strong>Where: </strong>{event.city}, {event.address}</p>
      <p className="mb-0">Description: {event.description}</p>
      <p>Max. participants: {event.participants} </p>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control 
            className='mb-1'
            placeholder="title"
            name="title"
            value={updatedEvent.title ? updatedEvent.title : ""}
            onChange={handleChange}
          />  
           <Form.Control
          className='mb-1'
          placeholder="date"
          name="date"
          onChange={handleChange}
          value={updatedEvent.date ? updatedEvent.date : ""}
        />
           <Form.Control
          className='mb-1'
          placeholder="time"
          name="time"
          onChange={handleChange}
          value={updatedEvent.time ? updatedEvent.time : ""}
        />
        <Form.Control
          className='mb-1'
          placeholder="city"
          name="city"
          onChange={handleChange}
          value={updatedEvent.city ? updatedEvent.city : ""}
        />  
          <Form.Control
          className='mb-1'
          placeholder="address"
          name="address"
          onChange={handleChange}
          value={updatedEvent.address ? updatedEvent.address : ""}
        />
           <Form.Control
          className='mb-1'
          placeholder="participants"
          name="participants"
          onChange={handleChange}
          value={updatedEvent.participants? updatedEvent.participants : ""}
        />
          <Form.Control
            className='mb-1'
            placeholder="description"
            name="description"
            onChange={handleChange}
            value={updatedEvent.description ? updatedEvent.description : ""}
          />
   
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" 
          onClick={saveUpdatedEvent
            // () => dispatch(updateEvent(event._id))
            }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
       {/* {events.map((event)=>{
          return( */}
            <div className="d-flex flex-row justify-content-around">
            <button onClick={() => { if (window.confirm("are you sure you wish to delete this event?")) dispatch(deleteEvent(event._id))}}
              className='btn-me mb-0 delete-btn'>
              Delete
            </button>
            <button 
            onClick={() => updateEvent(event._id, event.title, event.description, event.city, event.address, event.time, event.date, event.participants)} 
            // onClick={() => dispatch(updateEvent(event._id, event.title, event.description))}
            className='btn-me mb-0'>
              Update
            </button>
        
            </div>
           {/* )
        }) 
      } */}
      
      </div>   
        )
      }

    //   <button onClick={() => dispatch(deleteEvent(event._id))} className='btn-me mb-0 delete-btn'>
    //   Delete
    // </button>

export default EventItem
