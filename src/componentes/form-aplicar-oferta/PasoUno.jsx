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

export default function PasoUno({ handleForm, form, setPasos, setUserUID }) {
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [btnDesabilitado, setBtnDesabilitado] = useState(true);
  const [errorMensaje, setErrorMensaje] = useState("");

  // Funcion para  registrarse
  function handleSubmit(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, form.email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserUID(user.uid);
        setPasos("paso-dos");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMensaje(errorMessage);
      });
    return;
  }

  if (password === repetirPassword && btnDesabilitado) {
    if (form.email && password && repetirPassword) {
      setBtnDesabilitado(false);
    }
  }
  if (password !== repetirPassword && !btnDesabilitado) {
    setBtnDesabilitado(true);
  }

  return (
    <div className="pasos-container">
      <div className="pasos-izquierdo">
        <div>
          <h2>{"Paso uno: (1/4)"}</h2>
          <h3>Registrarse</h3>
        </div>
        <Acordeon
          encabezado={dataAcordeon.encabezado}
          contenido={dataAcordeon.contenido}
        />
        <p className="pasos-peque">
          Si tienes cuenta:{" "}
          <button className="btn-link" onClick={() => setPasos("loguear")}>
            Loguear aquí
          </button>
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
          <label htmlFor="password">
            Password: <span className="label-span">Mínimo 8 caracteres</span>
          </label>
          <input
            required={true}
            type="password"
            name="password"
            id="password"
            min={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirmar-password">
            Confirmar password:{" "}
            {repetirPassword && (
              <span
                className="label-span"
                style={{ color: "var(--color-orange)" }}
              >
                {password !== repetirPassword || !repetirPassword
                  ? "Las contraseñas no coinciden"
                  : "Las contraseñas coinciden"}
              </span>
            )}
          </label>
          <input
            required={true}
            type="password"
            name="password"
            id="confirmar-password"
            min={8}
            value={repetirPassword}
            onChange={(e) => setRepetirPassword(e.target.value)}
          />

          <button disabled={btnDesabilitado} className="btn-green">
            Abrir cuenta
          </button>
          {errorMensaje && <p className="error-msj">{errorMensaje}</p>}
        </form>
      </div>
    </div>
  );
}
