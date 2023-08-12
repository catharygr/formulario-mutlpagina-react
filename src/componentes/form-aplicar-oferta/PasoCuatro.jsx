/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { onValue, ref as refDB, remove } from "firebase/database";
import { db } from "../../utilidades/firebase";
import { signOut, deleteUser } from "firebase/auth";
import { auth } from "../../utilidades/firebase";
import { storage } from "../../utilidades/firebase";
import { ref as refST, deleteObject } from "firebase/storage";

export default function PasoCuatro({ setPasos, userUID, setUserUID, setForm }) {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");

  // Función para loguear
  function handleLoguear() {
    signOut(auth)
      .then(() => {
        setPasos("inicio");
        setUserUID("");
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  // Función para borrar todo
  function handleBorrarTodo() {
    remove(refDB(db, `/${userUID}`))
      .then(() => {
        const userRef = refST(storage, `/${userUID}`);
        const cvRef = refST(userRef, userData.fileName);
        deleteObject(cvRef).then(() => {
          deleteUser(auth.currentUser).then(() => {
            setPasos("inicio");
            setUserUID("");
          });
        });
      })
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
          setUserData(data);
          setForm({
            trabajoSolicitado: [],
            email: "",
            password: "",
            nombre: "",
            telef: "",
            experiencias: "",
            habilidades: "",
            eresResistente: false,
            fileUrl: "",
            fileName: "",
          });
        } else {
          setUserData({});
        }
      }
    );

    return cancelOnValue;
  }, [userUID]);

  // mapeo
  const solicitarOfertaMapeo = userData?.trabajoSolicitado?.map((oferta) => (
    <button className="btn-trabajo-solicitado" key={Math.random()}>
      {oferta}
    </button>
  ));

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
        <button onClick={handleLoguear} className="btn-green">
          Salir
        </button>
        {error && <p className="error-msj">{error}</p>}
      </div>
      <div className="pasos-derecho">
        <p className="usuario-data-titulo">Ofertas solicitadas:</p>
        {/* <p className="usuario-data-value">{userData?.trabajoSolicitado}</p> */}
        {solicitarOfertaMapeo}
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
        <p className="usuario-data-titulo">Habilidades:</p>
        <p className="usuario-data-value">{userData?.habilidades}</p>
        <p className="usuario-data-titulo">Resistente al agua:</p>
        <p className="usuario-data-value">
          {userData?.eresResistente ? "Si" : "No"}
        </p>

        <button onClick={handleBorrarTodo} className="btn-red btn-green">
          Borrar tus datos y cerrar la cuenta
        </button>
      </div>
    </div>
  );
}
