import React from 'react'
import '../css/button.css'

const Button = ({name, onClick}) => {
  return (
    <div>
      <button onClick={onClick} className='btn'>{name}</button>
    </div>
  )
}

export default Button
