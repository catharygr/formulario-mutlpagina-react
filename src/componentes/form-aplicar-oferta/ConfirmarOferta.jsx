/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { onValue, ref as refDB, remove } from "firebase/database";
import { db } from "../../utilidades/firebase";
import { signOut, deleteUser } from "firebase/auth";
import { auth } from "../../utilidades/firebase";
import { storage } from "../../utilidades/firebase";
import { ref as refST, deleteObject } from "firebase/storage";
import { data } from "../../assets/data";

export default function PasoCuatro({
  setPasos,
  userUID,
  setUserUID,
  setForm,
  form,
}) {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");

  const findOferta = data.find((oferta) => {
    return oferta.id === form.trabajoSolicitado[0];
  });
  console.log(findOferta);
  function handleAplicar() {
    console.log(form.trabajoSolicitado);
  }

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
