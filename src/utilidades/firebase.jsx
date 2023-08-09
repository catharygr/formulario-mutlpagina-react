// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref as refST } from "firebase/storage";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2DHJl8xbDWpUNSzmxn17NTQq-Mi1GxJA",
  authDomain: "formulario-multipagina.firebaseapp.com",
  databaseURL:
    "https://formulario-multipagina-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "formulario-multipagina",
  storageBucket: "formulario-multipagina.appspot.com",
  messagingSenderId: "642622543944",
  appId: "1:642622543944:web:99120dd2c43444f664207d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firebase Database
export const db = getDatabase(app);

// Inicializar Firebase Auth
export const auth = getAuth(app);
// Inicializar Firebase Storage
export const storage = getStorage(app);
export const refStorage = refST(storage);
