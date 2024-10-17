import React from 'react'

import data from './jsondata/review.json';
import { Carousel } from 'react-bootstrap';

export default function Review() {
  return (
    <Carousel fade className="mt-5">
    {data.map((item, index) => (
      <Carousel.Item key={index}>
       
        <Carousel.Caption className='blogclass'>
        
          <p style={{width:'50vw',margin:'auto'}}>{item.msg}</p>
          <p style={{fontWeight:700}}>{item.reviewBy}</p>
         
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
  
  )
}
