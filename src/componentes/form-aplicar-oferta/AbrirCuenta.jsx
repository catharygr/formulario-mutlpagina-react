export default function AbrirCuenta() {
  return (
    <div>
      <div>
        q<h2>{"Paso uno: (1/3)"}</h2>
        <h3>Abrir la cuenta</h3>
        <p>Texto acordeón</p>
        <p>
          {" "}
          Si ya tienes la cuenta <a href="#">logueas aquí</a>
        </p>
      </div>
      <div>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder=""></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder=""
          ></input>

          <label htmlFor="confirmar-password">Confirma Password</label>
          <input
            type="password"
            name="password"
            id="confirmar-password"
            placeholder=""
          >
            {" "}
          </input>
          <button>Continuar</button>
        </form>
      </div>
    </div>
  );
}
