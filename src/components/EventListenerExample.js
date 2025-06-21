'use client';
import { useState, useEffect } from 'react';

export default function EventListenerExample() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    // Set initial size
    updateSize();

    window.addEventListener('resize', updateSize);
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="section">
      <h2>4. Event Listeners</h2>
      <p>Window Size: {windowSize.width} x {windowSize.height}</p>
      <p>Mouse Position: ({mousePosition.x}, {mousePosition.y})</p>
    </div>
  );
}
