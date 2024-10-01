import React from 'react'
import './Itenary.css'
import { useParams } from 'react-router-dom'
export default function Itenary() {
const {place}=useParams();
console.log(place);


  return (
    <>
    {place==='Bh'&&
    <div name='badrinath'>
    <div class="timeline">
  <div class="container1 left1">
    <div class="content1">
      <h2>Day 1: Rishikesh to Badrinath</h2>
      <ul>
        <li><strong>5:00 AM:</strong> Early departure from Rishikesh (300 km, 8-10 hours).</li>
        <li><strong>Breakfast Stop:</strong> At Devprayag or Srinagar.</li>
        <li><strong>Afternoon:</strong> Arrive in Badrinath, check in, and have lunch.</li>
        <li><strong>Evening:</strong> Visit Badrinath Temple, attend evening Aarti (6:30 PM), explore Tapt Kund and Saraswati River.</li>
        <li><strong>Night:</strong> Dinner and rest.</li>
      </ul>
    </div>
  </div>
  <div class="container1 right1">
    <div class="content1">
      <h2>Day 2: Explore Badrinath & Return to Rishikesh</h2>
      <ul>
        <li><strong>Early Morning:</strong> Attend morning Aarti (4:30 AM).</li>
        <li><strong>Morning: </strong>Visit Charan Paduka and nearby temples like Neelkanth Peak and Bhavishya Badri.</li>
        <li><strong>Lunch: </strong>In Badrinath, then start return journey.</li>
        <li><strong>Evening:</strong> Arrive back in Rishikesh.</li>
      </ul>
    </div>
  </div>
  
  </div>
  <div style={{display:'flex',justifyContent:'center'}} className='bg-warning'>
  <h2>Tips: </h2>
  <ul style={{display:'flex', gap:'2em',paddingTop:'.5em'}}>
     <li><strong>Check weather.</strong></li>
     <li><strong>Book accommodations early.</strong></li>
     <li><strong>Pack warm clothing.</strong></li>
 </ul>
 
 
   </div>
   </div>
}

    {/* Kedarnath itenary */}
{place==='Kh'&&<div name='badrinath'>
    <div class="timeline">
  <div class="container1 left1">
    <div class="content1">
      <h2>Day 1: Rishikesh to Kedarnath</h2>
      <ul>
        <li><strong>5:00 AM:</strong> Depart from Rishikesh.</li>
        <li><strong>Breakfast Stop:</strong>  Quick breakfast in Srinagar.</li>
        <li><strong>Early Afternoon:</strong> Arrive in Gaurikund, have lunch.</li>
        <li><strong>Post-Lunch: </strong> Begin the 16 km trek to Kedarnath (6-8 hours). Optional: Hire a pony or palanquin.</li>
        <li><strong>Evening</strong> Reach Kedarnath, check in, and visit Kedarnath Temple for evening Aarti.</li>
        <li><strong>Night:</strong> Dinner and rest.</li>
      </ul>
    </div>
  </div>
  <div class="container1 right1">
    <div class="content1">
      <h2>Day 2: Kedarnath to Rishikesh</h2>
      <ul>
        <li><strong>4:30 AM: </strong> Attend the morning Aarti at Kedarnath Temple.</li>
        <li><strong>Morning: </strong>Breakfast and explore the temple.</li>
        <li><strong>Midday: </strong>Start the trek back to Gaurikund.</li>
        <li><strong>Afternoon:</strong> Lunch at Gaurikund.</li>
        <li><strong>Early Afternoon:</strong> Drive back to Rishikesh.</li>
        <li><strong>Evening:</strong> Arrive in Rishikesh.</li>
      </ul>
    </div>
  </div>
  
  </div>
  <div style={{display:'flex',justifyContent:'center'}} className='bg-warning'>
  <h2>Tips: </h2>
  <ul style={{display:'flex', gap:'2em',paddingTop:'.5em'}}>
     <li><strong>Check weather and road conditions.</strong></li>
     <li><strong>Pre-book accommodation.</strong></li>
     <li><strong>Wear comfortable trekking shoes.</strong></li>
 </ul>
 
 
   </div>
   </div>}




   {/* Gangotri itenary */}
{place==='GI'&&<div name='badrinath'>
    <div class="timeline">
  <div class="container1 left1">
    <div class="content1">
      <h2>Day 1: Rishikesh to Gangotri</h2>
      <ul>
        <li><strong>5:00 AM:</strong> Depart from Rishikesh.</li>
        <li><strong>Breakfast:</strong> Stop in Uttarkashi or at a roadside dhaba.</li>
        <li><strong>Noon:</strong> Arrive in Gangotri, check in, and have lunch.</li>
        <li><strong>Post-Lunch: </strong>Visit Gangotri Temple for prayers and explore the Bhagirathi River area.</li>
        <li><strong>Evening</strong> Dinner and overnight stay.</li>
        
      </ul>
    </div>
  </div>
  <div class="container1 right1">
    <div class="content1">
      <h2>Day 2: Gangotri to Rishikesh</h2>
      <ul>
        <li><strong>Morning:</strong> Attend the morning Aarti (optional) and have breakfast.</li>
        <li><strong>Noon:  </strong>Begin the return journey to Rishikesh.</li>
        <li><strong>Lunch: </strong>Stop in Uttarkashi for lunch.</li>
        <li><strong>Evening:</strong>Arrive in Rishikesh.</li>
        
      </ul>
    </div>
  </div>
  
  </div>
  <div style={{display:'flex',justifyContent:'center'}} className='bg-warning'>
  <h2>Tips: </h2>
  <ul style={{display:'flex', gap:'2em',paddingTop:'.5em'}}>
     <li><strong>Check weather conditions.</strong></li>
     <li><strong>Pre-book accommodation.</strong></li>
     <li><strong>Carry essentials like warm clothing and snacks.</strong></li>
 </ul>
 
 
   </div>
   </div>}
   </>
  )
}
