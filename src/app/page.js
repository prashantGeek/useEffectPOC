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
    <div className="container">
      <h1>useEffect POC - Comprehensive Examples</h1>
      
      <div className="section">
        <h2>Toggle Components</h2>
        {Object.keys(showComponents).map(key => (
          <button
            key={key}
            className="button"
            onClick={() => setShowComponents(prev => ({
              ...prev,
              [key]: !prev[key]
            }))}
          >
            {showComponents[key] ? 'Hide' : 'Show'} {key}
          </button>
        ))}
      </div>

      {showComponents.basic && <BasicUseEffect />}
      {showComponents.dataFetching && <DataFetching />}
      {showComponents.timer && <TimerExample />}
      {showComponents.eventListener && <EventListenerExample />}
      {showComponents.onlineStatus && <OnlineStatus />}
      {showComponents.conditional && <ConditionalEffect />}
    </div>
  );
}
