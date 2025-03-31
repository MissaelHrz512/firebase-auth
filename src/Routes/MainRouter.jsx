import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Login } from "../Auth/Pages/Login";
import { Register } from "../Auth/Pages/Register";
import { Welcome } from "../App/Pages/Welcome";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/*" element={<Navigate to="/" />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />

      <Route path="/auth/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
