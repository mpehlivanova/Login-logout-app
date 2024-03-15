import React, { useEffect } from "react";
import { createContext, useState } from 'react';
import { getToken, logoutUser } from '../auth/auth-manager';
import { TOKEN_TYPE } from '../enum';
import { jwtDecode } from 'jwt-decode';
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
  const access: any = getToken(TOKEN_TYPE.access);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(Boolean(access));

  const isValidToken = () => {
    if (isAuthenticated) {
      const { exp }: any = jwtDecode(access);
      const expDate = new Date(exp * 1000);
      if (expDate <= new Date()) {
        setAuthenticated(false);
        navigate('/');
        logoutUser();
      }
    }
  };

  useEffect(() => {
    document.onclick = () => isValidToken();
    document.onscroll = () => isValidToken();
    document.onkeydown = () => isValidToken();
  }, [new Date()]);

  const contextValue = { isAuthenticated, setAuthenticated };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

