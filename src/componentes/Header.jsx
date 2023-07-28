import { Menu } from "react-feather";
import { Umbrella } from "react-feather";
import { useToggle } from "../utilidades/useToggle";
import Drawer from "./Drawer";

export default function Header() {
  const [isMenuAbierto, isSetMenuAbierto] = useToggle(false);
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <Umbrella size={30} color="var(--color-green)" strokeWidth={3} />
          <p>Weather App</p>
        </div>
        <div className="header-menu">
          <button className="menu-btn">
            <Menu size={30} />
          </button>
          {isMenuAbierto && (
            <Drawer>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Gallery</a>
                </li>
                <li>
                  <a href="">Photographers</a>
                </li>
                <li>
                  <a href="">Submit Work</a>
                </li>
              </ul>
            </Drawer>
          )}
        </div>
      </div>
    </header>
  );
}
