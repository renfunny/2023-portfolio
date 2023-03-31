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
                href="https://docs.google.com/document/d/10bxzqPD-L65BA9RFk4bXjOz0d2Gdjd_t/edit?usp=sharing&ouid=106751600692304358518&rtpof=true&sd=true"
                target="_blank"
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
