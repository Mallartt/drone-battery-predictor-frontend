/* drone_components/DroneAppNavbar.tsx */
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DroneAppNavbar.css";

export default function DroneAppNavbar() {
  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-between">
          <Nav className="left-nav">
            <Nav.Link as={Link} to="/">Главная</Nav.Link>
          </Nav>

          <Nav className="right-nav">
            <Nav.Link as={Link} to="/drone_services">Услуги</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
