import { useLocalStorage } from "@/hooks";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useLocalStorage("authUser", null);

  const [authToken, setAuthToken] = useLocalStorage("authToken", null);

  const login = (user, token) => {
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
