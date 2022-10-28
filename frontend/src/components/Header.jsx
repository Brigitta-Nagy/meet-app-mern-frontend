import { BiLogIn, BiLogOut, BiUser } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import logo from "../static/m-a-m-logo.png"

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header container'>
      <div>
         <img className="logo" src={logo} alt="meet-app logo"/>
      </div>
      <ul>
        {user ? (
          <li>
            <button className='btn-me' onClick={onLogout}>
              <BiLogOut /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login' className='login-btn btn-me'>
                <BiLogIn/> Login
              </Link>
            </li>
            <li>
              <Link to='/register' className='login-btn btn-me'>
                <BiUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
