/* eslint-disable react/prop-types */
import Acordeon from "./Acordeon";

const dataAcordeon = {
  encabezado: "¿Puedo poner nombre falso?",
  contenido:
    "¡Oh, vaya! Lamentablemente, en nuestra empresa no estamos contratando espías secretos en este momento, así que te recomendaría usar tu nombre real... a menos que tengas una identidad de agente secreto que debamos conocer. \n\n  Usar un nombre falso está estrictamente prohibido, pero si te llamas 'Rockefeller McMillonario', podríamos hacer una excepción. \n\n ¡Prometemos no verificar tu fortuna!¡Claro que puedes usar un nombre falso! Pero debes estar preparado para contestar el teléfono como 'Capitán/ Capitana de la Productividad' cuando te llamemos",
};

export default function PasoUno({ handleForm, form }) {
  return (
    <div className="pasos-container">
      <div className="pasos-izquierdo">
        <div>
          <h2>{"Paso uno: (1/2)"}</h2>
          <h3>Abrir cuenta</h3>
        </div>
        <Acordeon
          encabezado={dataAcordeon.encabezado}
          contenido={dataAcordeon.contenido}
        />
      </div>
      <div className="pasos-derecho">
        <form>
          <label htmlFor="email">Email:</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleForm}
          />
          <label htmlFor="password">Password:</label>
          <input
            required
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleForm}
          />

          <label htmlFor="confirmar-password">Confirma Password:</label>
          <input
            required
            type="password"
            name="password"
            id="confirmar-password"
          />
          <button className="btn-green">Crear cuenta</button>
        </form>
      </div>
    </div>
  );
}
