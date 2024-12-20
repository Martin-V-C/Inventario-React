import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./vistas/login/Login.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Principal from "./principal.jsx";
import Bienes from "./vistas/bienes/Bienes.jsx";
import Usuarios from "./vistas/users/Usuarios.jsx";
import Inicio from "./vistas/inicio/Inicio.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";
import { AuthProvider } from "./auth/AuthContex.jsx";
import { UserDataProvider } from "./vistas/users/UserDataContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            path="home/"
            element={
              <ProtectedRoute>
                <Principal />
              </ProtectedRoute>
            }
          >
            <Route index element={<Inicio />} />
            <Route path="inicio" element={<Inicio />} />
            <Route path="bienes" element={<Bienes />} />
            <Route
              path="usuarios"
              element={
                <UserDataProvider>
                  <Usuarios />
                </UserDataProvider>
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
