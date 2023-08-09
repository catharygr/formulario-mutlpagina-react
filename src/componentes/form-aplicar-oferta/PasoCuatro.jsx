/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { onValue, ref as refDB } from "firebase/database";
import { db } from "../../utilidades/firebase";

export default function PasoCuatro({ setPasos, userUID }) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const cancelOnValue = onValue(
      refDB(db, `/${userUID}`),
      function (snapshot) {
        if (snapshot.val()) {
          const todosData = Object.entries(snapshot.val());
          const data = todosData[0][1];
          setUserData(data);
        } else {
          setUserData({});
        }
      }
    );
    return cancelOnValue;
  }, [userUID]);

  console.log(userData);

  return (
    <div className="pasos-container">
      <div className="pasos-izquierdo">
        <h2>{"Aplicación a la oferta: (4/4)"}</h2>
        <h3> Has aplicado correctamente a la oferta. Suerte!</h3>
        <p>
          El reclutador se pondrá en contacto contigo nada más que deje de
          llover fuerte y pueda usar una sombrilla ya que la inundación no le
          deja conducir hasta la oficina. Mientras tanto puedes ir a la playa...
        </p>
      </div>
      <div className="pasos-derecho">
        <p className="usuario-data-titulo">Ofertas solicitadas:</p>
        <p className="usuario-data-value">{userData?.trabajoSolicitado}</p>
        <p className="usuario-data-titulo">Nombre:</p>
        <p className="usuario-data-value">{userData?.nombre}</p>
        <p className="usuario-data-titulo">Email:</p>
        <p className="usuario-data-value">{userData?.email}</p>
        <p className="usuario-data-titulo">Telef:</p>
        <p className="usuario-data-value">{userData?.telef}</p>
        <p className="usuario-data-titulo">Experiencias:</p>
        <p className="usuario-data-value">{userData?.experiencias}</p>
        <p className="usuario-data-titulo">CV:</p>
        <p className="usuario-data-value">{userData?.fileName}</p>
        <p className="usuario-data-titulo">Password:</p>
        <p className="usuario-data-value">{userData?.password}</p>
        <p className="usuario-data-titulo">Habilidades:</p>
        <p className="usuario-data-value">{userData?.habilidades}</p>
        <p className="usuario-data-titulo">Resistente al agua:</p>
        <p className="usuario-data-value">
          {userData?.eresResistente ? "Si" : "No"}
        </p>
      </div>
    </div>
  );
}
