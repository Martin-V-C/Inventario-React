// AuthContext.js
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    // Guardar el token y usuario en localStorage cuando cambien
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      if (user.rol.tipo == "Admin") {
        setAdmin(true);
      }
    } else {
      localStorage.removeItem("user");
    }
  }, [token, user]);

  const updateToken = (newToken) => setToken(newToken);
  const updateUser = (newUser) => setUser(newUser);

  return (
    <AuthContext.Provider
      value={{ token, user, admin, updateToken, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
