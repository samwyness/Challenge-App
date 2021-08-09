import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Dashboard: React.FC = () => {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <>
      <div>
        <div>
          <h2>Profile</h2>
          {error && <div>{error}</div>}
          <strong>Email:</strong> {currentUser?.email}
        </div>
      </div>
      <div>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </>
  );
};

export default Dashboard;
