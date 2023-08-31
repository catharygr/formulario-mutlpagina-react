/* eslint-disable react/prop-types */

import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { X as Cerrar } from "react-feather";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Drawer({ children, handleCerrarMenu }) {
  useEffect(() => {
    const elementoEnfocado = document.activeElement;
    return () => {
      elementoEnfocado?.focus();
    };
  }, []);

  useEffect(() => {
    function handleEscape(e) {
      if (e.code === "Escape") {
        handleCerrarMenu();
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [handleCerrarMenu]); // eslint-disable-line react-hooks/exhaustive-deps

  return createPortal(
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
    </div>,
    document.querySelector("#drawer")
  );
}
