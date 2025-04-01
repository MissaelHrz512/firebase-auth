import "bootstrap/dist/css/bootstrap.min.css";
import { FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form"; // Importamos React Hook Form
import { useDispatch, useSelector } from "react-redux";
import { checkingAuth, startGoogleSingIn } from "../../Store/Auth/thunks";
import { RingLoader } from "react-spinners";

export const Login = () => {
  const { status } = useSelector((state) => state.auth);
  const isChecking = status === "checking";
  const dispatch = useDispatch();

  // Usamos useForm para manejar el formulario
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Manejamos el submit con handleSubmit de React Hook Form
  const onSubmit = (data) => {
    console.log(data); // Los datos del formulario
    dispatch(checkingAuth());
  };

  const onGoogle = () => {
    console.log("Google");
    dispatch(startGoogleSingIn());
  };

  return (
    <>
      {isChecking && (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
          <RingLoader color="#4285F4" />
        </div>
      )}
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
          <h3 className="text-center mb-4">Iniciar Sesión</h3>
          {/* Usamos handleSubmit de React Hook Form para enviar los datos */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                {...register("email", { required: "Este campo es obligatorio", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Correo no válido" } })}
              />
              {/* Muestra el mensaje de error si existe */}
              {errors.email && <small className="text-danger">{errors.email.message}</small>}
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                {...register("password", { required: "Este campo es obligatorio" })}
              />
              {/* Muestra el mensaje de error si existe */}
              {errors.password && <small className="text-danger">{errors.password.message}</small>}
            </div>
            <div className="login-buttons-container p-2 d-flex justify-content-around">
              <button
                type="submit"
                className="btn btn-primary w-100 m-1"
                disabled={isChecking}
              >
                Login
              </button>
              <button
                onClick={onGoogle}
                type="button"
                disabled={isChecking}
                className="btn btn-primary w-100 m-1"
              >
                <FaGoogle />
              </button>
            </div>
            <NavLink to="/auth/register">Crear cuenta</NavLink>
          </form>
        </div>
      </div>
    </>
  );
};