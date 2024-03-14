import { useAuth } from "@/hooks";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const auth = useAuth();

  return !auth?.authUser ? <Navigate to="/login" /> : <Outlet />;
};
