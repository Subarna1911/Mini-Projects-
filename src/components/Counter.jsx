import React from 'react'
import   '../css/counter.css'
import { useState } from 'react'
import Button from './Button';

const Counter = () => {

const[count, setCount] = useState(0);

// handle start
function handleIncrement() {
    setCount(prev=>prev + 1);
}

// handle stop
function handleDecrement() {
    setCount(prev => prev - 1);
}

function handleRestart(){
    setCount(0);
}

  return (
    <>
    <section className='counterSection'>
        <div className='counter-main'>
           <h1 className='header'>My Counter</h1>
           <p className='sub-heading'>Counter: {count}</p>
           <div className='btn-container'>
             <Button name ="Increment" onClick={handleIncrement}/>
              <Button name ="Decrement" onClick={handleDecrement}/>
             <Button name ="Reset" onClick={handleRestart}/>
           </div>
            
        </div>

    </section>
    </>
  )
}

export default Counter
