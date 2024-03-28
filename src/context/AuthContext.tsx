import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { createContext, useState } from 'react';
import {
  isValidAccessToken,
  logoutUser,
  getToken,
  refreshUserSession
} from '../auth/auth-manager';
import { TokenType } from '../enum';

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
  const accessToken: string = getToken(TokenType.accessToken) || ''
  const [isAuthenticated, setAuthenticated] = useState<boolean>(Boolean(accessToken));

  const validateUserSession = async () => {
    if (!isValidAccessToken()) {
      if (await refreshUserSession()) {
        setAuthenticated(true);
      } else {
        logoutUser();
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

