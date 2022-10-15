import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "../components/Navbar"
import CreateEvent from "./CreateEvent";

import Signup from "./Signup"
import Main from "./Main"
import {Link, useNavigate} from "react-router-dom"


function EventsPage() {
  const navigate = useNavigate()
  return (
    <>  <div>EventsPage? </div>
    <button onClick={()=>navigate("create")}>Create an event</button>
    </>

  )
}

export default EventsPage