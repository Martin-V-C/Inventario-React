import { useContext, useEffect, useState } from "react";
import { useCrudUser } from "./useCrudUsers";
import { UserDataContext } from "./UserDataContext";

function TablaUsuarios() {
  const { handleDelete, fetchUsers, users } = useCrudUser();
  const { fetchUserData } = useContext(UserDataContext);

  const [loading, setLoading] = useState(false); // Para controlar el estado de carga
  const [error, setError] = useState(null); // Para manejar errores

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true); // Empezamos cargando
        await fetchUsers();
        setError(null); // Si todo va bien, no hay error
      } catch (err) {
        console.error("Error al cargar usuarios:", err);
        setError(err); // Guardamos el error si ocurre
      } finally {
        setLoading(false); // Terminamos de cargar
      }
    };
    loadUsers();
  }, []);

  return (
    <>
      <div className="table-responsive container d-flex align-items-center px-5 pt-5">
        {loading && <p>Cargando...</p>}

        {error && <p>Error al cargar los usuarios: {error.message}</p>}

        {!loading && !error && users && (
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
        )}
      </div>
    </>
  );
}

export default TablaUsuarios;
