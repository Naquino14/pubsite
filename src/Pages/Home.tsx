import { useEffect } from 'react';
import Blob from '../Components/Blob'
import './Home.tsx.css'
import { useLocation, useNavigate } from 'react-router-dom'

interface Props {
  setSidenav: (value: React.SetStateAction<boolean>) => void
}

const Home: React.FC<Props> = ({ setSidenav }) => {
  const nav = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setSidenav(false)
  }, [location, setSidenav]);

  return (
    <div className='blob_container'>
      <Blob imagestyle={'aboutmeimg'} onBlobClick={() => { nav('/aboutme') }} label={'About Me'} />
      <Blob imagestyle={'projectsimg'} onBlobClick={() => { nav('/projects') }} label={'Projects'} />
      <Blob imagestyle={'githubimg'} onBlobClick={() => { window.open('https://github.com/naquino14', '_self') }} label={'Github'} />
    </div>
  )
}

export default Home