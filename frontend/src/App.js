import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CreateEvent from "./pages/CreateEvent";
import EventsPage from './pages/EventsPage';
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home  from "./pages/Dashboard"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import EventForm from "./components/EventForm";


function App() {
   return (

    <>
    <Router>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/create' element={<EventForm/>}/>
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
     
    </Router>
    
  </>
)
//     <>
//     <Router>
//       <Navbar />
   
//          <Routes>
//             <Route path='/' element ={<Home/>}/>
//         </Routes>
//         <Routes>
//             <Route path='/login' element ={<Login/>}/>
//         </Routes>
//         <Routes>
//             <Route path='/signup' element ={<Signup/>}/>
//         </Routes>
//         <Routes>
//             <Route path='/events' element ={<EventsPage/>}/>
//         </Routes>
//         <Routes>
//             <Route path='create' element ={<CreateEvent/>}/>
//         </Routes>
//      </Router>
//     </>
//   );
 }

export default App;
