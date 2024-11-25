import { useContext, useState } from "react";
import { AuthContext } from "./AuthContex";
import { Navigate, Route, useNavigate } from "react-router-dom";

export const useAuth = () => {
  const { token, updateToken, user, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("login");
    updateToken(null);
    updateUser(null);
  };

  return { logout };
};
