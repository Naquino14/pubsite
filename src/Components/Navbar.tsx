import React from 'react'
import './Navbar.tsx.css'

type Props = {
    
}

const Navbar: React.FC<Props> = ({}) => {
  return (
    <div className='navbar_container'>
        <div className='navbar_name fancyblox'>
          Nathaniel Aquino
        </div>
    </div>
  )
}

export default Navbar