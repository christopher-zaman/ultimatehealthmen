import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";

import { BlogDataContext } from "./context/BlogData.jsx";

const dataElement = document.getElementById("blog-initial-data");
const blogData = dataElement ? JSON.parse(dataElement.textContent) : null;
const root = document.getElementById("root");
const app = (
  <StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <BlogDataContext.Provider value={blogData}><App /></BlogDataContext.Provider>
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
