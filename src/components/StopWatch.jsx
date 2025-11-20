import React, { useState, useEffect, useRef } from 'react';
import Button from '../components/Button';

const StopWatch = () => {

  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime(prev => {
        let { hours, minutes, seconds } = prev;

        seconds++;

        if (seconds === 60) {
          seconds = 0;
          minutes++;
        }

        if (minutes === 60) {
          minutes = 0;
          hours++;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const format = (val) => (val < 10 ? `0${val}` : val);

  return (
    <div className='max-w-screen px-2 my-5'>
      <div className='container px-3 py-2 mx-auto space-y-6'>
        <h2 className='text-center text-2xl font-bold my-4'>Stopwatch</h2>

        <p className='text-center bg-blue-300 p-4 w-full rounded-full text-2xl font-bold'>
          {format(time.hours)} : {format(time.minutes)} : {format(time.seconds)}
        </p>

        <div className='flex justify-evenly gap-3'>
          <Button onClick={startTimer} name="Start" />
          <Button onClick={stopTimer} name="Stop" />
          <Button onClick={resetTimer} name="Reset" />
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
