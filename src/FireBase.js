import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDm-aON5_BAvzuEFDmMQIBShJNrawQi6h8",
  authDomain: "projectnfo.firebaseapp.com",
  projectId: "projectnfo",
  storageBucket: "projectnfo.appspot.com",
  messagingSenderId: "748421390170",
  appId: "1:748421390170:web:d5b1b52bd397e899fe5d63",
  measurementId: "G-NJE9X4EQPZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);
export {auth, db} ;


