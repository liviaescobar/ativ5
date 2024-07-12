import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <p>Você não está logado.</p>;
  }

  return (
    <div>
      <h1>Bem-vindo, {user.username}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
