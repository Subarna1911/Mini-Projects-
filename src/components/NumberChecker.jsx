import React from 'react'
import {useState, useEffect} from 'react'

const NumberChecker = () => {
    const[number,setNumber] = useState("");
  
    const[result, setResult] = useState(null);
    const[loading, setLoading] = useState(false);


   
const checkEvenOrOdd = ()=>{
    setResult(null);
    setLoading(true);

    setTimeout(() => {

        const parsed = parseInt(number, 10)
        {
            if(isNaN(parsed)){
                setResult("enter a valid number");
            }
            else{
                setResult(`The number ${parsed} is ${parsed % 2 === 0 ? "even" : "odd"}`);
            }
        }
        setLoading(false);
        
    },1000);

}


const handleKeyDown = (e)=>{
    if(e.key === "Enter"){
        checkEvenOrOdd();
    }
}

  return (
    <div className="max-w-screen w-full">
        <div className="container px-4 md:px-6 mx-auto">
            <div className="bg-green-200 rounded-lg flex flex-col space-y-4 px-4 py-3 justify-center items-center">
                <h1 className="text-3xl font-semibold py-3">Even and Odd Number</h1>
                <input className="w-full max-w-[540px] px-2 py-3 rounded-lg  outline-none bg-white text-black" type="text" value={number} placeholder="Enter a number" onChange={(e)=>setNumber(e.target.value)}  onKeyDown={handleKeyDown}/>
                <button onClick={checkEvenOrOdd} className="bg-black text-white rounded-full text-center text-sm font-bold px-3 py-2 w-40 hover:cursor-pointer hover:bg-gray-700">Check</button>
                <div>
                    {loading ? (
                        <div>
                            checking...
                        </div>
                    ): result !== null ? (
                        <div>{result}</div>
                    ): null}
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default NumberChecker
