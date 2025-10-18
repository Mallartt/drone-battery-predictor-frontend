/* Dronemain.tsx */
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import DroneApp from "./DroneApp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Droneindex.css";
import { AppStoreProvider } from "./AppStoreProvider";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppStoreProvider>
      <BrowserRouter>
        <DroneApp />
      </BrowserRouter>
    </AppStoreProvider>
  </React.StrictMode>
);

