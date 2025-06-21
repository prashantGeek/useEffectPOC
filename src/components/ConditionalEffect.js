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
