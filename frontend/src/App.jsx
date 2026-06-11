import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import PredictionView from './components/PredictionView';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem('token'));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={!token ? <Auth setToken={setToken} /> : <Navigate to="/dashboard" />} 
        />
        <Route 
          path="/dashboard" 
          element={token ? <Dashboard handleLogout={handleLogout} /> : <Navigate to="/" />} 
        />
        <Route 
          path="/predict/:type" 
          element={token ? <PredictionView /> : <Navigate to="/" />} 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
