import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        const response = await axios.get('/api/users/profile', config);
        setUserData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch profile');
        if (err.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      await axios.put('/api/users/profile', userData, config);
      setError('Profile updated successfully!');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update profile');
    }
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleUpdateProfile}>
        <input
          type="text"
          placeholder="Username"
          value={userData.username}
          onChange={(e) => setUserData({...userData, username: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({...userData, email: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="First Name"
          value={userData.firstName}
          onChange={(e) => setUserData({...userData, firstName: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={userData.lastName}
          onChange={(e) => setUserData({...userData, lastName: e.target.value})}
          required
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;
