import AddUserModal from "./AddUserModal";
import TablaUsuarios from "./TablaUsuarios";
import UpdateUserModal from "./UpdateUserModal";

function Usuarios() {
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
        <TablaUsuarios></TablaUsuarios>
      </div>
      <AddUserModal></AddUserModal>
      <UpdateUserModal></UpdateUserModal>
    </>
  );
}

export default Usuarios;
