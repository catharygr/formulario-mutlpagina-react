import { data } from "../assets/data";
import TarjetaTrabajo from "./TarjetaTrabajo";
import useToggle from "../utilidades/useToggle";
import { useState } from "react";
import AbrirCuenta from "./form-aplicar-oferta/AbrirCuenta";

export default function OfertasTrabajo() {
  const [estaAplicando, setEstaAplicando] = useToggle(false);
  const [form, setForm] = useState({
    trabajoSolicitado: [],
    email: "",
    password: "",
  });

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleAplicar(ofertaId) {
    setEstaAplicando();
    setForm({
      ...form,
      trabajoSolicitado: [...form.trabajoSolicitado, ofertaId],
    });
  }
  console.log(form);

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
        {estaAplicando ? <h1>Vamos...!</h1> : <h1>Ofertas</h1>}
      </div>
      {/* Título para pantallas grandes */}
      <div className="ofertas-trabajo-titulo-grande">
        {estaAplicando ? <h1>Vamos...!</h1> : <h1>Ofertas de trabajo</h1>}
      </div>
      <div className="ofertas-trabajo-lista">
        {!estaAplicando ? (
          tarjetaTrabajoMapeo
        ) : (
          <AbrirCuenta handleForm={handleForm} form={form} />
        )}
      </div>
    </main>
  );
}
