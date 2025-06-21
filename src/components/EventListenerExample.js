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
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 h-80 flex flex-col">
      <h2 className="text-xl font-bold text-blue-600 mb-4 border-b border-blue-100 pb-2">
        4. Event Listeners
      </h2>
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-3 flex-1">
          <div className="bg-purple-50 p-4 rounded-md border border-purple-200">
            <h3 className="font-semibold text-purple-800 mb-2 text-sm">📐 Window Size</h3>
            <p className="font-mono text-purple-700 text-sm">
              {windowSize.width} × {windowSize.height} px
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-md border border-orange-200">
            <h3 className="font-semibold text-orange-800 mb-2 text-sm">🖱️ Mouse Position</h3>
            <p className="font-mono text-orange-700 text-sm">
              X: {mousePosition.x}, Y: {mousePosition.y}
            </p>
          </div>
        </div>
        <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-md mt-3">
          💡 Move your mouse or resize window to see updates
        </div>
      </div>
    </div>
  );
}
