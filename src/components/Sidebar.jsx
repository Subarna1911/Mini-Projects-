import React from 'react'
import { useState } from 'react'
import { Menu } from 'lucide-react'

const Sidebar = () => {
    
    const[toggle, setToggle] = useState(false);

    const handleClick = ()=>{
        setToggle(!toggle);
    }

  return (
    <div className='max-w-screen'>
        <div className='container mx-auto px-3 py-2 bg-gray-200'>
            <div>
                <Menu onClick={handleClick}/>
            </div>

            { toggle && (
                <>
             
            <ul className='flex flex-col space-y-3 list-none text-md mt-3 cursor-pointer'>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>List</li>
            </ul>

            <ul className='flex flex-col space-y-3 list-none text-md cursor-pointer'>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>List</li>
            </ul>

        <ul className='flex flex-col space-y-3 list-none text-md cursor-pointer'>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>List</li>
            </ul>
            </>

            )}
        </div>
    </div>
)
}

export default Sidebar
