import { authContextValue, authToken, authUser } from '@/types';
import { createContext, useState } from 'react';

export const AuthContext = createContext<authContextValue | null>(null);

export const AuthProvider = ({ children }: OnlyChild) => {
  const [authUser, setAuthUser] = useState<authUser | null>(null);
  const [authToken, setAuthToken] = useState<authToken | null>(null);

  return (
    <AuthContext.Provider
      value={{ authUser, setAuthUser, authToken, setAuthToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
