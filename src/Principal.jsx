import Sidebar from "./componentes/sidenavar/Sidebar.jsx";
import TopNavar from "./componentes/navar/TopNavar.jsx";
import { Outlet } from "react-router-dom";

function Principal() {
  return (
    <>
      <div className="row min-vh-100 min-vw-100 p-0 m-0 principal flex-column flex-lg-row">
        <div className="col-2 p-0 d-none d-lg-flex flex-lg-column side border">
          <Sidebar></Sidebar>
        </div>
        <div className=" col-12 d-lg-none top h-auto">
          <TopNavar></TopNavar>
        </div>
        <div
          className="col-lg-10 col-12 flex-grow-1 p-0 main-container d-flex"
          id="principal"
        >
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default Principal;
