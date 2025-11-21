import React from 'react'
import { Menu } from 'lucide-react'

const GlobalSidebar = ({ isOpen }) => {
  return (
    <div className='max-w-screen'>
        <div className='container mx-auto px-3 bg-amber-50'>
            <div className='grid-cols-2'>
             <div
      className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <h2 className="p-4 font-bold">Sidebar</h2>
    <ul className='flex flex-col list-none px-2 py-3 space-y-3'>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Main container</li>
    </ul>
    </div>
            </div>
            

        </div>
      
    </div>
  )
}

export default GlobalSidebar
