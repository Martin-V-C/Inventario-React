import { Link } from "react-router-dom";

function card({ icon, titulo }) {
  return (
    <>
      <div className="card">
        <div className="card-body px-2  d-flex flex-column flex-sm-row align-items-center justify-content-evenly fs-1">
          <h6 className="card-title m-0">{titulo}</h6>
          {icon}
        </div>
        <ul className="list-group list-group-flush">
          <Link to="bienes" className=" text-decoration-none">
            <li className="list-group-item bg-primary rounded-2 bg-gradient">
              Laboratorio W
            </li>
          </Link>
          <Link to="bienes" className=" text-decoration-none">
            <li className="list-group-item bg-primary rounded-2 bg-gradient">
              Laboratorio G
            </li>
          </Link>
          <Link to="bienes" className=" text-decoration-none">
            <li className="list-group-item bg-primary rounded-2 bg-gradient">
              No encontrados
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default card;
