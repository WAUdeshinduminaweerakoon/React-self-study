
import './App.css';

import Home from './Pages/Home';
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return (
    <Router>
      <div>
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/About' element={< About />}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
              
           
            
      </Routes>
      </div>
   </Router>
  );
}

export default App;
