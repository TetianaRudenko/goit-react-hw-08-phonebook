import { Navigate } from "react-router-dom";
import { useAuth } from "hooks";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirected = !isLoggedIn && !isRefreshing;

  return shouldRedirected ? <Navigate to={redirectTo} /> : Component;
}