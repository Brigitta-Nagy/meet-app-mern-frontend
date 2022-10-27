import { useDispatch } from 'react-redux'
import { deleteEvent, updateEvent } from '../features/events/eventSlice'
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import {useState, useEffect} from "react"
import axios from "axios"



function EventItem({ event }) {
  const dispatch = useDispatch()
  const [events, setEvents] = useState([])
  const [updatedEvent, setUpdatedEvent] = useState({
    id:"", 
    title:"",
    description:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateEvent = (id, title, description) => {
    setUpdatedEvent((prev) => {
      return {
        ...prev,
        id: id,
        title: title,
        description: description,
      };
    });
    handleShow();
  };

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
      <h2>{event.title}</h2>
      <h4>When: {event.date}, {event.time}</h4>
      <p><strong>Where: </strong>{event.city}, {event.address}</p>
      <p>Description: {event.description}</p>
      <p>Max. participants:{event.participants} </p>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            placeholder="title"
            name="title"
            value={updatedEvent.title ? updatedEvent.title : ""}
            style={{ marginBottom: "1rem" }}
            onChange={handleChange}
          />
          <Form.Control
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
            <div className="d-flex flex-row justify-content-md-around">
            <button onClick={() => dispatch(deleteEvent(event._id))} className='btn-me mb-0'>
              delete
            </button>
            <button 
            onClick={() => updateEvent(event._id, event.title, event.description)} 
            // onClick={() => dispatch(updateEvent(event._id, event.title, event.description))}
            className='btn-me mb-0'>
              update
            </button>
        
            </div>
           {/* )
        }) 
      } */}
      
      </div>   
        )
      }



export default EventItem
