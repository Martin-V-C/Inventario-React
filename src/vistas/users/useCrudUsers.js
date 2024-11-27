import { useState } from "react";

import useApi from "../../hooks/useAPI";

export function useCrudUser() {
  const [users, setUsers] = useState([]);
  const { del, put, get, post } = useApi();

  const handleDelete = async (numeroEco) => {
    const response = await del(
      "http://127.0.0.1:8080/api/depositarios/" + numeroEco
    );
    console.log(response);
  };

  const fetchUsers = async () => {
    const response = await get("http://127.0.0.1:8080/api/depositarios");
    setUsers(response);
  };

  const handleUpdate = async (formData) => {
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        alert("Todos los campos son obligatorios por favor llene el : " + key);
        return;
      }
    }
    const response = await put(
      "http://127.0.0.1:8080/api/depositarios/" + formData.numeroEco,
      formData
    );
    console.log(response);
  };
  const handleCreate = async (formData) => {
    console.log(formData);
    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        alert("Todos los campos son obligatorios por favor llene el : " + key);
        return;
      }
    }

    const response = await post("http://127.0.0.1:8080/api/register", formData);
    console.log(response);
  };

  return {
    handleDelete,
    handleUpdate,
    fetchUsers,
    handleCreate,
    users,
  };
}
