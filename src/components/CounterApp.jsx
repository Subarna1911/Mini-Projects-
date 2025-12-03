import React from 'react'
import {useState} from 'react';
import {usePreviousHook} from './usePreviousHook';

const CounterApp = () => {
    const[counter, setCounter] = useState(0);
    const previousValue = usePreviousHook (counter);
    
   const handleIncrement = ()=>{
    setCounter(prev=>prev + 1);
   }

   const handleDecrement = ()=>{
    setCounter(prev=>prev-1);
   }

   const handleReset = ()=>{
    setCounter(0);
   }

  return (
    <div>
        <h1>Current Counter:{counter}</h1>

        <h2>Previous Counter:{previousValue} </h2>
        <div className="flex items-center justify-between">
              <button  onClick={handleIncrement}  className="bg-green-600 text-white rounded-lg font-semibold text-md px-2 py-3"> Increment</button>
              <button  onClick={handleDecrement}  className="bg-red-600 text-white rounded-lg font-semibold text-md px-2 py-3"> Derement</button>
              <button  onClick={handleReset}      className="bg-blue-600 text-white rounded-lg font-semibold text-md px-2 py-3"> Reset</button>
        </div>
    </div>
  )
}

export default CounterApp
