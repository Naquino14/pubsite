import Blob from '../Components/Blob'
import './Home.tsx.css'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const nav = useNavigate()

  return (
    <div className='blob_container'>
      <Blob imagestyle={'aboutmeimg'} onBlobClick={() => { nav('/aboutme') }} label={'About Me'} />
      <Blob imagestyle={'projectsimg'} onBlobClick={() => { nav('/projects') }} label={'Projects'} />
      <Blob imagestyle={'githubimg'} onBlobClick={() => { window.open('https://github.com/naquino14', '_self') }} label={'Github'} />
    </div>
  )
}

export default Home