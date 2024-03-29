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

  if ((process.env.REACT_APP_DISABLE_LIVE_RELOAD ?? 'false') === 'true') {
    console.info('Live reload disabled')
    var WS = window.WebSocket;
    const DevWebSocket = (s: string) => {
      if (s === `wss://${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/ws`) {
        console.info("[DEV NOTICE] Live Reload Has Been Disabled");
        return {}
      } else {
        // Pass through other usage of sockets
        return new WS(s);
      }
    }
    window.WebSocket = DevWebSocket as any;
  }

  const [state, setState] = React.useState<boolean>(false)
  const onToggleSidenav = () => setState(!state)
  return (
    <div className='home-bg'>
      <BrowserRouter>
        <Sidenav state={state} ontoggle={onToggleSidenav} />
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home setSidenav={setState} />} />
            <Route path='/aboutme' element={<AboutMe setSidenav={setState} />} />
            <Route path='/projects' element={<Projects setSidenav={setState} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
