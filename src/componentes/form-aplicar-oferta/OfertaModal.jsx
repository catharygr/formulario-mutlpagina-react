/* eslint-disable react/prop-types */

import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { X as Cerrar } from "react-feather";
import { useEffect } from "react";

export default function OfertaModal({ children, handleCerrarMenu }) {
  useEffect(() => {
    const elementoEnfocado = document.activeElement;
    return () => {
      elementoEnfocado?.focus();
    };
  }, []);

  useEffect(() => {
    function handleEscape(e) {
      if (e.code === "Escape") {
        handleCerrarMenu(null);
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [handleCerrarMenu]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="oferta-modal-container">
      <div
        className="oferta-modal-fondo"
        onClick={() => handleCerrarMenu(null)}
      />
      <FocusLock>
        <RemoveScroll>
          <div className="oferta-modal-contenido">
            <div>{children}</div>
            <button
              className="cerrar-modal-btn"
              onClick={() => handleCerrarMenu(null)}
            >
              <Cerrar size={18} /> Cerrar
            </button>
          </div>
        </RemoveScroll>
      </FocusLock>
    </div>
  );
}
