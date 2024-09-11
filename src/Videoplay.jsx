import React from 'react'
import { Container } from 'react-bootstrap';

export default function Videoplay() {
  return (
    
   <Container className="mt-4">
   <div className="ratio ratio-16x9">
     <iframe
       src="https://www.youtube.com/embed/cLZRL-XmleU"
       title="YouTube video"
       allowFullScreen
     ></iframe>
   </div>
 </Container>

 
  )
}
