import { useBienes } from "./useBienes";
import { AuthContext } from "../../auth/AuthContex";
import useApi from "../../hooks/useAPI";
import { useEffect, useState } from "react";

function Tabla() {
  const { get } = useApi();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get("http://127.0.0.1:8080/api/bienes");
        setData(response);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        className="container d-flex table-responsive align-items-center"
        id="tabla_bienes"
      >
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
              <tr>
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
    </>
  );
}

export default Tabla;
