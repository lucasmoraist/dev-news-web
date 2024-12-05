import { useLogged } from "@/hooks/useLogged";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
  const isLogged = useLogged;

  return isLogged ? <Outlet /> : <Navigate to="/signin" />;
}
