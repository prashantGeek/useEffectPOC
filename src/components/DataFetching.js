'use client';
import { useState, useEffect } from 'react';

export default function DataFetching() {
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
