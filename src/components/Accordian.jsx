import React from 'react'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';


const demoData = [
  
    {
    heading: "Learn JavaScript with me",
    paragraph:
      "JavaScript is a dynamic programming language used to build interactive web pages.",
  },

  {
    heading: "Learn JavaScript with me",
    paragraph:
      "JavaScript is a dynamic programming language used to build interactive web pages.",
  },

  {
    heading: "Learn JavaScript with me",
    paragraph:
      "JavaScript is a dynamic programming language used to build interactive web pages.",
  },

  {
    heading: "Learn JavaScript with me",
    paragraph:
      "JavaScript is a dynamic programming language used to build interactive web pages.",
  },

  {
    heading: "Learn JavaScript with me",
    paragraph:
      "JavaScript is a dynamic programming language used to build interactive web pages.",
  },

];



const Accordian = () => {

const [activeIndex, setActiveIndex] = useState(null);

 function handleClick (index){
   setActiveIndex(prev=>(prev === index ? null : index));

 }

  return (
    <div className='max-w-screen px-3 py-8 h-full'>
        <div className='container px-4 py-3 bg-amber-50 space-y-3'>
            {demoData.map((item, index) =>(
            <div key = {index} className='bg-green-200 text-black rounded-md px-5 py-2'>
                <div  onClick={()=>handleClick(index)} className = 'cursor-pointer flex justify-between'>
                     <h1>{item.heading}</h1>
                     {activeIndex === index ? <span><ChevronUp/></span> : <span><ChevronDown/></span>}
                     
                </div>

                {activeIndex === index && (
                <p className=' bg-white mt-5 px-2 rounded-md py-2'>{item.paragraph}</p>
                )}
            </div>

             ))}
        </div>
      
    </div>
  )
}

export default Accordian
