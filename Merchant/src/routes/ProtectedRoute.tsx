import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export default function ProtectedRoute() {
  const accessToken = useSelector((s: RootState) => s.auth.accessToken);
  return accessToken ? <Outlet /> : <Navigate to="/login" replace />;
}
