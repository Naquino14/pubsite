import React from 'react'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Sidenav from './Components/Sidenav'
import './App.css'
import AboutMe from './Pages/AboutMe'
import Projects from './Pages/Projects'

function App() {
  const [state, setState] = React.useState<boolean>(false)
  const onToggleSidenav = () => setState(!state)
  return (
    <div className='home-bg'>
      <BrowserRouter>
        <Sidenav state={state} ontoggle={onToggleSidenav} />
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
