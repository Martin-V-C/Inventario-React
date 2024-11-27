import { useContext } from "react";
import AddUserForm from "./addUserForm";
import { UserDataContext } from "./UserDataContext";

function AddUserModal() {
  return (
    <div
      className="modal fade"
      id="add-user"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Añadir Usuario:
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <AddUserForm></AddUserForm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUserModal;
