import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CreateEvent from "./pages/CreateEvent";
import EventsPage from './pages/EventsPage';
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Main from "./pages/Main"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
    <Router>
      <Navbar />
   
         <Routes>
            <Route path='/' element ={<Main/>}/>
        </Routes>
        <Routes>
            <Route path='/login' element ={<Login/>}/>
        </Routes>
        <Routes>
            <Route path='/signup' element ={<Signup/>}/>
        </Routes>
        <Routes>
            <Route path='/login/events' element ={<EventsPage/>}/>
        </Routes>
        <Routes>
            <Route path='/login/events/create' element ={<CreateEvent/>}/>
        </Routes>
     </Router>
    </>
  );
}

export default App;
