import React from "react";
import { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { authManager } from '../App';
import { useAuthContext } from '../hooks/useAuthContext';
import { User } from '../types';

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
      const idToken: any = authManager.getToken.idToken() || "";
      const { picture, name, email }: any = jwtDecode(idToken);
      setUser({
        name,
        email,
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

