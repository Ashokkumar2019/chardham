import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


export default function Search() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  return (
    <div className='bg-dark pcontainer'>
    <Container>
   <div className="placeform">
    <h2>Where you want to go?</h2>
    <input type="text" placeholder='Where is go?' />
    <input type="date" id="datePicker" value={selectedDate} onChange={handleDateChange}/>
     <button className='btn btn-primary' type='button'>Search</button>
   </div>
  </Container>
  </div>
  )
}
