import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    //Obtencion de las credenciales:
    //const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    //Manejo de errores
    //const errorCode = error.code;
    const errorMessage = error.message;
    //const email = error.customData.email;
    //const credential = GoogleAuthProvider.credentialFromError(error);
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registUserFirebase = async ({ email, password, displayName }) => {
  console.log("----", email, password, displayName);
  try {
    const res = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    //Actualiza el usuario:
    await updateProfile(FirebaseAuth.currentUser,{displayName});
    const { uid } = res.user;
    return { ok: true, uid, displayName, email };
  } catch (error) {
    console.log("<<", error);
    return { ok: false, errorMessage: error.message };
  }
};
