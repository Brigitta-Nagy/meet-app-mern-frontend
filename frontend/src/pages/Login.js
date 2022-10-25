// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState, useEffect } from "react";
// import CreateEvent from "./CreateEvent";
// import EventsPage from './EventsPage';
import {useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../features/auth/authSlice'
import { toast } from 'react-toastify'



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
  const { user,  isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/login')
      console.log("user success")
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setLoginData((prevState) => ({
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
    <>
    <section>
    <h3>Log In</h3>
    </section>
    <form className="container" onSubmit={onSubmit}>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        id='email'
        name='email'
        value={email}
        onChange={e => setLoginData(e.target.value)}
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
    <div className="d-grid form-group">
      <button type="submit" className="btn btn-primary"
       onClick={()=> navigate("/create")
       }
      >
        Submit
      </button>
    </div>
    <p className="forgot-password text-right">
      Forgot password?
    </p>
  </form>
  </>
)
}
 

export default Login