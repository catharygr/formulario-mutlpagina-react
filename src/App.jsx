import Header from "./componentes/Header";
import OfertasTrabajo from "./componentes/OfertasTrabajo";
import FooterJob from "./componentes/FooterJob";
import { useState } from "react";

function App() {
  const [pasos, setPasos] = useState("inicio");

  return (
    <div className="app-container">
      <Header pasos={pasos} setPasos={setPasos} />
      <OfertasTrabajo pasos={pasos} setPasos={setPasos} />
      <FooterJob />
    </div>
  );
}

export default App;
