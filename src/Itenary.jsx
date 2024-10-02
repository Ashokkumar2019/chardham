import React from 'react'
import './Itenary.css'
import { useParams } from 'react-router-dom'
export default function Itenary() {
const {place}=useParams();
console.log(place);


  return (
    <>
    {place==='Bh'&&
    <div >
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
  <div style={{display:'flex',justifyContent:'center'}} className='bg-warning tips_container' >
  <h2>Tips: </h2>
  <ul style={{display:'flex', gap:'2em',paddingTop:'.5em'}} className='tips_item'>
     <li><strong>Check weather.</strong></li>
     <li><strong>Book accommodations early.</strong></li>
     <li><strong>Pack warm clothing.</strong></li>
 </ul>
 
 
   </div>
   </div>
}

    {/* Kedarnath itenary */}
{place==='Kh'&&<div >
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
  <div style={{display:'flex',justifyContent:'center'}} className='bg-warning tips_container'>
  <h2>Tips: </h2>
  <ul style={{display:'flex', gap:'2em',paddingTop:'.5em'}}
  className='tips_item'
  >
     <li><strong>Check weather and road conditions.</strong></li>
     <li><strong>Pre-book accommodation.</strong></li>
     <li><strong>Wear comfortable trekking shoes.</strong></li>
 </ul>
 
 
   </div>
   </div>}




   {/* Gangotri itenary */}
{place==='GI'&&<div >
    <div class="timeline">
  <div class="container1 left1">
    <div class="content1">
      <h2>Day 1: Rishikesh to Gangotri</h2>
      <ul>
        <li><strong>5:00 AM:</strong> Depart from Rishikesh.</li>
        <li><strong>Breakfast:</strong> Stop in Uttarkashi or at a roadside dhaba.</li>
        <li><strong>Noon:</strong> Arrive in Gangotri, check in, and have lunch.</li>
        <li><strong>Post-Lunch: </strong>Visit Gangotri Temple for prayers and explore the Bhagirathi River area.</li>
        <li><strong>Evening:</strong> Dinner and overnight stay.</li>
        
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
  <div style={{display:'flex',justifyContent:'center'}} className='bg-warning tips_container'>
  <h2>Tips: </h2>
  <ul style={{display:'flex', gap:'2em',paddingTop:'.5em'}}
  className='tips_item'>
     <li><strong>Check weather conditions.</strong></li>
     <li><strong>Pre-book accommodation.</strong></li>
     <li><strong>Carry essentials like warm clothing and snacks.</strong></li>
 </ul>
 
 
   </div>
   </div>}


   {/* yamunotri itenary */}
{place==='YI'&&<div >
    <div class="timeline">
  <div class="container1 left1">
    <div class="content1">
      <h2>Day 1: Rishikesh to Yamunotri</h2>
      <ul>
        <li><strong>6:00 AM:</strong> Depart from Rishikesh, have breakfast en route.</li>
        <li><strong>Noon:</strong> Arrive at Janki Chatti, check into your accommodation, and have lunch.</li>
        <li><strong>Noon:</strong> Arrive in Gangotri, check in, and have lunch.</li>
        <li><strong>Post-Lunch: </strong>Begin the 6 km trek to Yamunotri (3-4 hours).</li>
        <li><strong>Evening:</strong>Visit Yamunotri Temple, return to Janki Chatti for dinner and rest.</li>
        
      </ul>
    </div>
  </div>
  <div class="container1 right1">
    <div class="content1">
      <h2>Day 2: Yamunotri to Rishikesh</h2>
      <ul>
        <li><strong>Morning:</strong> Breakfast and optional second visit to Yamunotri or nearby hot springs.</li>
        <li><strong>Late Morning: </strong>Trek back to Janki Chatti.</li>
        <li><strong>Afternoon: </strong>Lunch at Janki Chatti and start the drive back to Rishikesh.</li>
        <li><strong>Evening:</strong>Arrive in Rishikesh.</li>
        
      </ul>
    </div>
  </div>
  
  </div>
  <div style={{display:'flex',justifyContent:'center'}} className='bg-warning tips_container'>
  <h2>Tips: </h2>
  <ul style={{display:'flex', gap:'2em',paddingTop:'.5em'}}
  className='tips_item'>
     <li><strong>Pre-book accommodations.</strong></li>
     <li><strong>Wear trekking shoes and carry warm clothing.</strong></li>
     <li><strong>Be prepared for altitude and weather changes.</strong></li>
 </ul>
 
 
   </div>
   </div>}


   {/* Phata and Kedarnath */}
{place==='PK'&&<div >
    <div class="timeline">
  <div class="container1 left1">
    <div class="content1">
      <h2>Day 1: Rishikesh to Phata and Kedarnath</h2>
      <ul>
        <li><strong>6:00 AM: </strong>Depart from Rishikesh, drive to Phata (5-6 hours).</li>
        <li><strong>Noon:</strong> Arrive in Phata, check into a hotel.</li>
        <li><strong>Lunch:</strong>  Enjoy lunch at your accommodation.</li>
        <li><strong>Afternoon:  </strong>Helicopter ride to Kedarnath (10-15 minutes). Visit Kedarnath Temple and explore.</li>
        <li><strong>Evening:</strong>Return by helicopter to Phata. Dinner and overnight stay.</li>
        
      </ul>
    </div>
  </div>
  <div class="container1 right1">
    <div class="content1">
      <h2>Day 2: Phata to Rishikesh</h2>
      <ul>
        <li><strong>Morning:</strong> Breakfast at your hotel, explore Phata if time permits.</li>
        <li><strong>Late Morning: </strong>Trek back to Janki Chatti.</li>
        <li><strong>11:00 AM: </strong>Start your drive back to Rishikesh (5-6 hours).</li>
        <li><strong>Late Afternoon: </strong>Arrive in Rishikesh.</li>
        
      </ul>
    </div>
  </div>
  
  </div>
  <div style={{display:'flex',justifyContent:'center'}} className='bg-warning tips_container'>
  <h2>Tips: </h2>
  <ul style={{display:'flex', gap:'2em',paddingTop:'.5em'}} className='tips_item'>
     <li><strong>Book helicopter tickets in advance.</strong></li>
     <li><strong>Check weather conditions.</strong></li>
     <li><strong>Carry warm clothing and essentials.</strong></li>
 </ul>
 
 
   </div>
   </div>}
{ /*char dham helicopter*/ }
{place==='CD'&&<div >
    <div class="timeline">
  <div class="container1 left1">
    <div class="content1">
      <h2>Day 1: Arrival in Dehradun</h2>
      <ul>
        <li><strong>Morning:</strong>Arrive in Dehradun, transfer to hotel.</li>
        <li><strong>Evening:</strong> Briefing session, dinner, and rest.</li>
        
      </ul>
    </div>
  </div>
  <div class="container1 right1">
    <div class="content1">
      <h2>Day 2: Dehradun to Yamunotri</h2>
      <ul>
        <li><strong>Early Morning: </strong>Helicopter to Yamunotri (1-hour flight).</li>
        <li><strong>Late Morning: </strong>Trek 6 km to Yamunotri Temple, prayers.</li>
        <li><strong>Afternoon: </strong>Lunch and return to Kharsali.</li>
        <li><strong>Evening:  </strong>Fly back to Dehradun.</li>
        
      </ul>
    </div>
  </div>
  
  <div class="container1 left1">
    <div class="content1">
      <h2>Day 3: Dehradun to Gangotri</h2>
      <ul>
        <li><strong>Early Morning: </strong>Helicopter to Gangotri.</li>
        <li><strong>Morning: </strong> Visit Gangotri Temple, prayers.</li>
        <li><strong>Afternoon:  </strong>  Lunch and return to Dehradun.</li>
        
      </ul>
    </div>
  </div>
  <div class="container1 right1">
    <div class="content1">
      <h2>Day 4: Dehradun to Kedarnath</h2>
      <ul>
        <li><strong>Early Morning:  </strong>Helicopter to Kedarnath.</li>
        <li><strong>Morning: </strong>TVisit Kedarnath Temple.</li>
        <li><strong>Afternoon: </strong> Lunch and return to Dehradun.</li>
       
        
      </ul>
    </div>
  </div>
  <div class="container1 left1">
    <div class="content1">
      <h2>Day 5: Dehradun to Badrinath</h2>
      <ul>
        <li><strong>Early Morning: </strong>Helicopter to Badrinath.</li>
        <li><strong>Morning: </strong> Visit Badrinath Temple, Tapt Kund.</li>
        <li><strong>Afternoon:  </strong> Lunch and return to Dehradun.</li>
        <li><strong>Evening:   </strong> Depart or stay overnight.</li>
      </ul>
    </div>
  </div>


  </div>
  <div style={{display:'flex',justifyContent:'center'}} className='bg-warning tips_container'>
  <h2>Tips: </h2>
  <ul style={{display:'flex', gap:'2em',paddingTop:'.5em'}} className='tips_item'>
     <li><strong>Book in advance.</strong></li>
     <li><strong>Be prepared for weather changes.</strong></li>
     <li><strong>Carry necessary medications.</strong></li>
 </ul>
 
 
   </div>
   </div>}
   </>
  )
}
