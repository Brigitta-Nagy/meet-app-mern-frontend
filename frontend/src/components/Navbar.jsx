import {Link} from "react-router-dom"
import logo from "../static/logo.min.jpg"
import {BiLogIn, BiLogOut, BiUser}from "react-icons/bi"


function Navbar() {
    // const navigate = useNavigate()
  return (
   <header className="header d-flex align-items-center justify-content-between">
      <div className="logoPic" >
        <Link to="/">
          <img src={logo} className="logo"/>
          </Link>
      </div>
      <ul>
        <li>
          <Link to="/login"><BiLogIn/>Login</Link>
        </li>
        <li>
          <Link to="/signup"><BiUser/>Sign Up</Link>
        </li>
      </ul>
    </header>
  )
}

export default Navbar