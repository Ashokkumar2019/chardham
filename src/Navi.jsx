import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BsSearch } from 'react-icons/bs';

export default function Navi() {
  
  const [isNavVisible, setIsNavVisible] = useState(false);
 

 
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible); 
  };
 

  return (
    <div className="navbars">
      <Container>
        <Row className='rowmob'>
         
          <Col xs={6} md={6}>
            <div className="navicon" onClick={toggleNav}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
              </svg>
            </div>

           
            <div className={`mob-nav ${isNavVisible ? 'show' : 'hide'}`}>
              <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                <Nav.Item>
                  <img src="./logo.png" alt="" className="m_logo" />
                </Nav.Item>
                <Nav.Item>
                  <Link className="nav-link" to="/">Home</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className="nav-link" to="/about">About</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className="nav-link sublink" to="#">Places
                    <ul className='sublinkul'>
                      <li><Link className="nav-link" to="/Badrinath">Badrinath</Link></li>
                      <li><Link className="nav-link" to="/Kedarnath">Kedarnath</Link></li>
                      <li><Link className="nav-link" to="/Gangotri">Gangotri</Link></li>
                      <li><Link className="nav-link" to="/Yamunotri">Yamunotri</Link></li>
                    </ul>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>

          
          <Col xs={6} md={6} >
            
            

            <div className={`mob-nav ${isNavVisible ? 'show' : 'hide'}`}>
              <div className="grid-mob justify-content-between float-end align-items-center">
                <a href="tel:+1029384756" className="mx-3" style={{ textDecoration: 'none' }}>
                  <i className="fas fa-phone" style={{ fontSize: '1em', color: '#aeabab' }}></i>
                  <span style={{ fontSize: '1em', color: '#aeabab' }}>+91 878978998</span>
                </a>
                <a href="https://www.instagram.com" className="mx-3">
                  <i className="fab fa-instagram" style={{ fontSize: '1em', color: '#aeabab' }}></i>
                </a>
                <a href="https://www.linkedin.com" className="mx-3">
                  <i className="fab fa-linkedin" style={{ fontSize: '1em', color: '#aeabab' }}></i>
                </a>
                <a href="https://www.facebook.com" className="mx-3">
                  <i className="fab fa-facebook" style={{ fontSize: '1em', color: '#aeabab' }}></i>
                </a>
                <a href="https://plus.google.com" className="mx-3">
                  <i className="fab fa-google-plus" style={{ fontSize: '1em', color: '#aeabab' }}></i>
                </a>
                <a className="btn btn-primary">
                  <BsSearch /> 
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
