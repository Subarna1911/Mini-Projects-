import React, { useState } from 'react';

const GuessTheNumber = () => {

  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const [guess, setGuess] = useState("");
  const [numberToGuess, setNumberToGuess] = useState(generateRandomNumber);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");

  const handleGuess = () => {
    const num = parseInt(guess);

    if (isNaN(num) || num < 1 || num > 100) {
      setMessage("Please enter a number between 1 and 100.");
      return;
    }

    setAttempts(prev => prev + 1);

    if (num === numberToGuess) {
      setMessage("Congratulations! You guessed the right number!");
    } 
    else if (num < numberToGuess) {
      setMessage("Too Low! Try Again!");
    } 
    else if (num > numberToGuess) {
      setMessage("Too High! Try Again!");
    }
  };

  const handleReset = () => {
    setNumberToGuess(generateRandomNumber);
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <div className="max-w-screen w-full">
      <div className="container mx-auto px-4">
        <h1>Guess The Number</h1>

        <input 
          id="guess-num"
          className="w-full px-2 py-2 border-amber-800 rounded-full outline-none"
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />

        <div className="flex items-center justify-between mt-3">
          <button onClick={handleGuess} className="bg-black text-white px-3 py-2 rounded-lg">
            Guess Number
          </button>
          <button onClick={handleReset} className="bg-blue-900 text-white px-3 py-2 rounded-lg">
            Reset Number
          </button>
        </div>

        <p className="font-semibold text-sm mt-2">{message}</p>
        <p className="text-xs text-gray-600">Attempts: {attempts}</p>
      </div>
    </div>
  );
};

export default GuessTheNumber;
