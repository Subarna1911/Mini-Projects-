import React from 'react'
import {useState} from 'react'


const Clipboard = () => {

const[copy, setCopy] = useState("");
const[name, setName] = useState("");
const[message,setMessage] = useState("");

const handleCopy = ()=>{
 console.log("handle copy");
}

  return (
    <div className="max-w-screen w-full">
        <div className="container mx-auto px-5">
            <label htmlFor="name">Enter your name:</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.name)}/>
            <button className="bg-black text-white py-2 px-3 border-none rounded-lg w-full" onClick={handleCopy}>Copy</button>

            <p>{message}</p>

        </div>
      
    </div>
  )
}

export default Clipboard
