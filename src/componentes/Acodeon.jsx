function Acordeon({ etiqueta, id1, id2, child, icon }) {
  const id_1 = "#" + id1;
  const id_2 = "#" + id2;
  return (
    <>
      <div className="accordion rounded-2" id={id1}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button p-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={id_2}
            >
              <p className=" m-0 d-none d-md-block">{etiqueta}</p>
              {icon}
            </button>
          </h2>
          <div
            id={id2}
            className="accordion-collapse collapse rounded-2"
            data-bs-parent={id_1}
          >
            <div className="list-group list-group-flush">{child}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Acordeon;
