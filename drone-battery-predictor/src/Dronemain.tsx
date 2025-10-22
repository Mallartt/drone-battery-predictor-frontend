/* Dronemain.tsx */
import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import DroneApp from "./DroneApp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Droneindex.css";
import { AppStoreProvider } from "./AppStoreProvider";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppStoreProvider>
      <HashRouter>
        <DroneApp />
      </HashRouter>
    </AppStoreProvider>
  </React.StrictMode>
);
