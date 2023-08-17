/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { onValue, ref as refDB, update } from "firebase/database";
import { db } from "../../utilidades/firebase";

import { data } from "../../assets/data";

export default function PasoCuatro({ setPasos, userUID, form, setForm }) {
  const [userData, setUserData] = useState({});
  const [dataID, setDataID] = useState("");
  const [error, setError] = useState("");
  const [ofertaDuplicada, setOfertaDuplicada] = useState(false);

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

  // Función para manejar el enlace de regresar y a adelantar a las ofertas
  function handleEnlace(donde) {
    setForm({
      trabajoSolicitado: [],
      email: "",
      nombre: "",
      telef: "",
      experiencias: "",
      habilidades: "",
      eresResistente: false,
      fileUrl: "",
      fileName: "",
    });
    setPasos(donde);
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

          const duplicada = data.trabajoSolicitado.some((oferta) => {
            return oferta === form.trabajoSolicitado[0];
          });

          setOfertaDuplicada(duplicada);

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
        {/* Oferta duplicada */}
        {ofertaDuplicada && (
          <>
            <h3>
              Ooopp parece que has aplicado a esta oferta de trabajo
              anteriormente.
            </h3>
            <p>Sólo puedes aplicar una vez a cada oferta de trabajo.</p>
            <p>Para continuar elige una de la demás opciones.</p>
            <div className="paso-izquierdo-oferta-duplicada">
              <a
                className="enlace-naranaja"
                onClick={() => handleEnlace("inicio")}
              >
                Regresar a las ofertas
              </a>
              <a
                className="enlace-naranaja"
                onClick={() => handleEnlace("paso-cuatro")}
              >
                Continuar en tu cuenta
              </a>
            </div>
          </>
        )}
        {/* Oferta No duplicada */}
        {!ofertaDuplicada && (
          <>
            <h3>
              ¿Estás seguro 100% que quieres aplicar a esta oferta de trabajo?
            </h3>
            <p>
              Nuestro reclutador se pondrá en contacto contigo si eres
              seleccionado.
            </p>
            <button onClick={handleAplicar} className="btn-green">
              Aplicar a esta oferta
            </button>
          </>
        )}
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
