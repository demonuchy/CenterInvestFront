import React, {createContext, useContext} from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const value = {user : null}
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};