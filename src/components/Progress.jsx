import React, { useState } from 'react';

function Progress() {
    const [progress, setProgress] = useState(0);

    const updateProgress = (delta) => {
        setProgress(prev => {
            let result = prev + delta;
            if (result > 100) return 100;
            if (result < 0) return 0;
            return result;
        });
    };

    const getColorBar = () => {
        if (progress >= 80) return "green";
        if (progress >= 40) return "orange";
        return "red";
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Progress Bar</h1>

            {/* Outer Bar */}
            <div 
                style={{
                    width: "300px",
                    height: "25px",
                    backgroundColor: "#ddd",
                    borderRadius: "10px",
                    overflow: "hidden",
                    position: "relative",
                    margin: "0 auto"
                }}
            >

                {/* Inner Fill */}
                <div 
                    style={{
                        width: `${progress}%`,  
                        height: "100%",
                        backgroundColor: getColorBar(),
                        transition: "width 0.3s ease-in-out"
                    }}
                ></div>

                {/* Percentage Text */}
                <span
                    style={{
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "#fff",
                        fontWeight: "bold"
                    }}
                >
                    {progress}%
                </span>
            </div>

            {/* Buttons */}
            <div style={{ marginTop: "15px", display:"flex", justifyContent:"center" }}>
                <button className="bg-red-600 rounded-xl px-2 py-3 w-40" onClick={() => updateProgress(-10)}>-10%</button>
                <button className="bg-green-600 rounded-xl px-2 py-3 w-40" onClick={() => updateProgress(10)} style={{ marginLeft: "10px" }}>
                    +10%
                </button>
            </div>

        </div>
    );
}

export default Progress;
