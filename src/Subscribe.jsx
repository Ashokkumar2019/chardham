import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Subscribe() {
  return (
    <div className='back_img'>
    <Container >
    <Row className='align-items-center d-flex justify-content-between'>
        <Col sm={6} xs={12}>
        <h3>Subscribe Our Newsletter</h3>
        <p>Subscribe newsletter to get offers and about new places to discover.</p>
        </Col>
        <Col sm={6} xs={12}>
        <form action="" className='align-items-center d-flex justify-content-around subscribe'>
            <input type="email" placeholder='Enter Your Email' />
            <button type='button' className='btn btn-primary'>Subscribe</button>
        </form>
        </Col>
        </Row>
        </Container>
        </div>
  )
}
