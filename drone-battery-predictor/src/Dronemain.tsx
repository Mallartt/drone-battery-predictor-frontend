/* Dronemain.tsx */
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import DroneApp from "./DroneApp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Droneindex.css";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DroneApp />
    </BrowserRouter>
  </React.StrictMode>
);
