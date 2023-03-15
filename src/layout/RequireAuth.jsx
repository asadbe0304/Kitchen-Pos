import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Navigate to="/sign" state={{ from: location }} replace />
  );
};

export default RequireAuth;
