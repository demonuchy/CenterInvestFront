import React, {createContext, useContext, useEffect, useState} from 'react';
import useApi from '../hooks/useApi';
const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const {getMe} = useApi();
  const [user, setUser] = useState(null)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log('Init user');
        const data = await getMe();
        setUser(data);
      } catch (err) {
        console.error('Error init user:', err);
      };
    }
    fetchUserData();
  }, [getMe, setUser]);

  const value = {user : user}
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};