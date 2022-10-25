
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from "./pages/Login"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import EventForm from "./components/EventForm";
import Register from "./pages/Register";
import EventsCards from "./components/EventsCards"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
   return (
    <>
    <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/create' element={<EventForm />} />
            {/* <Route path='/events' element={<EventsCards />} /> */}
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  
)}
export default App
// //     <>
// //     <Router>
// //       <Navbar />
   
// //          <Routes>
// //             <Route path='/' element ={<Home/>}/>
// //         </Routes>
// //         <Routes>
// //             <Route path='/login' element ={<Login/>}/>
// //         </Routes>
// //         <Routes>
// //             <Route path='/signup' element ={<Signup/>}/>
// //         </Routes>
// //         <Routes>
// //             <Route path='/events' element ={<EventsPage/>}/>
// //         </Routes>
// //         <Routes>
// //             <Route path='create' element ={<CreateEvent/>}/>
// //         </Routes>
// //      </Router>
// //     </>
// //   );
//  }


