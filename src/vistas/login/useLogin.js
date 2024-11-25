import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContex";
import useApi from "../../hooks/useAPI";

export const useLogin = () => {
  const initialForm = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialForm);
  const { post } = useApi();
  const { updateUser, updateToken, token, user, admin } =
    useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await fetch("http://127.0.0.1:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.depositario));

        //guardar el token y el usuario para tenerlo en el contexto global
        updateUser(data.depositario);
        updateToken(data.token);

        navigate("/home"); // Redirigir a la página de inicio
      }
      //garda el token y el usuario en el localstorage
    } catch (error) {
      console.error("Error en el login:", error);
    }
  };

  return { handleChange, handleSubmit, formData };
};
