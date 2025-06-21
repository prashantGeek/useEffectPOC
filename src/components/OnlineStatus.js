'use client';
import { useState, useEffect } from 'react';

export default function OnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Set initial status
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 h-80 flex flex-col">
      <h2 className="text-xl font-bold text-blue-600 mb-4 border-b border-blue-100 pb-2">
        5. Online/Offline Status
      </h2>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex-1 flex items-center justify-center">
          <div className={`p-6 rounded-md border-l-4 w-full text-center ${
            isOnline 
              ? 'bg-green-50 border-green-400 text-green-800' 
              : 'bg-red-50 border-red-400 text-red-800'
          }`}>
            <div className="flex items-center justify-center mb-3">
              <div className={`w-4 h-4 rounded-full mr-3 ${
                isOnline ? 'bg-green-500' : 'bg-red-500'
              }`}></div>
              <span className="font-semibold text-lg">
                {isOnline ? '🟢 Online' : '🔴 Offline'}
              </span>
            </div>
            <p className="text-sm">
              Status: {isOnline ? 'Connected' : 'Disconnected'}
            </p>
          </div>
        </div>
        <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-md mt-3">
          💡 Try disconnecting your internet to see the status change
        </div>
      </div>
    </div>
  );
}
