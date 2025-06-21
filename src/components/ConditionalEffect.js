'use client';
import { useState, useEffect } from 'react';

export default function ConditionalEffect() {
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
    <div className="bg-white rounded-lg shadow-md p-6 m-4 border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b border-blue-100 pb-2">
        6. Conditional useEffect
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            User ID (1-10)
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="number"
            value={userId}
            onChange={(e) => setUserId(Number(e.target.value))}
            placeholder="Enter user ID (1-10)"
            min="1"
            max="10"
          />
        </div>
        
        {loading && (
          <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
              <span className="ml-3 text-blue-700">Loading user profile...</span>
            </div>
          </div>
        )}
        
        {userProfile && !loading && (
          <div className="bg-green-50 p-4 rounded-md border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-2">{userProfile.name}</h3>
            <div className="space-y-1 text-sm text-green-700">
              <p><span className="font-medium">Email:</span> {userProfile.email}</p>
              <p><span className="font-medium">Phone:</span> {userProfile.phone}</p>
              <p><span className="font-medium">Website:</span> 
                <a href={`https://${userProfile.website}`} className="text-blue-600 hover:underline ml-1">
                  {userProfile.website}
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
