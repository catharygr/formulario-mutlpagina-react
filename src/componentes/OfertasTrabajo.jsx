import { data } from "../assets/data";
import TarjetaTrabajo from "./TarjetaTrabajo";

export default function OfertasTrabajo() {
  const tarjetaTrabajoMapeo = data.map((oferta) => (
    <TarjetaTrabajo key={oferta.id} oferta={oferta} />
  ));

  return (
    <main className="ofertas-trabajo-container">
      {/* Título para dispositivos móviles */}
      <div className="ofertas-trabajo-titulo-movil">
        <h1>Ofertas</h1>
      </div>
      {/* Título para pantallas grandes */}
      <div className="ofertas-trabajo-titulo-grande">
        <h1>Ofertas de trabajo</h1>
      </div>
      <div className="ofertas-trabajo-lista">{tarjetaTrabajoMapeo}</div>
    </main>
  );
}
