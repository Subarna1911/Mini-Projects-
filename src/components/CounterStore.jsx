import React from 'react'
import {useState} from 'react'
import UsePrevious from '../hooks/UsePrevious'

const CounterStore = () => {

 const[count, setCount] = useState(0);

 const previousCount = UsePrevious(count);

 const handleIncrement = ()=>{
    setCount(prev=>prev + 1);
 }

 const handleDecrement = ()=>{
    setCount(count - 1);
 }

 const handleReset = ()=>{
    setCount(0);
 }

  return (
    <div className="max-w-screen w-full">
        <div className="container mx-auto px-4 md:px-6">
            <h1>Counter which alos stores previous values</h1>
             <p className="text-center font-bold text-3xl mb-5"> Current count:{count}</p>
              <p className="text-center font-bold text-3xl mb-5"> Previous count:{previousCount}</p>
             <div className="flex justify-around items-center gap-3">
                <button className="bg-amber-900 text-white px-2 py-3 w-full rounded-xl hover:cursor-pointer" onClick={handleIncrement}>Increment</button>
                <button className="bg-amber-900 text-white px-2 py-3 w-full rounded-xl hover:cursor-pointer" onClick={handleDecrement}>Decrement</button>
                <button className="bg-amber-900 text-white px-2 py-3 w-full rounded-xl hover:cursor-pointer" onClick={handleReset}>Reset</button>
             </div>
        </div>

      
    </div>
  )
}

export default CounterStore
