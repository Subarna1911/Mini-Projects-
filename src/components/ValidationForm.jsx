import React from "react";
import { useState } from "react";

const ValidationForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {
        name:name.trim() === "",
        location: location.trim() === "",
    };

    setError(newErrors);

    if(!newErrors.name && !newErrors.location){
        setSuccessMessage(`submitted successfully!\nName:${name}\nLocation:${location}`);
    }
    else{
        setSuccessMessage("");
    }
  };




  return (
    <div className="max-w-screen w-full">
      <div className="container mx-auto px-3 md:px-4">
        <h1>Astrik Field Form Submission</h1>
        <form
          className="bg-gray-200 rounded-xl flex flex-col justify-center items-center  px-4 py-5 space-y-3"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center">
            <label className="text-md font-semibold" htmlFor="Name">
              Name
            </label>
            <span className="text-red-700 font-semibold text-sm ml-1.5">*</span>
          </div>
          <input
            className="bg-white border-black outline-none py-3 px-2 w-sm rounded-lg"
            type="text"
            placeholder="enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error.name  &&
          <span className="text-red-400 text-sm">Name is required</span>
}

          <div className="flex">
            <label className="text-md font-semibold" htmlFor="location">
              Location
            </label>
            <span className="text-red-700 font-semibold text-sm ml-1.5">*</span>
          </div>

          <input
            className="bg-white border-black outline-none py-3 px-2 w-sm rounded-lg"
            type="text"
            placeholder="enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
         
         {error.location &&
          <span className="text-red-400 text-sm">Location is required</span>
         }
          <button
            className="w-sm rounded-lg px-2 py-3 border-sm bg-blue-500 text-white hover:cursor-pointer"
          >
            Submit Form
          </button>
        </form>

        {successMessage && (<p className="text-center text-md py-4 text-green-600">{successMessage}</p>)}
      </div>
    </div>
  );
};

export default ValidationForm;
