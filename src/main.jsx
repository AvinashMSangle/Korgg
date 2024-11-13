import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const root = createRoot(document.querySelector(".app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);