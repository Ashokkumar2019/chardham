import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './subscribe.css';
import { GiHelicopter } from "react-icons/gi";
export default function Subscribe() {
  return (
    <div >
    <Container  >
    
    
    <Row className='align-items-center d-flex justify-content-between mycontainer text-center'  >
    
        <Col sm={9} xs={9} >
        <h2 className='text-center text_color ' style={{marginTop:'5vh'}}>Kedarnath-Badrinath Helicopter Tour
   
   {/* <i className="fa fa-plane" style={{ fontSize: '1em',  color: '#f7786b' }}></i>  */}
   &nbsp;&nbsp;
  <GiHelicopter  className='show_hide'/>
   <p style={{fontSize:'26px', fontWeight:900 }} className='text_color'> 49999/-PP <Link to={`/Itenary/CD`}><Button variant="warning">More Information</Button></Link></p>
   

   </h2>
  
        </Col>
        {/* <Col sm={3} xs={3} style={{backgroundImage: "url('./offeres.png')",height:'18vh',width:'12vw',marginTop:'-5vh' }} className='html_bg'>
        
        </Col> */}
        {/* <Col sm={3} xs={3} style={{color: '#4B6F44',fontSize:'26px', fontWeight:900 }} className='price_description'>
        49999/PP
        </Col> */}
        </Row>

        
        </Container>
        </div>
  )
}
