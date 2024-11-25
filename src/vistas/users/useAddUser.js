import { useContext, useState } from "react";
import useApi from "../../hooks/useAPI";
import { AuthContext } from "../../auth/AuthContex";

export function useAddUser() {
  const { post } = useApi();
  const { token } = useContext(AuthContext);

  const initialForm = {
    numeroEco: "",
    nombre: "",
    username: "",
    password: "",
    rol: "",
  };

  // Crear el objeto con los datos, siguiendo el formato del DTO
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        alert("Todos los campos son obligatorios por favor llene el : " + key);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log(formData);
        const response = await post(
          "http://127.0.0.1:8080/api/register",
          formData
        );
        // Limpia el formulario si el envío fue exitoso
        console.log(response);
        setFormData(initialForm);
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
      }
    }
  };

  const handleCancel = () => {
    setFormData(initialForm);
  };

  return { formData, handleChange, handleSubmit, handleCancel };
}
