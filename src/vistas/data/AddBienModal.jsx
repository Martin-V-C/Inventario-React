import AddBienForm from "./AddBienForm";

function AddBienModal() {
  return (
    <div className="modal fade" id="add-bien" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Añadir Bien</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <AddBienForm></AddBienForm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBienModal;
