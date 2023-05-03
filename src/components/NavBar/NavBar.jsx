import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../NavBar/NavBar.css';
import logopapa from '../../img/papa.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar bg="warning" expand="lg">
      <Container>

          <Nav.Link as={Link} to="/">
            <img className='img-papa' src={logopapa} alt="cara de papa" />
          </Nav.Link>

          <Navbar.Brand className='navbar-titulo'>
              <h1>¡Pa la papa!</h1>
              <hr></hr>
              <h2>La mayor tienda de papa del mundo</h2>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/" >
                      <h4>Inicio</h4>
                  </Nav.Link>
                  <Nav.Link as={Link} to={`/categoria/comunes`}>
                      <h4>Papas Comúnes</h4>
                  </Nav.Link>
                  <Nav.Link as={Link} to={`/categoria/mejoradas`}>
                      <h4>Papas Mejoradas</h4>
                  </Nav.Link>
                  <Nav.Link as={Link} to={`/categoria/nativas`}>
                      <h4>Papas Nativas</h4>
                  </Nav.Link>
                </Nav>
            </Navbar.Collapse>

      </Container>

      <CartWidget />

    </Navbar>
  );
}

export default NavBar;