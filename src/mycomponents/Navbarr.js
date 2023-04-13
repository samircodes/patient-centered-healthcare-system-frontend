import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Navbarr() {
  return (
    <Navbar bg="light" variant ="light">
      <Container>
      <Navbar.Brand href="#home">
        <img src= "./chLogo.png" />   </Navbar.Brand>

       

        <NavDropdown title="Login for doctors" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Log In</NavDropdown.Item>
             
              <NavDropdown.Item href="#action/3.3">Sign Up</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>

      </Container>
    </Navbar>
  );
}

export default Navbarr;


