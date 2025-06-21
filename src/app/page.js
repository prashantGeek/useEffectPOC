'use client';
import { useState } from 'react';

// Import all the separate components
import BasicUseEffect from '../components/BasicUseEffect';
import DataFetching from '../components/DataFetching';
import TimerExample from '../components/TimerExample';
import EventListenerExample from '../components/EventListenerExample';
import OnlineStatus from '../components/OnlineStatus';
import ConditionalEffect from '../components/ConditionalEffect';

export default function UseEffectPOC() {
  const [showComponents, setShowComponents] = useState({
    basic: true,
    dataFetching: true,
    timer: true,
    eventListener: true,
    onlineStatus: true,
    conditional: true
  });

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          useEffect POC - Comprehensive Examples
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Toggle Components</h2>
          <div className="flex flex-wrap gap-3">
            {Object.keys(showComponents).map(key => (
              <button
                key={key}
                className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  showComponents[key]
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setShowComponents(prev => ({
                  ...prev,
                  [key]: !prev[key]
                }))}
              >
                {showComponents[key] ? '👁️ Hide' : '👀 Show'} {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {showComponents.basic && <BasicUseEffect />}
          {showComponents.dataFetching && <DataFetching />}
          {showComponents.timer && <TimerExample />}
          {showComponents.eventListener && <EventListenerExample />}
          {showComponents.onlineStatus && <OnlineStatus />}
          {showComponents.conditional && <ConditionalEffect />}
        </div>
      </div>
    </div>
  );
}
