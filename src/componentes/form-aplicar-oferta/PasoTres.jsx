/* eslint-disable react/prop-types */
import Acordeon from "./Acordeon";

const dataAcordeon = {
  encabezado: "Preguntas frecuentes:",
  contenido:
    "¿Eres capaz de prever cuántas veces tu jefe cambiará de opinión en un día soleado? ¡Nuestros meteorólogos necesitan ser igual de flexibles!\n\n ¿Puedes soportar la presión de predecir si lloverá el día del picnic anual de los meteorólogos? Sabemos que incluso las nubes tienen un sentido del humor retorcido.\n\n ¿Eres capaz de mirar fijamente a una pantalla llena de imágenes de satélite sin caer en un trance hipnótico? ¡Necesitamos gente que pueda enfrentarse a la hipnosis meteorológica sin problemas!",
};

export default function PasoTres({ handleForm, form }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  console.log(form);
  return (
    <div className="pasos-container">
      <div className="pasos-izquierdo">
        <div>
          <h2>{"Paso dos: (3/3)"}</h2>
          <h3>Tus experiencias de trabajo</h3>
        </div>
        <Acordeon
          encabezado={dataAcordeon.encabezado}
          contenido={dataAcordeon.contenido}
        />
      </div>
      <div className="pasos-derecho">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            required
            type="text"
            name="nombre"
            id="nombre"
            value={form.nombre}
            onChange={handleForm}
          />
          <label htmlFor="telef">Teléfono:</label>
          <input
            required
            type="number"
            name="telef"
            id="telef"
            value={form.telef}
            onChange={handleForm}
          />
          <div className="eres-resistente">
            <label htmlFor="marcado">
              ¿Eres resistente al agua{" "}
              <span style={{ fontSize: "20px" }}>🌧️</span>?
            </label>
            <input
              required
              id="marcado"
              type="checkbox"
              name="eresResistente"
              checked={form.eresResistente}
              onChange={handleForm}
            />
          </div>
          <button className="btn-green">Crear cuenta</button>
        </form>
      </div>
    </div>
  );
}
