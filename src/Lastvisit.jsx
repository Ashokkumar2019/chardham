import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import data from './jsondata/Visit.json'
import data1 from './jsondata/Visit1.json'
import { Container, Row, Col, Card, Button, Placeholder } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GiHelicopter } from "react-icons/gi";
export default function Lastvisit() {
  const packageRef = useRef(null);
  const packageRef1 = useRef(null);
  const refs = useRef({});
  const location = useLocation();
  useEffect(() => {
    if (location.hash === '#package') {
      packageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (location.hash === '#package1') {
      packageRef1.current?.scrollIntoView({ behavior: 'smooth' });
    }
    console.log(location);
    
  }, [location]);
  return (
    <div>
    <h2 className='text-center my-5' id="package" ref={packageRef}> Top packages for traveling to the Char Dham by Road </h2>
       
    <Container>
    <Row >
      {data.map((item, index) => (
        <Col key={index} md={4} sm={6} className="mb-4">
          <Card className="h-100 d-flex flex-column"
          // ref={(el) => (refs.current[index] = el)} 
          >
          {/* ref={item.Params} */}
            <Card.Img variant="top" src={item.imagePath} alt={item.title} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Title className='fw-bold text-danger' >{item.price}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Link to={`/Itenary/${item.Params}`}><Button variant="primary" id={`${item.Params}`} >More Information</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  <h2 className='text-center my-5' id="package1" ref={packageRef1}> Top packages for traveling to the Char Dham by Helicopter <GiHelicopter  className='show_hide'/></h2>
  <Container >
    <Row >
      {data1.map((item, index) => (
        <Col key={index} md={4} sm={6} className="mb-4">
          <Card className="h-100 d-flex flex-column" >
          {/* ref={item.Params} */}
            {/* <Card.Img variant="top" src={item.imagePath} alt={item.title} /> */}
            <Card.Body>
              <Card.Title>{item.title}

              
              </Card.Title>
             
              <Card.Title className='fw-bold text-danger' >{item.price}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Link to={`/Itenary/${item.Params}`}><Button variant="primary" id={`${item.Params}`} >More Information</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  </div>
  )
}
