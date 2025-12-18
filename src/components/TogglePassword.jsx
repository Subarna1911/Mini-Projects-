import React from 'react'
import { Eye, EyeOff } from 'lucide-react';
import {useState} from 'react';

const TogglePassword = () => {

    const[isPasswordVisible, setIsPasswordVisible] = useState(false);

 const toggleVisibility = ()=>{
    setIsPasswordVisible(!isPasswordVisible);
 }

  return (
    <div className="max-w-screen w-full">
        <div className-="container mx-auto px-5">
            <div className="flex items-center gap-5 justify-center my-7">
               <input className="w-full max-w-[650px] border-none bg-gray-200 px-2 py-3 rounded-sm outline-none" type={isPasswordVisible ? "text": "password"} placeholder="Enter a password"/>
               <button onClick={toggleVisibility}>{isPasswordVisible ? <Eye/> : <EyeOff/>}</button>
            </div>
            <span>{isPasswordVisible ? "password is visible" : "password is hidden"}</span>
            </div>
          
      
    </div>
  )
}

export default TogglePassword
