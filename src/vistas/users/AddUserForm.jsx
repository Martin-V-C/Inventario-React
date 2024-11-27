import { useState } from "react";
import { useCrudUser } from "./useCrudUsers";

function AddUserForm() {
  const initialForm = {
    numeroEco: "",
    nombre: "",
    username: "",
    password: "",
    rol: "",
  };
  const { handleCreate } = useCrudUser();
  const [formData, setFormData] = useState(initialForm);
  const handleCancel = () => {
    setFormData(initialForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          id="Name"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userNoEconomico" className="form-label">
          Numero Economico
        </label>
        <input
          type="number"
          className="form-control"
          id="userNoEconomico"
          name="numeroEco"
          value={formData.numeroEco}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          Nombre de usuario
        </label>
        <input
          type="text"
          className="form-control"
          id="userName"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="UserPassword" className="form-label">
          Escriba una contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="UserPassword"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Rol del usuario</label>
        <select
          className="form-select"
          id="UserRol"
          name="rol"
          value={formData.rol}
          onChange={handleChange}
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
          onClick={handleCancel}
        >
          Limpiar Campos
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          data-bs-dismiss="modal"
          onClick={handleCancel}
        >
          Cancelar
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={(e) => {
            e.preventDefault();
            handleCreate(formData);
          }}
        >
          Añadir Usuario
        </button>
      </div>
    </form>
  );
}

export default AddUserForm;
