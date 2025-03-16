import React, { createContext, useState, useContext } from 'react';

interface User {
  username: string;
  role: 'Admin' | 'Editor' | 'Viewer';
}

interface AuthContextType {
  user: User | null;
  login: (username: string, role: 'Admin' | 'Editor' | 'Viewer') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, role: 'Admin' | 'Editor' | 'Viewer') => {
    setUser({ username, role });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};