/* eslint-disable react/prop-types */

import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

export default function Drawer({ children, handleCerrarMenu }) {
  return (
    <div className="drawer-container">
      {children}
      <div className="drawer-fondo" onClick={handleCerrarMenu} />
      <FocusLock>
        <RemoveScroll>
          <div className="drawer-contenido">{children}</div>
        </RemoveScroll>
      </FocusLock>
    </div>
  );
}
