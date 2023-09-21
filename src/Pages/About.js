import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
  return (
    <div>
        <h1>This is about me</h1>
        <Link to='/'>Go to Home page</Link>
    </div>
  )
}
