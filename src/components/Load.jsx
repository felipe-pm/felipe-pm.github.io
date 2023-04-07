import React from 'react'
import pokeball from '../assets/pokeball.svg'
import './Load.css'

const Load = () => {
  return (
    <div className='load'>
      <img
        src={pokeball}
        alt="pokeball" 
      />
    </div>
  )
}

export default Load
