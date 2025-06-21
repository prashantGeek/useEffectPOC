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
    <div className="section">
      <h2>5. Online/Offline Status</h2>
      <div className={`status ${isOnline ? 'online' : 'offline'}`}>
        Status: {isOnline ? 'Online' : 'Offline'}
      </div>
    </div>
  );
}
