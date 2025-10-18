/* DroneApp.tsx */
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import DroneAppNavbar from "./drone_components/DroneAppNavbar";
import DroneHome from "./drone_pages/DroneHome";
import DroneServices from "./drone_pages/DroneServices";
import DroneServiceDetail from "./drone_pages/DroneServiceDetail";
import "./DroneApp.css";

export default function DroneApp() {
  return (
    <>
      <DroneAppNavbar />
      <Container className="app-container">
        <Routes>
          <Route path="/drone_main" element={<DroneHome />} />
          <Route path="/drone_services" element={<DroneServices />} />
          <Route path="/drone_services/:id" element={<DroneServiceDetail />} />
        </Routes>
      </Container>
    </>
  );
}
