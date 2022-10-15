import {Link} from "react-router-dom"


function Navbar() {
  // const navigate = useNavigate()


  return (
    <header className="header">
      <div>
        <Link to="/">Logo</Link>
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