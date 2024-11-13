import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // Si no hay token, redirige al usuario al login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Si hay token, muestra el componente hijo (ruta protegida)
  return children;
};

export default ProtectedRoute;
