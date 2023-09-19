import React from 'react'
import './topicbox.css'

export default function TopicBox()  {
    // const topic = "My Favourite food Kuttu";
    // const item = "and rice"
    const a = 10;
    const b = 26;
    const c = a+b;
 

  return (
    <div>
        <div className="topicBox">
            {/* <span className='text'>{topic} {item}</span> */}
            <span className='text'>{c}{alert("hellow")}</span>
        </div>
    </div>
  )
}
// {} athule onama Js code ekak type kara hakiya. object and Boolean not using
