import React from 'react'
import data from './jsondata/Visit.json'
import { Container, Row, Col, Card, Button, Placeholder } from 'react-bootstrap';

export default function Lastvisit() {
  return (
    <div>
    <h2 className='text-center my-5'> top selling packages</h2>
      <h2 className='text-center my-5'>Do Dham packages</h2> 
    <Container>
    <Row>
      {data.map((item, index) => (
        <Col key={index} md={3} sm={6} className="mb-4">
          <Card className="h-100 d-flex flex-column">
            
            <Card.Img variant="top" src={item.imagePath} alt={item.title} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Title className='fw-bold text-danger' >{item.price}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              {/* <Button variant="primary" href={item.url}>Learn More</Button> */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  </div>
  )
}
