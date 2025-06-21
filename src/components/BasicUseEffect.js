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
    <div className="section">
      <h2>1. Basic useEffect Patterns</h2>
      <p>Count: {count}</p>
      <p>Last render: {message}</p>
      <button className="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
