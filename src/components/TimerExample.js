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
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 h-80 flex flex-col">
      <h2 className="text-xl font-bold text-blue-600 mb-4 border-b border-blue-100 pb-2">
        3. Timer with Cleanup
      </h2>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-gray-50 p-6 rounded-md text-center w-full">
            <p className="text-4xl font-mono font-bold text-gray-800 mb-2">{seconds}s</p>
            <p className="text-xs text-gray-600">Timer Value</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2 mt-4">
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
