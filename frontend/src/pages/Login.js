import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState } from "react";
import CreateEvent from "./CreateEvent";
import EventsPage from './EventsPage';
import {useNavigate} from "react-router-dom"



function Login() {
  const [loginData, setLoginData] = useState({
    email:"", 
    password: "", 
  })
  const {email, password} = loginData

  const onChange = (e)=>{
    setLoginData((prevState) => ({
      ...prevState, 
      [e.target.name]:e.target.value,
    }))
  }
  const navigate = useNavigate()
  return ( 

    <form className="container">
    <h3>Log In</h3>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
      />
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
      />
    </div>
    <div className="mb-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary" onClick={()=> navigate("events")}>
        Submit
      </button>
    </div>
    <p className="forgot-password text-right">
      Forgot <a href="#">password?</a>
    </p>
  </form>
)
}
 

export default Login