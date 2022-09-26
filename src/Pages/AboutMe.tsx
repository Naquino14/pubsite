import React from 'react'
import { Link } from 'react-router-dom'
import '../Articles.css'

const AboutMe: React.FC = () => {
  return (
    <div className='article'>
      <title>About Me</title>
      <p>About Me paragraph</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <button onClick={(e) => {e.preventDefault(); alert('hey there!')}}>This is a funky lil button.</button>
      <h1>This is h1!</h1>
      <h2>This is h2!</h2>
      <h3>This is h3!</h3>
      <h4>This is h4!</h4>
      <h5>This is h5!</h5>
      <h6>This is h6!</h6>
      <Link to='/aboutme'>This is an anchor </Link> 
      <ul>
        <li>This an li!</li>
        <li>This is also an li!</li>
      </ul>
      <s>This is a strike</s><p/>
      <u>This is an underline</u>
    </div>
  )
}

export default AboutMe