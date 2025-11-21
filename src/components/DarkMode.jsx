import React from 'react'
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const DarkMode = () => {

    const[activeToggle, setActiveToggle] = useState(false);

    const handleToggle = ()=>{
        setActiveToggle(!activeToggle);
    }

  return (
    <div className='max-w-screen'>
       
        <div>
            <button onClick={handleToggle}>
            {activeToggle ? <Eye/> : <EyeOff/>} 
            </button>
        </div>
      
        <p className={activeToggle ? "bg-green-200 text-black px-3 py-4" : "bg-black text-white px-3 py-5"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quo nemo sunt, dolor autem voluptates provident omnis adipisci ab numquam alias eius amet dolore!x</p>
      
    </div>
  );
}

export default DarkMode
