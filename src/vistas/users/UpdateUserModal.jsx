import { useContext } from "react";
import UpdateUserForm from "./UpdateUserForm";
import { UserDataContext } from "./UserDataContext";

function UpdateUserModal() {
  const { userData } = useContext(UserDataContext);

  return (
    <div
      className="modal fade"
      id="update-user"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">
              Modifica Usuario: {"" + userData.nombre}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <UpdateUserForm></UpdateUserForm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUserModal;
