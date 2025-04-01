import { registUserFirebase, signInWithGoogle } from "../../Firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuth = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const res = await signInWithGoogle();
    if (!res.ok) {
      return dispatch(logout({ errorMessage: res.errorMessage }));
    }
    delete res.ok;
    dispatch(login(res));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { ok, errorMessage, uid } = await registUserFirebase({
      email,
      password,
      displayName,
    });
    console.log(ok)
    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ uid, displayName, email }));
  };
};
