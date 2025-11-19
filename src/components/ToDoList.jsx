import React from "react";
import { useState, useEffect } from "react";

const ToDoList = () => {
    const[inputValues, setInputValues] = useState("");
    const [items, setItems] = useState([]);

  const handleChange = (e)=>{
    setInputValues(e.target.value);
  }

  const handleClick = ()=>{
    setItems(prevList=> [...prevList, inputValues]);
    setInputValues("");

  }

  const removeList = (index)=>{
    setItems(prevList => prevList.filter((_, i)=> i != index));
  }

  const handleKeyDown = (e) => {

    if(e.key === "Enter"){
        handleClick();
    }
  }


  return (
    <div className="max-w-screen h-full p-20">
      <div className="container m-auto p-20 bg-amber-200 rounded-3xl">
        <h2 className="text-2xl  font-bold text-center"> Everyday Todo List</h2>
        <div className="flex justify-center items-center gap-2 my-4">
          <input
            className="bg-white w-full min-w-50 rounded-full px-4 py-3 outline-none"
            type="text"
            value={inputValues}
            onChange={handleChange}
             onKeyDown={handleKeyDown}
            
          />
          <button className="bg-black text-white px-4 py-3 rounded-full w-50 inline-block cursor-pointer" onClick={handleClick}>Add</button>
        </div>

        <div>
            <ul className="space-x-2 w-full flex items-center sm:flex-wrap ">
                {items.map((item , index)=>{
                    return <li className="bg-green-600 rounded-full py-2 px-3 flex gap-3 text-white" key={index}>{item} <button onClick={()=>removeList(index)} className="text-red-700 font-bold  bg-white rounded-full px-2 y-2 cursor-pointer">X</button> </li>
                
                })}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
