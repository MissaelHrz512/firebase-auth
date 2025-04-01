import { signInWithGoogle } from "../../Firebase/providers";
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
