import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Lastvisit from './Lastvisit';
import Footers from './Footers';
import Blogs from './Blogs';


export default function Contact() {
  return (
    <div >
     
     
      <Container className='min-vh-100'>
        <Row>
          <Col md={6} sm={12}>
            <section className="contact-info">
               <h1 style={{ 
  fontWeight: 500,
  fontSize: '1.5rem'}}>Let's get in touch</h1>
              <p><strong>पता:</strong> 1234, पृष्ठ नाम, शहर, राज्य, पिनकोड, देश</p>
              <p><strong>फोन:</strong> +91 123 456 7890</p>
              <p><strong>ईमेल:</strong> example@example.com</p>
            </section>
          </Col>
          {/* <Col md={6} sm={12}>
            <section className="map">
              <h2>हमारा स्थान</h2>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.002237788!2d77.06872822186778!3d28.61391797505697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc5ef2fd75c3%3A0x14d5a73d254e8d71!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1636762257487!5m2!1sen!2sus" 
                allowFullScreen="" 
                loading="lazy" 
                title="Google Map"
                className="w-100"
              ></iframe>
            </section>
          </Col> */}
       </Row>
      </Container>
     
      <div className="footersection">
        <Footers />
      </div>
    </div>
  );
}
