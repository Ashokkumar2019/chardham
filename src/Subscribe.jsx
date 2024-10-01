import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Subscribe() {
  return (
    <div className=''>
    <Container >
    
    <Row className='align-items-center d-flex justify-content-between bg-warning'>
    
        <Col sm={12} xs={12} >
        <h2 className='text-center ' style={{marginTop:'5vh',color:'green'}}>Char Dham Kedarnath-Badrinath Helicopter Tour
   
   <i className="fa fa-plane" style={{ fontSize: '1em',  color: '#f7786b' }}></i> 
<Link to='/DoDham'>Exciting Offers </Link>

   </h2>
        </Col>
        </Row>
        
        </Container>
        </div>
  )
}
