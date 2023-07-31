import { data } from "../assets/data";
import TarjetaTrabajo from "./TarjetaTrabajo";
import useToggle from "../utilidades/useToggle";
import { useState } from "react";

export default function OfertasTrabajo() {
  const [estaAplicando, setEstaAplicando] = useToggle(false);
  const [idOfertas, setIdOfertas] = useState("");

  function handleAplicar(ofertaId) {
    setEstaAplicando();
    setIdOfertas(ofertaId);
  }
  console.log(idOfertas);

  const tarjetaTrabajoMapeo = data.map((oferta) => (
    <TarjetaTrabajo
      key={oferta.id}
      oferta={oferta}
      aplicarOferta={handleAplicar}
    />
  ));

  return (
    <main className="ofertas-trabajo-container">
      {/* Título para dispositivos móviles */}
      <div className="ofertas-trabajo-titulo-movil">
        {estaAplicando ? <h1>Comencemos!</h1> : <h1>Ofertas</h1>}
      </div>
      {/* Título para pantallas grandes */}
      <div className="ofertas-trabajo-titulo-grande">
        {estaAplicando ? <h1>Comencemos!</h1> : <h1>Ofertas de trabajo</h1>}
      </div>
      <div className="ofertas-trabajo-lista">
        {!estaAplicando && tarjetaTrabajoMapeo}
      </div>
    </main>
  );
}
