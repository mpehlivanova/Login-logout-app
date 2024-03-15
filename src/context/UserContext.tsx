import React from "react";
import { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useAuthContext } from '../hooks/useAuthContext';
import { getToken } from '../auth/auth-manager';
import { TOKEN_TYPE } from '../enum';
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
      const bearer: any = getToken(TOKEN_TYPE.bearer);
      const { email, picture, name }: any = jwtDecode(bearer);
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

