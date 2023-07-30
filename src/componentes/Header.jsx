import { Menu } from "react-feather";
import { Umbrella } from "react-feather";
import useToggle from "../utilidades/useToggle";
import Drawer from "./Drawer";

export default function Header() {
  const [esMenuAbierto, esSetMenuAbierto] = useToggle(false);
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <Umbrella size={25} color="var(--color-green)" strokeWidth={3} />
          <p>Weather App</p>
        </div>
        <nav className="header-menu">
          <button onClick={esSetMenuAbierto} className="menu-btn">
            <Menu size={25} />
          </button>
          {esMenuAbierto && (
            <Drawer handleCerrarMenu={esSetMenuAbierto}>
              <ul className="nav-lista">
                <li>
                  <a href="">Mi portafolio</a>
                </li>
                <li>
                  <a href="">LinkedIn</a>
                </li>
                <li>
                  <a href="">Contactos</a>
                </li>
                <li>
                  <p></p>
                </li>
              </ul>
            </Drawer>
          )}
        </nav>
      </div>
    </header>
  );
}
