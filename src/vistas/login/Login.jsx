import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./useLogin";

function Login() {
  const { updatePassword, updateUserName, handleSubmit, username, password } =
    useLogin();

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
              value={username}
              onChange={(e) => updateUserName(e.target.value)}
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
              value={password}
              onChange={(e) => updatePassword(e.target.value)}
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