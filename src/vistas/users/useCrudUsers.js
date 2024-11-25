import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContex";
import AddUserModal from "./AddUserModal";
import useApi from "../../hooks/useAPI";

export function usseCrudUser() {
  const { del, put, get } = useApi();
  const { token } = useContext(AuthContext);

  const handleDelete = async (numeroEco) => {
    try {
      const response = await del(
        "http://127.0.0.1:8080/api/depositarios/" + numeroEco
      );
      console.log(response);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const handleUpdate = async (numeroEco) => {
    try {
      const response = await get(
        "http://127.0.0.1:8080/api/depositarios/" + numeroEco
      );
      console.log(response);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  return {
    handleDelete,
    handleUpdate,
  };
}
