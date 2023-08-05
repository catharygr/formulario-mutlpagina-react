import { data } from "../assets/data";
import TarjetaTrabajo from "./TarjetaTrabajo";
import { useState } from "react";
import PasoUno from "./form-aplicar-oferta/PasoUno";
import PasoDos from "./form-aplicar-oferta/PasoDos";
import PasoTres from "./form-aplicar-oferta/PasoTres";

export default function OfertasTrabajo() {
  // inicio, paso-uno, paso-dos, paso-tres
  const [pasos, setPasos] = useState("paso-dos");
  const [form, setForm] = useState({
    trabajoSolicitado: [],
    email: "",
    password: "",
    nombre: "",
    telef: "",
    eresResistente: false,
  });
  const [useUD, setUseUD] = useState("");

  function handleForm(e) {
    const { name, value, checked, type } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleAplicar(ofertaId) {
    setPasos("paso-uno");
    setForm({
      ...form,
      trabajoSolicitado: [...form.trabajoSolicitado, ofertaId],
    });
  }

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
        {pasos === "inicio" ? <h1>Ofertas</h1> : <h1>Vamos...!</h1>}
      </div>
      {/* Título para pantallas grandes */}
      <div className="ofertas-trabajo-titulo-grande">
        {pasos === "inicio" ? <h1>Ofertas de trabajo</h1> : <h1>Vamos...!</h1>}
      </div>
      <div className="ofertas-trabajo-lista">
        {pasos === "inicio" && tarjetaTrabajoMapeo}
        {pasos === "paso-uno" && (
          <PasoUno
            handleForm={handleForm}
            form={form}
            setPasos={setPasos}
            setUseUD={setUseUD}
          />
        )}
        {pasos === "paso-dos" && (
          <PasoDos handleForm={handleForm} form={form} setPasos={setPasos} />
        )}
        {pasos === "paso-tres" && (
          <PasoTres handleForm={handleForm} form={form} />
        )}
      </div>
    </main>
  );
}
