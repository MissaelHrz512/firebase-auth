import "bootstrap/dist/css/bootstrap.min.css";
import { FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">Iniciar Sesión</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input
              type="text"
              className="form-control"
              name="username"
              
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="password"
              
            />
          </div>
          <div className="login-buttons-container p-2 d-flex justify-content-around">
            <button type="submit" className="btn btn-primary w-100 m-1">
              Ingresar
            </button>
            <button className="btn btn-primary w-100 m-1">
              <FaGoogle />
            </button>
          </div>
          <NavLink to="/auth/register">Crear cuenta</NavLink>
        </form>
      </div>
    </div>
  );
};
