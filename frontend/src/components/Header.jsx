import { BiLogIn, BiLogOut, BiUser } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import logo from "../static/colorful-wall-min.jpg"

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
    <header className='header'>
      <div>
        <Link to='/'>
          <img className="logo" src={logo} alt="meet-app logo"/>
        </Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <BiLogOut /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login' className='login-btn'>
                <BiLogIn/> Login
              </Link>
            </li>
            <li>
              <Link to='/register' className='login-btn'>
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
