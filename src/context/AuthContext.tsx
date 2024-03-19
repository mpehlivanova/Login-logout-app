import React, { useEffect } from "react";
import { createContext, useState } from 'react';
import { getToken, isValidAccessToken, isRefreshUserSession } from '../auth/auth-manager';
import { TOKEN_TYPE } from '../enum';
import { useNavigate } from 'react-router-dom';

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
  const accessToken: string = getToken(TOKEN_TYPE.access) || '';
  const [isAuthenticated, setAuthenticated] = useState<boolean>(Boolean(accessToken));

  const validateUserSession = async () => {
    if (!isValidAccessToken()) {
      if (await isRefreshUserSession()) {
        setAuthenticated(true);
      } else {
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

