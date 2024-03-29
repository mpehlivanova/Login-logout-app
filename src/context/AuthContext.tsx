import React, { useEffect } from "react";
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authManager } from '../App';

export interface AuthContextProps {
  isAuthenticated: boolean;
  setAuthenticated: (isAuth: boolean) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  setAuthenticated: () => null,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const accessToken: string = authManager.getToken.accessToken() || '';
  const [isAuthenticated, setAuthenticated] = useState<boolean>(Boolean(accessToken));

  const validateUserSession = async () => {
    if (!authManager.isValidToken()) {
      if (await authManager.refreshUserSession()) {
        setAuthenticated(true);
      } else {
        authManager.logout();
        setAuthenticated(false);
        navigate('/');
      }
    };
  };

  useEffect(() => {
    document.onclick = () => validateUserSession();
    document.onscroll = () => validateUserSession();
    document.onkeydown = () => validateUserSession();
  }, [new Date()]);

  const contextValue = { isAuthenticated, setAuthenticated };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

