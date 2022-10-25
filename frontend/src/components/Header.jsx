import { BiLogIn, BiLogOut, BiUser } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

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
      <div className='logo'>
        <Link to='/'>Add event</Link>
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
              <Link to='/login'>
                <BiLogIn/> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
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
