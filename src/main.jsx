import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./vistas/login/Login.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./principal.jsx";
import Tabla from "./vistas/data/Tabla.jsx";
import Usuarios from "./vistas/users/Usuarios.jsx";
import Inicio from "./vistas/inicio/Inicio.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";
import { AuthProvider } from "./auth/AuthContex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/home/"
            element={
              <ProtectedRoute>
                <Principal />
              </ProtectedRoute>
            }
          >
            <Route path="inicio" element={<Inicio />} />
            <Route path="bienes" element={<Tabla />} />
            <Route path="usuarios" element={<Usuarios />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
