import { Menu } from "react-feather";
import { Umbrella } from "react-feather";

import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-logo">
        <Umbrella size={30} />
        <h1>Weather App</h1>
      </div>
      <Menu size={30} />
      {/* <NavBar /> */}
    </header>
  );
}
