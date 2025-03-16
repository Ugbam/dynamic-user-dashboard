// src/Settings.tsx
import React from 'react';
import './setting.css'; 

const Settings: React.FC = () => {
  return (
    <div className="settings admin">
      <h1>Settings</h1>
      <p>This page is only accessible to Admin users.</p>
      <div className="settings-content">
        <h2>Admin Settings</h2>
        <ul>
          <li>User Management</li>
          <li>System Configuration</li>
          <li>Security Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;