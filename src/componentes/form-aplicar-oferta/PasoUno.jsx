/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword } from "firebase/auth";
import Acordeon from "./Acordeon";
import { auth } from "../../utilidades/firebase";
import { useState } from "react";

const dataAcordeon = {
  encabezado: "¿Por qué crear otra cuenta?",
  contenido:
    "No vamos a recopilar ninguno de tus datos personales antes de que crees tu cuenta. \n\n ¿Puedes preguntar por qué? Bueno, eso te permitirá poder eliminar todos tus datos personales después de que el proceso de selección haya terminado, ya sea exitoso para ambas partes o no. No compartimos esos datos con nadie más que nuestro reclutador. \n\n Él es el único autorizado para revisarlos. Así que, regístrate y veamos si podemos trabajar juntos y al final hay un gran botón rojo en tu cuenta que eliminará tus datos si así lo deseas.",
};

export default function PasoUno({ handleForm, form, setPasos }) {
  const [repetirPassword, setRepetirPassword] = useState("");
  const [btnDesabilitado, setBtnDesabilitado] = useState(true);
  console.log(form);

  // Funcion para loguear o registrarse
  function handleSubmit(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setPasos("paso-dos");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
    return;
  }

  if

  return (
    <div className="pasos-container">
      <div className="pasos-izquierdo">
        <div>
          <h2>{"Paso uno: (1/3)"}</h2>
          <h3>Abrir cuenta</h3>
        </div>
        <Acordeon
          encabezado={dataAcordeon.encabezado}
          contenido={dataAcordeon.contenido}
        />
        <p className="pasos-peque">
          Si tienes cuenta: <a href="#">Loguea aquí</a>
        </p>
      </div>
      <div className="pasos-derecho">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            required={true}
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleForm}
          />
          <label htmlFor="password">Password:</label>
          <input
            required={true}
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleForm}
          />
          <label htmlFor="confirmar-password">Confirmar password:</label>
          <input
            required={true}
            type="password"
            name="password"
            id="confirmar-password"
            value={repetirPassword}
            onChange={(e) => setRepetirPassword(e.target.value)}
          />

          <button disabled={btnDesabilitado} className="btn-green">
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
}
