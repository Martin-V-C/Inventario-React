import Acordeon from "../Acodeon";
import Logo from "../Logo";
import ProfileCard from "../ProfileCard";

function TopNavar() {
  return (
    <>
      <div className="row justify-content-between">
        <div className="col-2 d-flex align-items-center">
          <Logo></Logo>
        </div>

        <div className="btn-group col-auto d-flex align-items-center">
          <div className="p-0 rounded-2">
            <a className="btn list-group-item text-start p-2 rounded-2">
              <p className="m-0 d-none d-md-block">Inicio</p>
              <i className="bi bi-house d-md-none d-block " />
            </a>
          </div>
          <div>
            <button
              type="button"
              className="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <p className="m-0 d-none d-md-inline">Bienes</p>
              <i className="bi bi-journal d-md-none" />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Bienes de usuario
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Bienes del area
                </a>
              </li>
            </ul>
          </div>

          <div className="p-0 rounded-2">
            <a className="btn list-group-item text-start p-2 rounded-2">
              <p className="m-0 d-none d-md-block">Usuarios</p>
              <i className="bi bi-person d-md-none d-block " />
            </a>
          </div>
          <div className="p-0 rounded-2">
            <a className="btn list-group-item text-start p-2 rounded-2">
              <p className="m-0 d-none d-md-block">Cerrar Sesion</p>
              <i className="bi bi-box-arrow-left d-md-none d-block " />
            </a>
          </div>
        </div>
        <div className="col-2 d-flex align-items-center">
          <ProfileCard></ProfileCard>
        </div>
      </div>
    </>
  );
}

export default TopNavar;
