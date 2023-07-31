import Acordeon from "./Acordeon";

export default function AbrirCuenta() {
  return (
    <div className="pasos-container">
      <div className="pasos-izquierdo">
        <div>
          <h2>{"Paso uno: (1/3)"}</h2>
          <h3>Abrir la cuenta</h3>
        </div>
        <Acordeon /> Texto acordeón
        <p className="pasos-peque">
          Si tienes cuenta: <a href="#">Logueas aquí</a>
        </p>
      </div>
      <div className="pasos-derecho">
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" placeholder="" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" placeholder="" />

          <label htmlFor="confirmar-password">Confirma Password:</label>
          <input
            type="password"
            name="password"
            id="confirmar-password"
            placeholder=""
          />
          <button className="btn-green">Continuar</button>
        </form>
      </div>
    </div>
  );
}
