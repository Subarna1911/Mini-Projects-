import React, { useState, useEffect } from "react";

const ToDoList = () => {
  const [inputValues, setInputValues] = useState("");
  const [items, setItems] = useState([]);
  // Load from localStorage (runs ONCE)
  useEffect(() => {
    const saved = localStorage.getItem("todo-items");
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("todo-items", JSON.stringify(items));
    } else {
      localStorage.removeItem("todo-items");
    }
  }, [items]);

  const handleChange = (e) => {
    setInputValues(e.target.value);
  };

  const handleClick = () => {
    if (!inputValues.trim()) return;

    setItems((prev) => [...prev, inputValues]);
    setInputValues("");
  };

  const removeList = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="max-w-screen h-full p-20">
      <div className="container m-auto p-20 bg-amber-200 rounded-3xl">
        <h2 className="text-2xl font-bold text-center">Everyday Todo List</h2>

        <div className="flex justify-center items-center gap-2 my-4">
          <input
            className="bg-white w-full rounded-full px-4 py-3 outline-none"
            type="text"
            value={inputValues}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-black text-white px-4 py-3 rounded-full"
            onClick={handleClick}
          >
            Add
          </button>
        </div>

        <ul className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="bg-green-600 rounded-full py-2 px-3 flex gap-3 text-white"
            >
              {item}
              <button
                onClick={() => removeList(index)}
                className="text-red-700 font-bold bg-white rounded-full px-2 cursor-pointer"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ToDoList;
