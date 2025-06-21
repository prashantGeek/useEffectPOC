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
    <div className="bg-white rounded-lg shadow-md p-6 m-4 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b border-blue-100 pb-2">
        5. Online/Offline Status
      </h2>
      <div className={`p-4 rounded-md border-l-4 ${
        isOnline 
          ? 'bg-green-50 border-green-400 text-green-800' 
          : 'bg-red-50 border-red-400 text-red-800'
      }`}>
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full mr-3 ${
            isOnline ? 'bg-green-500' : 'bg-red-500'
          }`}></div>
          <span className="font-semibold">
            Status: {isOnline ? '🟢 Online' : '🔴 Offline'}
          </span>
        </div>
      </div>
      <div className="mt-4 text-xs text-gray-500 bg-gray-50 p-3 rounded-md">
        💡 Try disconnecting your internet to see the status change
      </div>
    </div>
  );
}
