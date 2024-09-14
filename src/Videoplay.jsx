import React from 'react'
import { Container } from 'react-bootstrap';
import Ratio from 'react-bootstrap/Ratio';

export default function Videoplay() {
  return (
    
   <Container className="mt-5">
   
   <div>
  <Ratio aspectRatio="16x9">
    <video
      src="./src/assets/Badrinath.mp4"
      controls
      width="100%"
      height="100%"
      autoPlay={false} 
    >
     
    </video>
  </Ratio>
</div>
 </Container>

 
  )
}
