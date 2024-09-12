import React from 'react';
import data from './jsondata/Contantcard.json';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom

export default function Newscard() {
  return (
    <Container>
      <Row>
        {data.map((item, index) => (
          <Col key={index} md={3} sm={6} className="mb-4">
            <Card className="h-100 d-flex flex-column">
              <div className="hovereff"></div>
              <Card.Img variant="top" src={item.imagePath} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Link to={item.URL}>Learn More</Link> 
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
