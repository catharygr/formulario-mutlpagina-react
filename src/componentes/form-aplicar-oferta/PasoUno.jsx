/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Acordeon from "./Acordeon";
import { auth } from "../../utilidades/firebase";
import { useRef, useState, useId } from "react";

const dataAcordeon = {
  encabezado: "¿Por qué crear otra cuenta?",
  contenido:
    "No vamos a recopilar ninguno de tus datos personales antes de que crees tu cuenta. \n\n ¿Puedes preguntar por qué? Bueno, eso te permitirá poder eliminar todos tus datos personales después de que el proceso de selección haya terminado, ya sea exitoso para ambas partes o no. No compartimos esos datos con nadie más que nuestro reclutador. \n\n Él es el único autorizado para revisarlos. Así que, regístrate y veamos si podemos trabajar juntos y al final hay un gran botón rojo en tu cuenta que eliminará tus datos si así lo deseas.",
};

export default function PasoUno({ handleForm, form, setPasos, setForm }) {
  const [btnDesabilitado, setBtnDesabilitado] = useState(true);
  const [estaRegistrado, setEstaRegistrado] = useState(true);
  const [repetirPassword, setRepetirPassword] = useState("");
  const [repetirPasswordString, setRepetirPasswordString] = useState("");
  const formRef = useRef();
  const id = useId();

  //  Funcion para limpiar el formulario
  function limpiarFormulario() {
    setForm({
      email: "",
      password: "",
    });
    setRepetirPassword("");
    setRepetirPasswordString("");
  }

  // Funcion para loguear o registrarse
  function handleSubmit(e) {
    e.preventDefault();
    formRef.current.disabled = true;

    if (!estaRegistrado) {
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
          formRef.current.disabled = false;
          limpiarFormulario();
          setBtnDesabilitado(false);
          console.log(errorCode, errorMessage);
          // ..
        });
      return;
    }

    signInWithEmailAndPassword(auth, form.email, form.password)
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
        formRef.current.disabled = false;
        limpiarFormulario();
        setBtnDesabilitado(false);
        console.log(errorCode, errorMessage);
      });
  }

  // Funcion para chequear que las contraeñas sean iguales
  function handleConfirmarPassword(e) {
    const confirmarPassword = e.target.value;

    if (confirmarPassword !== form.password) {
      formRef.current.disabled = true;
      setRepetirPasswordString("Las contraseñas no coinciden");
      setBtnDesabilitado(true);
    } else if (confirmarPassword === form.password) {
      formRef.current.disabled = false;
      setRepetirPasswordString("Coinciden");
      setBtnDesabilitado(false);
    }
    setRepetirPassword(confirmarPassword);
  }

  // Funcion para cambiar entre loguear o registrar usuario
  function handleRegistrarse() {
    setEstaRegistrado(!estaRegistrado);
    limpiarFormulario();
  }

  return (
    <div className="pasos-container">
      <div className="pasos-izquierdo">
        <div>
          <h2>{"Paso uno: (1/3)"}</h2>
          <h3>{estaRegistrado ? "Abrir cuenta" : "Regístrate"}</h3>
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
          <label htmlFor={`${id}-email`}>Email:</label>
          <input
            required={true}
            type="email"
            name="email"
            id={`${id}-email`}
            value={form.email}
            onChange={handleForm}
          />
          <label htmlFor={`${id}-password`}>Password:</label>
          <input
            required={true}
            type="password"
            name="password"
            minLength={8}
            id={`${id}-password`}
            value={form.password}
            onChange={handleForm}
          />

          {!estaRegistrado && (
            <>
              <label htmlFor={`${id}-confirmar-password`}>
                Repetir contraseña:{" "}
                {
                  <span style={{ color: "var(--color-acentado)" }}>
                    {repetirPasswordString}
                  </span>
                }
              </label>
              <input
                required={true}
                type="password"
                name="password"
                minLength={8}
                id={`${id}-confirmar-password`}
                value={repetirPassword}
                onChange={handleConfirmarPassword}
              />
            </>
          )}

          <button
            disabled={btnDesabilitado}
            ref={formRef}
            onClick={handleRegistrarse}
            className="btn-green"
          >
            {estaRegistrado
              ? "Si no tienes cuenta, regístrate..."
              : "Ya tienes cuenta, loguea..."}
          </button>
        </form>
      </div>
    </div>
  );
}
