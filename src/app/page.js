'use client';
import { useState, useEffect } from 'react';

// Component demonstrating basic useEffect
function BasicUseEffect() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // Effect with no dependencies - runs after every render
  useEffect(() => {
    setMessage(`Component rendered ${Date.now()}`);
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

// Component demonstrating data fetching
function DataFetching() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="section"><h2>2. Data Fetching</h2><p>Loading...</p></div>;
  if (error) return <div className="section"><h2>2. Data Fetching</h2><p>Error: {error}</p></div>;

  return (
    <div className="section">
      <h2>2. Data Fetching with useEffect</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

// Component demonstrating timers and intervals
function TimerExample() {
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
    <div className="section">
      <h2>3. Timer with Cleanup</h2>
      <p>Timer: {seconds}s</p>
      <button className="button" onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button className="button" onClick={() => setSeconds(0)}>
        Reset
      </button>
    </div>
  );
}

// Component demonstrating event listeners
function EventListenerExample() {
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

// Component demonstrating online/offline status
function OnlineStatus() {
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

// Component demonstrating conditional effects
function ConditionalEffect() {
  const [userId, setUserId] = useState(1);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) return;

    const fetchUserProfile = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        setUserProfile(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  return (
    <div className="section">
      <h2>6. Conditional useEffect</h2>
      <input
        className="input"
        type="number"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
        placeholder="Enter user ID (1-10)"
        min="1"
        max="10"
      />
      {loading && <p>Loading user profile...</p>}
      {userProfile && !loading && (
        <div>
          <h3>{userProfile.name}</h3>
          <p>Email: {userProfile.email}</p>
          <p>Phone: {userProfile.phone}</p>
          <p>Website: {userProfile.website}</p>
        </div>
      )}
    </div>
  );
}

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
