import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgressBar] = useState(0);

  const updateProgress = (delta) => {
    setProgressBar((prev) => Math.max(0, Math.min(100, prev + delta)));
  };

  const getColor = () => {
    if (progress >= 80) return "#4CAF50";
    if (progress >= 50) return "#FFC107";
    return "#F44336";
  };

  return (
    <div className="max-w-screen w-full p-4">
      <h2 className="mb-4 font-semibold">Progress Bar</h2>

      <div className="h-10 bg-[#ddd] rounded-sm overflow-hidden relative">
        <div
          className="h-full transition-all duration-300 ease-in-out"
          style={{
            width: `${progress}%`,
            backgroundColor: getColor(),
          }}
        >
          <span className="absolute top-0 left-1/2 -translate-x-1/2 text-white font-bold">
            {progress}%
          </span>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          className="bg-black text-white rounded-lg px-4 py-2 w-full"
          onClick={() => updateProgress(-10)}
        >
          -10%
        </button>

        <button
          className="bg-black text-white rounded-lg px-4 py-2 w-full"
          onClick={() => updateProgress(+10)}
        >
          +10%
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
