import "bootstrap/dist/css/bootstrap.min.css";
import { FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";

export const Login = () => {
  const { email, password, onInputChange, formState } = useForm({
    email: "jimbo@gmail.com",
    password: "12343124",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  const onGoogle = () => {
    console.log("Google");
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">Iniciar Sesión</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </div>
          <div className="login-buttons-container p-2 d-flex justify-content-around">
            <button type="submit" className="btn btn-primary w-100 m-1">
              Ingresar
            </button>
            <button
              onClick={onGoogle}
              type="button"
              className="btn btn-primary w-100 m-1"
            >
              <FaGoogle />
            </button>
          </div>
          <NavLink to="/auth/register">Crear cuenta</NavLink>
        </form>
      </div>
    </div>
  );
};
