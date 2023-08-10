import { data } from "../assets/data";
import TarjetaTrabajo from "./TarjetaTrabajo";
import { useState } from "react";
import PasoUno from "./form-aplicar-oferta/PasoUno";
import PasoDos from "./form-aplicar-oferta/PasoDos";
import PasoTres from "./form-aplicar-oferta/PasoTres";
import PasoCuatro from "./form-aplicar-oferta/PasoCuatro";
import Loguear from "./form-aplicar-oferta/Loguear";

export default function OfertasTrabajo() {
  // inicio, paso-uno, paso-dos, paso-tres, paso-cuatro, loguear
  const [pasos, setPasos] = useState("loguear");
  const [form, setForm] = useState({
    trabajoSolicitado: [],
    email: "",
    password: "",
    nombre: "",
    telef: "",
    experiencias: "",
    habilidades: "",
    eresResistente: false,
    fileUrl: "",
    fileName: "",
  });
  const [userUID, setUserUID] = useState("");

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
            setUserUID={setUserUID}
          />
        )}
        {pasos === "paso-dos" && (
          <PasoDos handleForm={handleForm} form={form} setPasos={setPasos} />
        )}
        {pasos === "paso-tres" && (
          <PasoTres
            handleForm={handleForm}
            form={form}
            userUID={userUID}
            setForm={setForm}
            setPasos={setPasos}
          />
        )}
        {pasos === "paso-cuatro" && (
          <PasoCuatro
            setPasos={setPasos}
            userUID={userUID}
            setUserUID={setUserUID}
            form={form}
            setForm={setForm}
          />
        )}
        {pasos === "loguear" && (
          <Loguear
            setPasos={setPasos}
            userUID={userUID}
            setUserUID={setUserUID}
          />
        )}
      </div>
    </main>
  );
}
