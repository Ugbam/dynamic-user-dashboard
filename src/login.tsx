import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './login.css'; 

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState<'Admin' | 'Editor' | 'Viewer'>('Viewer');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(username, role);
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Please enter a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value as 'Admin' | 'Editor' | 'Viewer')}
          >
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
        </div>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;