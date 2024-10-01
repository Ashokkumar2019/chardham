import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Subscribe() {
  return (
    <div className=''>
    <Container >
    
    <Row className='align-items-center d-flex justify-content-between bg-warning'>
    
        <Col sm={12} xs={12} >
        <h2 className='text-center ' style={{marginTop:'5vh'}}>Do Dham Kedarnath-Badrinath Helicopter Tour
   
   <i className="fa fa-plane" style={{ fontSize: '1em',  color: '#f7786b' }}></i>
<Link to='/DoDham'>Exciting Offers</Link>
   </h2>
        </Col>
        </Row>
        <Row className='align-items-center d-flex justify-content-between bg-warning m-2'>
    
        <Col sm={12} xs={12} >
        <h2 className='text-center ' style={{marginTop:'5vh'}}>Char Dham Helicopter Tour
   
   <i className="fa fa-plane" style={{ fontSize: '1em',  color: '#f7786b' }}></i>
<Link to='/DoDham'>Exciting Offers</Link>
   </h2>
        </Col>
        </Row>
        </Container>
        <Container>
       <Row>
        <Col>
        <strong>The minimum rates for the 2 Nights 3 Days Badrinath Package From Rishikesh can vary depending on hotel and transportation availability on your selected dates. For the most up-to-date quote please contact our travel agent via WhatsApp.</strong>
        </Col>
       </Row>
        </Container>
        </div>
  )
}
