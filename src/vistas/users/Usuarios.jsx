import { useContext, useEffect, useState } from "react";
import AddUserModal from "./AddUserModal";
import { AuthContext } from "../../auth/AuthContex";
import { useAddUser } from "./useAddUser";
import { usseCrudUser } from "./useCrudUsers";
import useApi from "../../hooks/useAPI";
import UpdateUserModal from "./UpdateUserModal";

function Usuarios() {
  const { get } = useApi();
  const [data, setData] = useState([]);
  const { handleDelete, handleUpdate } = usseCrudUser();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get("http://127.0.0.1:8080/api/depositarios");
        setData(response);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid d-flex flex-column tabla-usuarios">
        <div className=" container px-5 ">
          <div className="row">
            <h5 className="col-12 align-self-start">Usuarios</h5>
            <button
              className="col-4 offset-8 btn btn-success me-0 "
              data-bs-toggle="modal"
              data-bs-target="#add-user"
            >
              Agregar usuario
            </button>
          </div>
        </div>

        <AddUserModal></AddUserModal>
        <UpdateUserModal></UpdateUserModal>

        <div className="table-responsive container d-flex align-items-center px-5 pt-5">
          <table className="table table-hover table-light text-center border">
            <thead>
              <tr>
                <th scope="col">No. Economico</th>
                <th scope="col">Nombre</th>
                <th scope="col">Rol</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((usuario) => (
                <tr key={usuario.numeroEco}>
                  <th scope="row">{usuario.numeroEco}</th>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.rol.tipo}</td>
                  <td>
                    <div className="row justify-content-center">
                      <a
                        onClick={() => {
                          handleDelete(usuario.numeroEco);
                        }}
                        className="col p-0 "
                      >
                        <i className="bi bi-trash3"></i>
                      </a>
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#update-user"
                        data-bs-whatever={usuario.numeroEco}
                        className="col p-0"
                      >
                        <i className="bi bi-pencil"></i>
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="container px-5"></div>
      </div>
    </>
  );
}

export default Usuarios;
