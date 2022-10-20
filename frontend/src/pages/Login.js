import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState, useEffect } from "react";
import CreateEvent from "./CreateEvent";
import EventsPage from './EventsPage';
import {useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../features/auth/authSlice'



function Login() {
  const [loginData, setLoginData] = useState({
    email:"", 
    password: "", 
  })
  const {email, password} = loginData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const onChange = (e)=>{
  //   setLoginData((prevState) => ({
  //     ...prevState, 
  //     [e.target.name]:e.target.value,
  //   }))
  // }
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      console.error(message);
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    loginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

 

  return ( 

    <form className="container">
    <h3>Log In</h3>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        id='email'
        name='email'
        value={email}
        onChange={onChange}
      />         
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        id='password'
        name='password'
        value={password}
        onChange={onChange}
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