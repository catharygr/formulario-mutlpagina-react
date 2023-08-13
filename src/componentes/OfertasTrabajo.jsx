import { data } from "../assets/data";
import { auth } from "../utilidades/firebase";
import { onAuthStateChanged } from "firebase/auth";
import TarjetaTrabajo from "./TarjetaTrabajo";
import { useEffect, useState } from "react";
import PasoUno from "./form-aplicar-oferta/PasoUno";
import PasoDos from "./form-aplicar-oferta/PasoDos";
import PasoTres from "./form-aplicar-oferta/PasoTres";
import PasoCuatro from "./form-aplicar-oferta/PasoCuatro";
import Loguear from "./form-aplicar-oferta/Loguear";
import ConfirmarOferta from "./form-aplicar-oferta/ConfirmarOferta";

export default function OfertasTrabajo() {
  // inicio, paso-uno, paso-dos, paso-tres, paso-cuatro, loguear, confirmar-oferta
  const [pasos, setPasos] = useState("inicio");
  const [form, setForm] = useState({
    trabajoSolicitado: [],
    email: "",
    nombre: "",
    telef: "",
    experiencias: "",
    habilidades: "",
    eresResistente: false,
    fileUrl: "",
    fileName: "",
  });
  const [userUID, setUserUID] = useState("");
  const [estaLogueado, setEstaLogueado] = useState(false);

  // Función para manejar el formulario
  function handleForm(e) {
    const { name, value, checked, type } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  const redireccionraLogueado = estaLogueado ? "confirmar-oferta" : "paso-uno";

  // Función para manejar el botón de aplicar oferta
  function handleAplicar(ofertaId) {
    setPasos(redireccionraLogueado);
    setForm({
      ...form,
      trabajoSolicitado: [...form.trabajoSolicitado, ofertaId],
    });
  }

  // Mapeo de las ofertas de trabajo
  const tarjetaTrabajoMapeo = data.map((oferta) => (
    <TarjetaTrabajo
      key={oferta.id}
      oferta={oferta}
      aplicarOferta={handleAplicar}
    />
  ));
  // Scroll to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pasos]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEstaLogueado(true);
        setUserUID(user.uid);
      } else {
        setEstaLogueado(false);
      }
    });
  }, []);

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
        {pasos === "confirmar-oferta" && (
          <ConfirmarOferta
            setPasos={setPasos}
            userUID={userUID}
            setUserUID={setUserUID}
            form={form}
          />
        )}
      </div>
    </main>
  );
}
