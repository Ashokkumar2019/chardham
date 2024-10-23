import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import data from './jsondata/Sliderdata.json'

export default function Slider() {
  return (
    <div>
       <Carousel fade interval={2000} >
      {data.map((item, index) => (
        <Carousel.Item   key={index} >
          <img
            className="d-block w-100"
            src={item.image}
            alt={item.heading}
          />
          <Carousel.Caption>
            <h3>{item.heading}</h3>
            <p>{item.detail}</p>
            <a href={item.link} className="btn btn-primary">Explore</a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  )
}
