import Card from "./Card";
function Inicio() {
  return (
    <>
      <div
        className="accordion accordion-flush container-fluid p-0 m-0"
        id="accordionPanelsStayOpenExample"
      >
        <div>
          <div>sumary</div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button bg-info"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
            >
              Bienes del area
            </button>
          </h2>

          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show container-fluid"
          >
            <div className="row m-0 py-5 justify-content-evenly row-gap-5">
              <div className="col card-container">
                <Card
                  titulo="Estados"
                  icon=<i className="bi bi-geo-alt "></i>
                />
              </div>
              <div className="col card-container">
                <Card
                  titulo="Depositarios"
                  icon=<i className="bi bi-geo-alt "></i>
                />
              </div>
              <div className="col card-container">
                <Card
                  titulo="Ubicaciones"
                  icon=<i className="bi bi-geo-alt "></i>
                />
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-info"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Bienes del depositario
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse show"
          >
            <div className="container-fluid row m-0 py-5 justify-content-evenly">
              <div className="col card-container">
                <Card
                  titulo="Estados"
                  icon=<i className="bi bi-geo-alt "></i>
                />
              </div>
              <div className="col card-container">
                <Card
                  titulo="Ubicaciones "
                  icon=<i className="bi bi-geo-alt "></i>
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;
