import React from "react";
import { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useAuthContext } from '../hooks/useAuthContext';
import { getToken } from '../auth/auth-manager';
import { User } from '../types';
import { TokenType } from '../enum';

export interface UserContextProps {
  user?: User,
}

export const UserContext = createContext<UserContextProps>({
  user: undefined,
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const { isAuthenticated } = useAuthContext();
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    if (isAuthenticated) {
      const idToken: any = getToken(TokenType.idToken)
      const { picture, name }: any = jwtDecode(idToken);
      setUser({
        name,
        email: name || "",
        picture,
      });
    } else {
      setUser(undefined);
    }
  }, [isAuthenticated]);

  const contextValue = { user };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

