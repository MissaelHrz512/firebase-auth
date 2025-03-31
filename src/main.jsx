import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthApp } from "./AuthApp.jsx";
import { Provider } from "react-redux";
import { store } from "./Store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
