import { useState } from "react";
import useApi from "../../hooks/useAPI";

function UpdateUserForm(noEco) {
  const { get } = useApi();
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState([]);

  const getdata = async () => {
    const url = "http://127.0.0.1:8000/api/depositarios/" + noEco;
    const response = await get(url);
    setFormData(response);
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="Name" className="form-label">
          Nombre del Trabajador
        </label>
        <input
          type="text"
          className="form-control"
          id="NameUpdateForm"
          name="nombre"
          //value={formData.nombre}
          //onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="NumeroEconomicoUpdateForm" className="form-label">
          Numero Economico
        </label>
        <input
          type="number"
          className="form-control"
          id="NumeroEconomicoUpdateForm"
          name="numeroEco"
          //value={formData.numeroEco}
          //onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="usernameUpdateForm " className="form-label">
          Nombre de usuario
        </label>
        <input
          type="text"
          className="form-control"
          id="usernameUpdateForm"
          name="username"
          //value={formData.username}
          //onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="passwordUpdateForm" className="form-label">
          Escriba una contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="passwordUpdateForm"
          name="password"
          //value={formData.password}
          //onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Rol del usuario</label>
        <select
          className="form-select"
          id="rolUpdateForm"
          name="rol"
          //value={formData.rol}
          //onChange={handleChange}
          required
        >
          <option value="" disabled>
            Seleccione un opcion
          </option>
          <option value="User">Usuario</option>
          <option value="Admin">Administrador</option>
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

export default UpdateUserForm;
