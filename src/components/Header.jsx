import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <div className='bg-gray-200 text-black flex justify-between items-center'>
        <div>Logo</div>
        <Link to ="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ='/contact'>Contact</Link>
    </div>
  )
}

export default Header
