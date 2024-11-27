import { useAddBien } from "./useCrudBienes";

function AddBienForm() {
  const { formData, handleCancel, handleChange, handleSubmit } = useAddBien();

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="noBien" className="form-label">
          No. Bien
        </label>
        <input
          type="number"
          className="form-control"
          id="NoBien"
          name="no_bien"
          value={formData.id}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Descripcion" className="form-label">
          Descripcion
        </label>
        <textarea id="Descripcion" className="form-control" rows="5"></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Depositario</label>
        <select
          className="form-select"
          id="Depositario"
          name="dep"
          value={formData.depositario}
          onChange={handleChange}
          required
        >
          <option disabled defaultValue="">
            Seleccione un opcion
          </option>
          {/* <option value="user" selected>
            Usuario
          </option>
          <option value="admin">Administrador</option> */}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Estado</label>
        <select
          className="form-select"
          id="Estado"
          //   name="rol"
          //   value={formData.rol}
          //   onChange={handleChange}
          required
        >
          <option defaultValue="" disabled>
            Seleccione un opcion
          </option>
          <option value="Ubicado">Ubicado</option>
          <option value="No ubicado">No ubicado</option>
          <option value="Perdido">Perdido</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Etiqueta</label>
        <select
          className="form-select"
          id="Etiqueta"
          //   name="rol"
          //   value={formData.rol}
          //   onChange={handleChange}
          required
        >
          <option defaultValue="" disabled>
            Seleccione un opcion
          </option>
          <option value="Con etiqueta">Con etiqueta</option>
          <option value="Sin etiqueta">Sin etiqueta</option>
          <option value="Desconocido">Desconocido</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Ubicacion</label>
        <select
          className="form-select"
          id="Ubicacion"
          //   name="rol"
          //   value={formData.rol}
          //   onChange={handleChange}
          required
        >
          <option defaultValue="" disabled>
            Seleccione un opcion
          </option>
        </select>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-outline-secondary"
          //onClick={handleCancel}
        >
          Limpiar Campos
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          data-bs-dismiss="modal"
          //onClick={handleCancel}
        >
          Cancelar
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          //onClick={handleSubmit}
        >
          Añadir Usuario
        </button>
      </div>
    </form>
  );
}

export default AddBienForm;
