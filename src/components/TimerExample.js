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
    <div className="bg-white rounded-lg shadow-md p-6 m-4 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b border-blue-100 pb-2">
        3. Timer with Cleanup
      </h2>
      <div className="space-y-4">
        <div className="bg-gray-50 p-6 rounded-md text-center">
          <p className="text-4xl font-mono font-bold text-gray-800 mb-2">{seconds}s</p>
          <p className="text-sm text-gray-600">Timer Value</p>
        </div>
        <div className="flex space-x-3 justify-center">
          <button 
            className={`font-medium py-2 px-4 rounded-md transition-colors duration-200 shadow-sm hover:shadow-md ${
              isRunning 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? '⏸️ Stop' : '▶️ Start'}
          </button>
          <button 
            className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
            onClick={() => setSeconds(0)}
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}
