import React from "react";
import { NavLink } from "react-router-dom";

export const Register = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">Crear Cuenta</h3>
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
            <label className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" name="email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="password"
              
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Registrarse
          </button>
          <NavLink to="/auth/login">Ya tengo cuenta</NavLink>
        </form>
      </div>
    </div>
  );
};
