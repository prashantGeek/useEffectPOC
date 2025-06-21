'use client';
import { useState, useEffect } from 'react';

export default function BasicUseEffect() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // Effect with no dependencies - runs after every render
  useEffect(() => {
    const now = new Date();
    setMessage(`Component rendered at ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}`);
  });

  // Effect with empty dependency array - runs only once
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  // Effect with dependencies - runs when count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b border-blue-100 pb-2">
        1. Basic useEffect Patterns
      </h2>
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="text-lg font-semibold text-gray-800">
            Count: <span className="text-blue-600 font-mono">{count}</span>
          </p>
        </div>
        <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-400">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Last render:</span> 
            <span className="font-mono text-green-700 ml-2">{message}</span>
          </p>
        </div>
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
          onClick={() => setCount(count + 1)}
        >
          Increment Count
        </button>
      </div>
    </div>
  );
}
