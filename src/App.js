import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Error from './pages/Error';
import Pants from './pages/Pants';
import Extra from './pages/Extra';
import Shirts from './pages/Shirts';
function App() {
  
  return (
    <div className="App">
      
      <Router>
        <Routes>
    
          <Route exact path='/' element={<Login/>}/>
 
          
          <Route element={<Navbar/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/menu' element={<Shirts/>}/>
          <Route exact path='/starters' element={<Pants/>}/>
          <Route exact path='/extras' element={<Extra/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Error/>}/>
        
    
        </Routes>
      </Router>
    </div>
  );
}

export default App;
