import React from 'react'
import { useState } from 'react';

const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

const SwitchTab = () => {

 const[isActive, setIsActive] = useState("home");

 const handleClick = (id)=>{
    setIsActive(id);
 }

  return (
    <div className='max-w-screen px-3 h-full'>
        <div className='container mx-auto px-4 py-2'>
            <h2 className='text-lg font-bold'>Tab Switcher</h2>
            <div className='bg-gray-200 rounded-md px-2 py-2 h-full flex justify-between'>
            {tabs.map(({id, label, content})=>{
               return <div key={id}>    
                    <h2 onClick={()=>handleClick(id)} className={`text-xl font-bold cursor-pointer ${ isActive === id ? "text-blue-400" : "text-black"}`}> {label}</h2>
                   {isActive === id && (
                    <p className='text-md'>{content}</p>
                   )}
                   
                </div>

            })}

              </div>

        </div>

      
    </div>
  )
}

export default SwitchTab
