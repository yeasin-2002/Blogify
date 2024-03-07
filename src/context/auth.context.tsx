import { useLocalStorage } from "@/hooks";
import { authContextValue, authToken, authUser } from "@/types";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext<authContextValue | null>(null);

export const AuthProvider = ({ children }: OnlyChild) => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useLocalStorage<authUser | null>(
    "authUser",
    null,
  );
  const [authToken, setAuthToken] = useLocalStorage<authToken | null>(
    "authToken",
    null,
  );

  const login = (user: authUser, token: authToken) => {
    setAuthUser(user);
    setAuthToken(token);
  };
  const logout = (redirect = "/") => {
    setAuthUser(null);
    setAuthToken(null);

    return redirect && navigate(redirect);
  };

  return (
    <AuthContext.Provider
      value={{ authUser, setAuthUser, authToken, setAuthToken, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
