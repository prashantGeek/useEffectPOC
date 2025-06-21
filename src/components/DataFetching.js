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

  if (loading) return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">2. Data Fetching</h2>
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-gray-600">Loading...</span>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">2. Data Fetching</h2>
      <div className="bg-red-50 border border-red-200 rounded-md p-4">
        <p className="text-red-600">Error: {error}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b border-blue-100 pb-2">
        2. Data Fetching with useEffect
      </h2>
      <div className="space-y-3">
        {users.map(user => (
          <div key={user.id} className="bg-gray-50 p-4 rounded-md border border-gray-200 hover:bg-gray-100 transition-colors">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-800">{user.name}</span>
              <span className="text-sm text-blue-600 font-mono">{user.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
