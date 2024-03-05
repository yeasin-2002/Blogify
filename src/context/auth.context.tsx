import useLocalStorage from '@/hooks/useLocalStorage';
import { authContextValue, authToken, authUser } from '@/types';
import { createContext } from 'react';

export const AuthContext = createContext<authContextValue | null>(null);

export const AuthProvider = ({ children }: OnlyChild) => {
  const [authUser, setAuthUser] = useLocalStorage<authUser | null>(
    'authUser',
    null,
  );
  const [authToken, setAuthToken] = useLocalStorage<authToken | null>(
    'authToken',
    null,
  );

  // const [authUser, setAuthUser] = useState<authUser | null>(null);
  // const [authToken, setAuthToken] = useState<authToken | null>(null);

  return (
    <AuthContext.Provider
      value={{ authUser, setAuthUser, authToken, setAuthToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
