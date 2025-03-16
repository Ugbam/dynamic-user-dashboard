// src/Dashboard.tsx
import React from 'react';
import { useAuth } from './AuthContext';
import './Dashboard.css'; 

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const getRoleClass = () => {
    switch (user?.role) {
      case 'Admin':
        return 'admin';
      case 'Editor':
        return 'editor';
      case 'Viewer':
        return 'viewer';
      default:
        return '';
    }
  };

  return (
    <div className={`dashboard ${getRoleClass()}`}>
      <h1>Welcome to the Dashboard, {user?.username}!</h1>
      {user?.role === 'Admin' && (
        <div className="admin-controls">
          <h2>Admin Controls</h2>
          <p>You have access to all administrative features.</p>
        </div>
      )}
      {user?.role === 'Editor' && (
        <div className="editor-panel">
          <h2>Content Editor Panel</h2>
          <p>You can edit and manage content here.</p>
        </div>
      )}
      {user?.role === 'Viewer' && (
        <div className="viewer-reports">
          <h2>Read-Only Reports</h2>
          <p>You can only view reports but cannot make changes.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;