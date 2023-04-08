import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../NavBar/NavBar.css';
import logopapa from '../../img/papa.png';
import CartWidget from "./CartWidget/CartWidget.js";


function NavBar() {
  return (
    <Navbar bg="warning" expand="lg">
      <Container>
      <img className='img-papa' src={logopapa} alt="cara de papa" />
        <Navbar.Brand>
            <h1>¡Pa la papa!</h1>
            <hr></hr>
            <h2>La mayor tienda de papa del mundo</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"><h4>Home</h4></Nav.Link>
            <Nav.Link href="/"><h4>Variedades</h4></Nav.Link>
            <Nav.Link href="/"><h4>Precios</h4></Nav.Link>
            <Nav.Link href="/"><h4>Contacto</h4></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default NavBar;