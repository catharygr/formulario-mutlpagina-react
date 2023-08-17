/* eslint-disable react/prop-types */
import { Menu } from "react-feather";
import { Umbrella } from "react-feather";
import useToggle from "../utilidades/useToggle";
import Drawer from "./Drawer";

export default function Header({ setPasos }) {
  const [esMenuAbierto, esSetMenuAbierto] = useToggle(false);
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <Umbrella size={25} color="var(--color-green)" strokeWidth={3} />
          <a className="enlace-logo" onClick={() => setPasos("inicio")}>
            Weather App
          </a>
        </div>
        <nav className="header-menu">
          <button onClick={esSetMenuAbierto} className="menu-btn">
            <Menu size={25} />
          </button>
          {esMenuAbierto && (
            <Drawer handleCerrarMenu={esSetMenuAbierto}>
              <ul className="nav-lista">
                <li>
                  <a href="https://bubulazi.com">Mi portafolio</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/hyuik">LinkedIn</a>
                </li>
                <li>
                  <a href="https://bubulazi.com/#form">Contacto</a>
                </li>
                <li>
                  <a href="https://github.com/catharygr">GitHub</a>
                </li>
                <li>
                  <p className="acerca-app">
                    Esta aplicación sirve como un proyecto de ejercicio con el
                    propósito de construir un formulario de varias páginas con
                    autenticación en Firebase, almacenamiento y la integración
                    de una base de datos como infraestructura backend.
                    Básicamente, simula el proceso de solicitud para una oferta
                    de trabajo.
                  </p>
                </li>
              </ul>
            </Drawer>
          )}
        </nav>
      </div>
    </header>
  );
}
