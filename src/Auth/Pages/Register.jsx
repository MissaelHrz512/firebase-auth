import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../Store/Auth/thunks";

const formValidations = {
  email: (val) => val.includes("@") || "El correo debe tener @",
  password: (val) => val.length >= 6 || "Debe de tener más de 6 caracteres",
  displayName: (val) => val.length >= 1 || "El nombre es obligatorio",
};

export const Register = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (data) => {
    dispatch(startCreatingUserWithEmailPassword(data))
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h3 className="text-center mb-4">Crear Cuenta</h3>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input
              type="text"
              className="form-control"
              {...register("displayName", {
                required: "El nombre es obligatorio",
                validate: formValidations.displayName,
              })}
            />
            {errors.displayName && (
              <small className="text-danger">
                {errors.displayName.message}
              </small>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              {...register("email", {
                required: "El correo es obligatorio",
                validate: formValidations.email,
              })}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              {...register("password", {
                required: "La contraseña es obligatoria",
                validate: formValidations.password,
              })}
            />
            {errors.password && (
              <small className="text-danger">{errors.password.message}</small>
            )}
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
