import React from 'react'

import data from './jsondata/Blog.json';
import { Carousel } from 'react-bootstrap';

export default function Blogs() {
  return (
    <Carousel fade className="mt-5">
    {data.map((item, index) => (
      <Carousel.Item key={index}>
       
        <Carousel.Caption className='blogclass'>
        <img
          className="circle-image"
          src={item.image}
          alt={item.heading}
        />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
         
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
  
  )
}
