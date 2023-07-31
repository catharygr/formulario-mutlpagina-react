import Acordeon from "./Acordeon";

const dataAcordeon = {
  encabezado: "Explicación de la oferta",
  contenido:
    "No vamos a recopilar ninguno de tus datos personales antes de que crees tu cuenta. ¿Puedes preguntar por qué? Bueno, eso te permitirá poder eliminar todos tus datos personales después de que el proceso de selección haya terminado, ya sea exitoso para ambas partes o no. No compartimos esos datos con nadie más que nuestro reclutador. Él es el único autorizado para revisarlos. Así que, regístrate y veamos si podemos trabajar juntos y al final hay un gran botón rojo en tu cuenta que eliminará tus datos si así lo deseas.",
};

export default function AbrirCuenta() {
  return (
    <div className="pasos-container">
      <div className="pasos-izquierdo">
        <div>
          <h2>{"Paso uno: (1/3)"}</h2>
          <h3>Abrir la cuenta</h3>
        </div>
        <Acordeon
          encabezado={dataAcordeon.encabezado}
          contenido={dataAcordeon.contenido}
        />
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
