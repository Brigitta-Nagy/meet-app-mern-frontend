import {Link} from "react-router-dom"
import logo from "../static/logo.min.jpg"

function Navbar() {
  
  // const navigate = useNavigate()


  return (
    <header className="header d-flex align-items-center justify-content-between">
      <div className="logoPic" >
        <Link to="/">
          {/* <img src={logo} style="width:40px; height: 40px;"/> */}
          LOGO</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </header>
  )
}

export default Navbar