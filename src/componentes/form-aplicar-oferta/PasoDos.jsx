/* eslint-disable react/prop-types */
import Acordeon from "./Acordeon";

const dataAcordeon = {
  encabezado: "¿Puedo poner nombre falso?",
  contenido:
    "¡Oh, vaya! Lamentablemente, en nuestra empresa no estamos contratando espías secretos en este momento, así que te recomendaría usar tu nombre real... a menos que tengas una identidad de agente secreto que debamos conocer. \n\n  Usar un nombre falso está estrictamente prohibido, pero si te llamas 'Rockefeller McMillonario', podríamos hacer una excepción. \n\n ¡Prometemos no verificar tu fortuna!¡Claro que puedes usar un nombre falso! Pero debes estar preparado para contestar el teléfono como 'Capitán/ Capitana de la Productividad' cuando te llamemos",
};

export default function PasoDos({ handleForm, form, setPasos }) {
  function handleSubmit(e) {
    e.preventDefault();
    setPasos("paso-tres");
  }
  return (
    <div className="pasos-container">
      <div className="pasos-izquierdo">
        <div>
          <h2>{"Paso dos: (2/3)"}</h2>
          <h3>Datos personales</h3>
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
          <button className="btn-green">Siguiente paso</button>
        </form>
      </div>
    </div>
  );
}
