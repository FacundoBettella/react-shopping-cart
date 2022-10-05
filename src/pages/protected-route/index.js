import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ userAuth, redirectPath = "/login" }) => {
  return userAuth !== null ? (
    <Outlet />
  ) : (
    <Navigate to={redirectPath} replace />
  );
};
