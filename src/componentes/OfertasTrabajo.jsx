import { data } from "../assets/data";

export default function OfertasTrabajo() {
  return (
    <main className="ofertas-trabajo-container">
      <div className="ofertas-trabajo-titulo">
        <h1>Ofertas de trabajo</h1>
      </div>
      <div className="ofertas-trabajo-lista">
        {data.map((oferta) => (
          <div className="ofertas-trabajo-item" key={oferta.id}>
            <div className="ofertas-trabajo-item-titulo">
              <h2>{oferta.title}</h2>
            </div>
            <div className="ofertas-trabajo-item-descripcion">
              <h2>{oferta.description}</h2>
            </div>
            <div className="ofertas-trabajo-item-salario">
              <p>{oferta.salary}</p>
            </div>
            <div className="ofertas-trabajo-item-link">
              <button>Aplicar</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
