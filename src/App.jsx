import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navi from './Navi'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badrinath from './Badrinath';
import Kedarnath from './Kedarnath';
import Gangotri from './Gangotri';
import Yamunotri from './Yamunotri';


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <Router>
      <div>
      <Navi/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Badrinath" element={<Badrinath/>} />
          <Route path="/Kedarnath" element={<Kedarnath/>} />
          <Route path="/Gangotri" element={<Gangotri/>} />
          <Route path="/Yamunotri" element={<Yamunotri/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div> 
    </Router>
    
    
   </div>
  )
}

export default App
