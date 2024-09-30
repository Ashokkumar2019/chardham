import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; 
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BsSearch } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navi() {
  return (
    <div className="navbars">
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <img src="./logo.png" alt="" className="m_logo" />

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title="Places" id="collapsible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/Badrinath">
            
              Badrinath
            
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Kedarnath">
              
              Kedarnath
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Gangotri">
              
              Gangotri
              </NavDropdown.Item>
              
             
              <NavDropdown.Item as={Link} to="/Yamunotri">
              
              Yamunotri
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"> 
            <i className="fas fa-phone" style={{ fontSize: '1em', color: '#aeabab' }}></i>
            <span style={{ fontSize: '1em', color: '#aeabab' }}>+91 878978998</span>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <i className="fab fa-instagram" style={{ fontSize: '1em', color: '#aeabab' }}></i>
Instagram Link

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
