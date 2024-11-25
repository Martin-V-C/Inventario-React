// useApi.js
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContex.jsx";

const useApi = () => {
  const { token } = useContext(AuthContext);

  const apiRequest = async (url, options = {}) => {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Incluye el token en el encabezado de autorización
          ...options.headers,
        },
      });

      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error("Error en la solicitud API:", error);
      throw error;
    }
  };

  // Funciones auxiliares para los métodos HTTP comunes
  const get = (url) => apiRequest(url, { method: "GET" });
  const post = (url, body) =>
    apiRequest(url, { method: "POST", body: JSON.stringify(body) });
  const put = (url, body) =>
    apiRequest(url, { method: "PUT", body: JSON.stringify(body) });
  const del = (url) => apiRequest(url, { method: "DELETE" });

  return { get, post, put, del };
};

export default useApi;
