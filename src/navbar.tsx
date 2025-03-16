import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './navbar.css'; 

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        {user?.role === 'Admin' && (
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        )}
      </ul>
      {user && (
        <div className="user-info">
          <span>{user.username} ({user.role})</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;