
// import './App.css';

// // import Home from './Pages/Home';
// // import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';
// // import About from './Pages/About';
// // import Contact from './Pages/Contact';
// import { useState } from 'react';


// function App() {
//   const [count, setCount]= useState(0);

//   //let count = 0;

//   const increment = () =>{
//    // count +=1;
//    setCount(count+1);
//   }
//   const decrement = () =>{
//     //count -=1;
//     setCount(count-1);
//   }
//   return (
//   //   <Router>
//   //     <div>
//   //       <Routes>
//   //           <Route exact path='/' element={< Home />}></Route>
//   //           <Route exact path='/About' element={< About />}></Route>
//   //           <Route path='/Contact' element={<Contact/>}></Route>         
//   //     </Routes>
//   //     </div>
//   //  </Router>
//   <>
//   <span className='title'>My Counter</span>
//   <p className='subTitle'> The count {count} </p>
//   <button onClick={decrement} className='button'>-</button>
//   <button onClick={increment} className='button'>+</button>
//   </>
  

//   );
// }

// export default App;
//----------------------------React Bootstrap---------------------------------------------------
import React from 'react'
import './App.css'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


 function App() {
  return (
    <div>
      <h1>React Bootstrap</h1>
      <div className='accord'>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    <Button variant="primary">Primary</Button>{' '}
    <Spinner animation="border" variant="primary" />
    <Spinner animation="grow" variant="primary" />
    </div>

    
  )
}
export default App
