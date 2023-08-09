/* eslint-disable react/prop-types */

import Acordeon from "./Acordeon";
import { db, refStorage } from "../../utilidades/firebase";
import { useState, useEffect } from "react";
import { ref as refST, uploadBytes, getDownloadURL } from "firebase/storage";
import { push, ref as refDB } from "firebase/database";

const dataAcordeon = {
  encabezado: "Preguntas frecuentes:",
  contenido:
    "¿Eres capaz de prever cuántas veces tu jefe cambiará de opinión en un día soleado? ¡Nuestros meteorólogos necesitan ser igual de flexibles!\n\n ¿Puedes soportar la presión de predecir si lloverá el día del picnic anual de los meteorólogos? Sabemos que incluso las nubes tienen un sentido del humor retorcido.\n\n ¿Eres capaz de mirar fijamente a una pantalla llena de imágenes de satélite sin caer en un trance hipnótico? ¡Necesitamos gente que pueda enfrentarse a la hipnosis meteorológica sin problemas!",
};

export default function PasoTres({
  handleForm,
  form,
  setForm,
  userUID,
  setPasos,
}) {
  const [cvSeleccionado, setCvSeleccionado] = useState(null);
  const [btnDesabilitado, setBtnDesabilitado] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    push(refDB(db, `${userUID}`), form).then(setPasos("paso-cuatro"));
  }

  function handleCvSeleccionado(e) {
    const cv = e.target.files[0];
    setCvSeleccionado(cv);
    console.log(cv);
  }

  useEffect(() => {
    if (!cvSeleccionado) return;

    const userFileRef = refST(refStorage, `/${userUID}`);
    const fileRef = refST(userFileRef, cvSeleccionado?.name);

    uploadBytes(fileRef, cvSeleccionado).then(() => {
      getDownloadURL(fileRef).then((url) => {
        setForm((oldData) => ({
          ...oldData,
          fileUrl: url,
          fileName: cvSeleccionado?.name,
        }));
        setBtnDesabilitado(false);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cvSeleccionado]);

  return (
    <div className="pasos-container">
      <div className="pasos-izquierdo">
        <div>
          <h2>{"Paso tres: (3/4)"}</h2>
          <h3>Tus experiencias de trabajo</h3>
        </div>
        <Acordeon
          encabezado={dataAcordeon.encabezado}
          contenido={dataAcordeon.contenido}
        />
      </div>
      <div className="pasos-derecho">
        <form onSubmit={handleSubmit}>
          <label htmlFor="habilidades">Habilidades:</label>
          <textarea
            name="habilidades"
            id="habilidades"
            value={form.habilidades}
            onChange={handleForm}
          />
          <label htmlFor="experiencias">Años de experiencias :</label>
          <input
            required
            type="number"
            name="experiencias"
            id="experiencias"
            value={form.experiencias}
            onChange={handleForm}
          />

          <label htmlFor="cv">Cargar CV en pdf</label>
          <input
            required
            id="cv"
            accept="application/pdf"
            type="file"
            name="cv"
            onChange={handleCvSeleccionado}
          />

          <button disabled={btnDesabilitado} className="btn-green">
            Finalizar aplicación
          </button>
        </form>
      </div>
    </div>
  );
}
