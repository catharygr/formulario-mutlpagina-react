import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../utilidades/firebase";
import { useState } from "react";

export default function Loguear({ setPasos, setUserUID }) {
  const [btnDesabilitado, setBtnDesabilitado] = useState(true);
  const [errorMensaje, setErrorMensaje] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  console.log(form);

  // Funcion para loguear o registrarse
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChangeForm(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    // Validar que el email y el password no esten vacios
    if (form.email.trim() !== "" && form.password.trim() !== "") {
      setBtnDesabilitado(false);
    } else {
      setBtnDesabilitado(true);
    }
  }

  return (
    <div className="pasos-container">
      <div className="pasos-izquierdo">
        <div>
          <h2>{"Paso uno"}</h2>
          <h3>Loguea en tu cuenta</h3>
        </div>

        <p className="pasos-peque">
          ¿No tienes cuenta? <a href="#">Regístrate</a>
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
            onChange={handleChangeForm}
          />
          <label htmlFor="password">Password:</label>
          <input
            required={true}
            type="password"
            name="password"
            id="password"
            min={8}
            value={form.password}
            onChange={handleChangeForm}
          />

          <button disabled={btnDesabilitado} className="btn-green">
            Continuar
          </button>
          {errorMensaje && <p className="error-msj">{errorMensaje}</p>}
        </form>
      </div>
    </div>
  );
}
