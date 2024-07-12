import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

const App = () => {
  return (
    <AuthProvider>
      <Header />
      <Login />
      <Dashboard />
    </AuthProvider>
  );
};

export default App;
