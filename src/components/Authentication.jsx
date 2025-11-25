import React from 'react'
import {useState} from 'react'

const Authentication = () => {

    const[isLogin, setIsLogin] = useState(true);

    const handleClick = ()=> {
        setIsLogin(!isLogin);
    };
    
  return (
    <div className="bg-green-200 w-80 rounded-xl flex justify-between items-center py-2 px-3">
        <div className="text-lg font-bold">
            Logo
        </div>
     
        <div className="text-md text-center">

           {isLogin ? "Welcome, you are logged in" : "You are logged out"}

        </div>

        <button className="bg-black text-white p-2 w-40 rounded-xl" onClick={handleClick}> {isLogin ? "Logout" : "Login"}</button>
    </div>
  )
}

export default Authentication
