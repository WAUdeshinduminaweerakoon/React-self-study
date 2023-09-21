import React from 'react'
// import TopicBox from '../components/TopicBox'
// import Content from '../components/Content'
import {Link} from 'react-router-dom';

export default function 
Home() {
  return (
    <div>
      <h1>Home Page</h1>
          {/* <TopicBox food="kottu"/>
          <TopicBox food="rice"/>
          <TopicBox food="cake"/> */}
           {/*<TopicBox food="kottu" price="250">
            <span> This is description</span>
          </TopicBox>
          <TopicBox food="rice" price="350">
            <button>This is a button</button>
          </TopicBox>
          <TopicBox food="cake" price="550"/>

          <Content/> */}

      <Link to="/About">Go to  the about page</Link>  

      <Link to="/Contact">Go to  the cantact page</Link>


    </div>
  )
}
 