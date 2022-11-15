import React from 'react'
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
      <p>Some of my skills include:</p>
      <ul>
        <li>Algorithm development</li>
        <li>IDEs like Visual Studio, Visual Studio Code</li>
        <li>Frontend and Backend development</li>
        <li>Containerization with docker</li>
        <li>Container orchestration with OKD (This website is running on a container 🤯)</li>
        <li>Version control with Git and Github</li>
        <li>Workspace management</li>
        <li>Embedded programming</li>
      </ul>
      <h1>Some fun facts about me:</h1>
      <p>I have been competing in google kickstart for 2 years! Im also a Google FooBar invitee.</p>
      <p>My favorite foods are Brazilian pão de queijo and guacamole.</p>
      <p><b>PSST!</b> If you havent already, you can check out my github <a href='https://github.com/naquino14'>here.</a></p>
    </div>
  )
}

export default AboutMe