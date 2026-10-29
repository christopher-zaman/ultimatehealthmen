import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";

const root = document.getElementById("root");
const app = (
  <StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
