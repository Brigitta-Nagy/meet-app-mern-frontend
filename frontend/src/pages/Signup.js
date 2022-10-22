import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {signup, reset} from '../features/auth/authSlice'


function Signup() {
  const [signupData, setSignupData] = useState({
    name:"", 
    email:"", 
    password: "", 
    password2: "",
  })

  const {name, email, password, password2} = signupData
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      console.error(message);
    }

    if (isSuccess || user) {
      navigate('/signup')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setSignupData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      console.log('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(signup(userData))
    }
  }




  // const onChange = (e) => {
  //   setSignupData((prevState)=> ({
  //     ...prevState, 
  //     [e.target.name]:e.target.value,
  //   }))
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault()
  // }
  return (
    <form onSubmit={onSubmit} className='container'>
    <h3>Sign Up</h3>
    <div className="mb-3">
      <label>Username</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={onChange}
        className="form-control"
        placeholder="Username"
      />
    </div>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={onChange}
        className="form-control"
        placeholder="Enter your email"
      />
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={onChange}
        className="form-control"
        placeholder="Enter password"
      />
    </div>
    <div className="mb-3">
      <label>Confirm password</label>
      <input
        type="password"
        id="password2"
        name="password2"
        value={password2}
        onChange={onChange}
        className="form-control"
        placeholder="Confirm password"
      />
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </div>
    <p className="forgot-password text-right">
      Already registered? <a href="/login">log in</a>
    </p>
  </form>
)
  }


export default Signup