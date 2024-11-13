import { useContext, useState } from "react";
import { AuthContext } from "./AuthContex";

export const useAuth = () => {
  const { token, updateToken, user, updateUser } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
    updateToken(null);
    updateUser(null);
  };

  return {logout};
};
