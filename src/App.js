
import './App.css';

// import Home from './Pages/Home';
// import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
import { useState } from 'react';


function App() {
  const [count, setCount]= useState(0);

  //let count = 0;

  const increment = () =>{
   // count +=1;
   setCount(count+1);
  }
  const decrement = () =>{
    //count -=1;
    setCount(count-1);
  }
  return (
  //   <Router>
  //     <div>
  //       <Routes>
  //           <Route exact path='/' element={< Home />}></Route>
  //           <Route exact path='/About' element={< About />}></Route>
  //           <Route path='/Contact' element={<Contact/>}></Route>         
  //     </Routes>
  //     </div>
  //  </Router>
  <>
  <span className='title'>My Counter</span>
  <p className='subTitle'> The count {count} </p>
  <button onClick={decrement} className='button'>-</button>
  <button onClick={increment} className='button'>+</button>
  </>
  

  );
}

export default App;
