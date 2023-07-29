/* eslint-disable react/prop-types */

import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { X as Cerrar } from "react-feather";

export default function Drawer({ children, handleCerrarMenu }) {
  return (
    <div className="drawer-container">
      <div className="drawer-fondo" onClick={handleCerrarMenu} />
      <FocusLock>
        <RemoveScroll>
          <div className="drawer-contenido">
            <div>{children}</div>
            <button className="cerrar-btn" onClick={handleCerrarMenu}>
              <Cerrar size={18} /> Cerrar
            </button>
          </div>
        </RemoveScroll>
      </FocusLock>
    </div>
  );
}
