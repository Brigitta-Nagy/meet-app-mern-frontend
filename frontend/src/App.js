
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from "./pages/Login"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import EventForm from "./components/EventForm";
import Register from "./pages/Register";
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
   return (
    <>
    <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/create' element={<EventForm />} />
            {/* <Route path='/events' element={<EventsCards />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  
)}
export default App


