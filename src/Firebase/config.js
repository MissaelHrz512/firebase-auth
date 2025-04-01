import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDi3r6gFauWX0HsT92Q29TwMrLkBjn6Scw",
  authDomain: "react-redux-auth-c2466.firebaseapp.com",
  projectId: "react-redux-auth-c2466",
  storageBucket: "react-redux-auth-c2466.firebasestorage.app",
  messagingSenderId: "110196372483",
  appId: "1:110196372483:web:71946cf134073c0677ca36",
};

export const Firebaseapp = initializeApp(firebaseConfig);
//Auth:
export const FirebaseAuth = getAuth(Firebaseapp);
//Acceso a la DB
export const FirebaseDB = getFirestore(Firebaseapp);
