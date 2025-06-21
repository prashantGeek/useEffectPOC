'use client';
import { useState, useEffect } from 'react';

export default function TimerExample() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <div className="section">
      <h2>3. Timer with Cleanup</h2>
      <p>Timer: {seconds}s</p>
      <button className="button" onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button className="button" onClick={() => setSeconds(0)}>
        Reset
      </button>
    </div>
  );
}
