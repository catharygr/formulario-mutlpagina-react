/* eslint-disable react/prop-types */
export default function TarjetaTrabajo({ oferta }) {
  return (
    <div className="container-querry">
      <div className="ofertas-trabajo-tarjeta">
        <div className="ofertas-trabajo-tarjeta-titulo">
          <h2>{oferta.title}</h2>
        </div>
        <div className="ofertas-trabajo-tarjeta-descripcion">
          <p>
            <span>Descripción: </span>
            {oferta.description}
          </p>
        </div>
        <div className="ofertas-trabajo-tarjeta-salario">
          <p>
            <span>Salary: </span>
            {oferta.salary}
          </p>
        </div>
        <div className="ofertas-trabajo-tarjeta-btn">
          <button>Aplicar a la oferta</button>
        </div>
      </div>
    </div>
  );
}
