import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainRouter } from "./Routes/MainRouter.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthApp } from "./AuthApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthApp/>
    </BrowserRouter>
  </StrictMode>
);
