import React from 'react'
import { Container } from 'react-bootstrap';
import Ratio from 'react-bootstrap/Ratio';

export default function Videoplay() {
  return (
    
   <Container className="mt-5">
   
  <video style={{width:'85vw'}}  controls>
   <source src="/video1.mp4" type="video/mp4"/>
 
  
  </video>
 </Container>

 
  )
}
