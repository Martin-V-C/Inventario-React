import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContex";

export const  useLogin= () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {updateUser,updateToken}=useContext(AuthContext);

    const updateUserName=(username)=>setUsername(username);
    const updatePassword=(password)=>setPassword(password);

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await fetch("http://127.0.0.1:8080/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          //guardar el token y el usuario para tenerlo en el contexto global
          updateToken(data.token);
          updateUser(data.depositario);
            //garda el token y el usuario en el localstorage
          localStorage.setItem("token", data.token); 
          localStorage.setItem("dep", JSON.stringify(data.depositario));
          navigate("/home"); // Redirigir a la página de inicio
        } else {
          alert("Credenciales incorrectas");
        }
      } catch (error) {
        console.error("Error en el login:", error);
      }
    };    

return{updatePassword,updateUserName,handleSubmit,username,password};
}