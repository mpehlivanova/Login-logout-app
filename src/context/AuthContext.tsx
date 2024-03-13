import React from "react";
import { createContext, useState } from 'react';
import { getToken } from '../auth/auth-manager';
import { TOKEN_TYPE } from '../enum';

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
  const access = getToken(TOKEN_TYPE.access);
  const [isAuthenticated, setAuthenticated] = useState(Boolean(access));

  const contextValue = { isAuthenticated, setAuthenticated };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

