import useApi from "../../hooks/useAPI";
import { useEffect, useState } from "react";
import AddBienModal from "./AddBienModal";

function Tabla() {
  const { get } = useApi();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get("http://127.0.0.1:8080/api/bienes");
        setData(response);
        console.log(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid d-flex flex-column " id="tabla_bienes">
        <div className=" container px-5 ">
          <div className="row">
            <h5 className="col-12 align-self-start">Bienes</h5>
            <button
              className="col-4 offset-8 btn btn-success me-0 "
              data-bs-toggle="modal"
              data-bs-target="#add-bien"
            >
              Agregar bien
            </button>
          </div>
        </div>

        <AddBienModal></AddBienModal>

        <div className="table-responsive container d-flex align-items-center px-5 pt-5">
          <table className="table table-light table-striped table-hover text-center">
            <thead>
              <tr>
                <th scope="col">No. Inventario</th>
                <th scope="col">Descripcion</th>
                <th scope="col" className="hidden-column">
                  Depositario
                </th>
                <th scope="col">Estado</th>
                <th scope="col " className="hidden-column">
                  Etiqueta
                </th>
                <th scope="col">Ubicacion</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((bien) => (
                <tr key={bien.id}>
                  <td>{bien.id}</td>
                  <td>{bien.descripcion}</td>
                  <td>{bien.depositario.nombre}</td>
                  <td>{bien.estado}</td>
                  <td>{bien.etiqueta}</td>
                  <td>{bien.ubicacion.lugar}</td>
                  <td>
                    <div className="row justify-content-center">
                      <a className="col p-0">
                        <i className="bi bi-trash3"></i>
                      </a>
                      <a className="col p-0">
                        <i className="bi bi-pencil"></i>
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Tabla;
