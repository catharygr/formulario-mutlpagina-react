import { data } from "../assets/data";

export default function OfertasTrabajo() {
  return (
    <main className="ofertas-trabajo-container">
      <div className="ofertas-trabajo-titulo">
        <h1>Ofertas de trabajo</h1>
      </div>
      <div className="ofertas-trabajo-lista">
        {data.map((oferta) => (
          <div className="container-querry" key={oferta.id}>
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
        ))}
      </div>
    </main>
  );
}
