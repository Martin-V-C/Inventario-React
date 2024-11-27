import { useContext, useEffect, useState } from "react";
import AddUserModal from "./AddUserModal";
import { useCrudUser } from "./useCrudUsers";
import useApi from "../../hooks/useAPI";
import UpdateUserModal from "./UpdateUserModal";
import { UserDataContext } from "./UserDataContext";

function Usuarios() {
  const { handleDelete, users, fetchUsers } = useCrudUser();
  const { fetchUserData } = useContext(UserDataContext);

  useEffect(() => {
    fetchUsers();
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
              {users.map((usuario) => (
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
                        onClick={() => {
                          fetchUserData(usuario.numeroEco);
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#update-user"
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
