import { Link, NavLink } from "react-router-dom";
import Acordeon from "../Acodeon";
import Logo from "../Logo";
import ProfileCard from "../ProfileCard";
import { useAuth } from "../../auth/useAuth";

function Sidebar() {
  const { logout } = useAuth();
  const style_btn = "btn list-group-item text-start p-2 rounded-2";
  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <Logo></Logo>
      </div>
      <div className="">
        <ProfileCard />
      </div>
      <ul className="list-group flex-grow-1 flex-">
        <li className="list-group-item p-0 rounded-2">
          <NavLink
            to="inicio"
            className={({ isActive }) =>
              isActive ? style_btn + " active" : style_btn
            }
          >
            <p className="m-0 d-none d-md-block">Inicio</p>
            <i className="bi bi-house ps-3 d-md-none d-block " />
          </NavLink>
        </li>
        <li className="list-group-item p-0 rounded-2">
          <Acordeon
            etiqueta="Bienes"
            id1="side-acordeon"
            id2="side-acordeon-a"
            child={[
              <NavLink
                to="bienes"
                className={({ isActive }) =>
                  isActive ? style_btn + " active" : style_btn
                }
              >
                <p className="m-0">Bienes del usuario</p>
              </NavLink>,
              <a className="btn list-group-item rounded-2">
                <p className="m-0">Bienes del Área</p>
              </a>,
            ]}
            icon=<i className="bi bi-journal ps-3 d-block d-md-none"></i>
          />
        </li>
        <li className="list-group-item p-0 rounded-2">
          <NavLink
            to="usuarios"
            className={({ isActive }) =>
              isActive ? style_btn + " active" : style_btn
            }
          >
            <p className="m-0 d-none d-md-block">Usuarios</p>
            <i className="bi bi-box-arrow-left ps-3 d-md-none d-block " />
          </NavLink>
        </li>
        <li className="list-group-item p-0 rounded-2 mt-auto mb-5 d-grid">
          <button
            type="button"
            onClick={logout}
            className="list-group-item text-start p-2 rounded-2 "
          >
            <p className="m-0 d-none d-md-block">Cerrar sesion</p>
          </button>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
