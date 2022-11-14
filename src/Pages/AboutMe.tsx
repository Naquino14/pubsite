import React from 'react'
import { Link } from 'react-router-dom'
import '../Articles.css'

const AboutMe: React.FC = () => {
  return (
    <div className='article'>
      <title>About Me</title>
      <h1 className='center'>Hey There!</h1>
      <p>My name is Nathaniel Aquino, but I prefer the name Nate. Im currently a student @ Rochester Institute of Technology.</p>
      <p>I <u>really</u> love software. Programming is one of my favorite hobbies. I program primarily in C#, however I also know:</p>
      <ul>
        <li>Typescript</li>
        <li>Java</li>
        <li>Python</li>
        <li>SQL</li>
        <li>HTML/CSS</li>
      </ul>
      <p>Some of my other skills include:</p>
      <ul>
        <li>Workspace management (Associated with starbucks)</li>
        <li>PCB and Part Designing in Autodesk Eagle/Inventor</li>
      </ul>
      <p>Fun fact: I have been competing in google kickstart for 2 years!</p>
      <p>If you havent already, you can check out my github <a href='https://github.com/naquino14'>here.</a></p>
    </div>
  )
}

export default AboutMe