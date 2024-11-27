import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/AuthContex";
import useApi from "../../hooks/useAPI";

export function useAddBien() {
  const { token } = useContext(AuthContext);
  const { get } = useApi();

  const initialForm = {
    id: "",
    descripcion: "",
    estado: "",
    etiqueta: "",
    depositario: "",
    ubicacion: "",
  };
  // Crear el objeto con los datos, siguiendo el formato del DTO
  const [formData, setFormData] = useState(initialForm);
  const [depositarios, setDepositarios] = useState([]);
  const [ubicaciones, setUbicaciones] = useState([]);

  useEffect(() => {
    const getDepositarios = async () => {
      try {
        const response = await get("http://127.0.0.1:8080/api/depositarios");
        setDepositarios(response);
        console.log(depositarios);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    getDepositarios();
  }, []);

  useEffect(() => {
    const getUbicaciones = async () => {
      try {
        const response = await get("http://127.0.0.1:8080/api/ubicaciones");
        setUbicaciones(response);
        console.log(ubicaciones);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    getUbicaciones();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        alert("Todos los campos deben de ser llenados");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que el formulario se envíe y recargue la página
    if (validateForm()) {
      try {
        const response = await fetch("http://127.0.0.1:8080/api/bienes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData), // Convierte formData a JSON para el cuerpo de la solicitud
        });

        if (!response.ok) {
          throw new Error("Error en la solicitud"); // Lanza un error si la respuesta no es exitosa
        }

        const data = await response.json();
        console.log("Datos enviados correctamente:", data);

        // Limpia el formulario si el envío fue exitoso
        setFormData(initialForm);
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        console.log(token);
      }
    }
  };

  const handleCancel = () => {
    setFormData(initialForm);
  };
  return { formData, handleChange, handleSubmit, handleCancel };
}
