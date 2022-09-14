import React from 'react'
import './Sidenav.tsx.css'
import '../App.css'
import { Link } from 'react-router-dom'

type Props = {
    state: boolean
    ontoggle: () => void
}

const Sidenav: React.FC<Props> = ({state, ontoggle}) => {
  return (
    <>
      <div className='sidenav' style={state 
        ? {width: '300px', paddingLeft: '0px'} 
        : {width: 0, paddingLeft: '0'}}>
        <div className='sidenav_links'>
          <h1 className='sidenav_title fancykarma'>Welcome!</h1>
          <p className='sidenav_space'/>
          <Link className='nostyle sidenav_link fancykarma' to='/'>Home</Link>
          <hr className='sidenav_separator'/>
          <a className='nostyle sidenav_link fancykarma' href='https://github.com/naquino14'>GitHub</a>
          <hr className='sidenav_separator'/>
          <Link className='nostyle sidenav_link fancykarma' to='/aboutme'>About Me</Link>
          <hr className='sidenav_separator'/>
          <Link className='nostyle sidenav_link fancykarma' to='/projects'>Projects</Link>
          <hr className='sidenav_separator' />
          <Link className='nostyle sidenav_link fancykarma' to='#'>Contact Me</Link>
          <hr className='sidenav_separator' />
          <Link className='nostyle sidenav_link fancykarma' to='#'>Resume</Link>
          <hr className='sidenav_separator' />
          <a className='nostyle sidenav_link fancykarma' href='https://github.com/Naquino14/pubsite'>Source Code</a>
          <p className='sidenav_space2'/>
          <p className='sidenav_footer'>Hey there! Im built with <s>ASP.NET Razor Pages</s> React.TS!</p>
        </div>
      </div>
      <button onClick={ontoggle} className='sidenav_button' style={
        state ? {float: 'left', marginLeft: '245px'}
        : {marginLeft: '15px'}
      }>
        {state ? 'X' : '<'}
      </button>
    </>
  )
}

export default Sidenav