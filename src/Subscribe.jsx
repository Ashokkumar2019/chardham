import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './subscribe.css';
export default function Subscribe() {
  return (
    <div className=''>
    <Container >
    
    <Row className='align-items-center d-flex justify-content-between bg-warning'>
    
        <Col sm={9} xs={9} >
        <h2 className='text-center ' style={{marginTop:'5vh',color:'green'}}>Char Dham Kedarnath-Badrinath Helicopter Tour
   
   <i className="fa fa-plane" style={{ fontSize: '1em',  color: '#f7786b' }}></i> 
   <Link to={`/Itenary/CD`}><Button variant="warning">More Information</Button></Link>

   </h2>
  
        </Col>
        <Col sm={3} xs={3} style={{backgroundImage: "url('./offeres.png')",height:'18vh',width:'12vw',marginTop:'-5vh' }} className='html_bg'>
        
        </Col>
        
        </Row>

        
        </Container>
        </div>
  )
}
