import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Container className="nav-bg">
      <Navbar expand="lg" className="nav-bgr" variant="light">
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand href="#home">RC</Navbar.Brand>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" onClick={() => handlePageChange("Home")}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" onClick={() => handlePageChange("About")}>
                About Me
              </Nav.Link>
              <Nav.Link
                href="#projects"
                onClick={() => handlePageChange("Projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                onClick={() => handlePageChange("Contact")}
              >
                Contact Me
              </Nav.Link>
              <Nav.Link
                href="#resume"
                onClick={() => handlePageChange("Resume")}
              >
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavTabs;
