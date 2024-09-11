import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Footers() {
  return (
    <div className="footerse">
        <Container>
            <Row>
                <Col md={3} sm={12}>
                <h3> <span><img src="./logo.png" alt="" className="m_logo" /></span> 
                चार धाम</h3>
                <p>123, Connaught Place,<br /> New Delhi, Delhi 110001,<br /> India</p>
                </Col>
                <Col md={3} sm={12}>
                <h3>Company</h3>
                <ul>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    
                </ul>
                </Col>
                <Col md={3} sm={12}>
                <h3>Popular destination</h3>
                <ul class="two_col">
                <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                   
                </ul>
                </Col>
                <Col md={3} sm={12}>
                <h3>Instagram</h3>
                <div className="footerimg">
                    <img src="./src/assets/card/cc1.jpg" alt="" />
                    <img src="./src/assets/card/cc2.jpg" alt="" />
                    <img src="./src/assets/card/cc3.jpg" alt="" />
                    <img src="./src/assets/card/cc4.jpg" alt="" />
                    <img src="./src/assets/card/cc5.jpg" alt="" />
                    <img src="./src/assets/card/cc6.jpg" alt="" />
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
