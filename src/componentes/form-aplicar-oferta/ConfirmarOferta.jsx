/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { onValue, ref as refDB, update } from "firebase/database";
import { db } from "../../utilidades/firebase";

import { data } from "../../assets/data";

export default function PasoCuatro({ setPasos, userUID, form }) {
  const [userData, setUserData] = useState({});
  const [dataID, setDataID] = useState("");
  const [error, setError] = useState("");

  const findOferta = data.find((oferta) => {
    return oferta.id === form.trabajoSolicitado[0];
  });

  // Función para manejar el botón de aplicar oferta
  function handleAplicar() {
    const nuevasOfertas = [
      ...userData.trabajoSolicitado,
      ...form.trabajoSolicitado,
    ];
    const nuevaData = { ...userData, trabajoSolicitado: nuevasOfertas };
    update(refDB(db, `/${userUID}/${dataID}`), nuevaData)
      .then(setPasos("paso-cuatro"))
      .catch((error) => {
        setError(error.message);
      });
  }

  // UseEffect para traer los datos del usuario
  useEffect(() => {
    const cancelOnValue = onValue(
      refDB(db, `/${userUID}`),
      function (snapshot) {
        if (snapshot.val()) {
          const todosData = Object.entries(snapshot.val());
          const data = todosData[0][1];
          const dataID = todosData[0][0];
          setDataID(dataID);
          setUserData(data);
        } else {
          setUserData({});
        }
      }
    );
    return cancelOnValue;
  }, [userUID]);

  return (
    <div className="pasos-container">
      <div className="pasos-izquierdo">
        <h2>{"Paso tres: 3/4"}</h2>
        <h3>
          ¿Estás seguro 100% que quieres aplicar a esta oferta de trabajo?
        </h3>
        <p>
          Nuestro reclutador se pondrá en contacto contigo si eres seleccionado.
        </p>
        <button onClick={handleAplicar} className="btn-green">
          Aplicar a esta oferta
        </button>
        {error && <p className="error-msj">{error}</p>}
      </div>
      <div className="pasos-derecho">
        <p className="usuario-data-titulo">ID de Oferta:</p>
        <p className="usuario-data-value">{findOferta?.id}</p>
        <p className="usuario-data-titulo">Titulo:</p>
        <p className="usuario-data-value">{findOferta?.title}</p>
        <p className="usuario-data-titulo">Descripción:</p>
        <p className="usuario-data-value">{findOferta?.description}</p>
        <p className="usuario-data-titulo">Salario:</p>
        <p className="usuario-data-value">{findOferta?.salary}</p>
      </div>
    </div>
  );
}
