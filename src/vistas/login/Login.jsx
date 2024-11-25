import { useLogin } from "./useLogin";

function Login() {
  const { handleSubmit, handleChange, formData } = useLogin();

  return (
    <>
      <div className="container align-content-center w-50 min-vh-100">
        <form
          onSubmit={handleSubmit}
          className="bg-danger p-4 rounded-4 border border-black"
        >
          <div className="mb-3">
            <label htmlFor="user_name" className="form-label">
              Nombre de usuario
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Usuario"
              required
              id="username"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              required
              id="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
