import {Container, Nav, Navbar} from "react-bootstrap";

function MyNav() {
  return (
    
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Bookshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Browse</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
    
  );
}

export default MyNav;