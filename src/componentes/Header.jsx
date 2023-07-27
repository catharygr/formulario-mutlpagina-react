import { Menu } from "react-feather";
import { Umbrella } from "react-feather";

// import NavBar from "./NavBar";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <Umbrella size={30} color="var(--color-green)" strokeWidth={3} />
          <h1>Weather App</h1>
        </div>
        <div className="header-menu">
          <Menu size={30} />
          {/* <NavBar /> */}
        </div>
      </div>
    </header>
  );
}
