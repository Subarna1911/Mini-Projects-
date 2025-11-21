import React from 'react'
import Sidebar from '../components/Sidebar'
import MainContainer from '../components/MainContainer'

const Body = () => {
  return (
    <div className='grid-cols-12 flex gap-3'>
        <div className='grid-cols-2 flex flex-col space-y-3 items-center'>
             <Sidebar/>
        </div>
        <div className='grid-cols-8 flex flex-col items-center'>
           <MainContainer/>
        </div>
     
      
    </div>
  )
}

export default Body
