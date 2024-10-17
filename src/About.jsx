import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import Lastvisit from './Lastvisit';
import Footers from './Footers';
import Review from './Review.jsx';
// import Blogs from './Blogs';

export default function About() {
  return (
  <div>
  {/* // <img src="./src/assets/about.jpg" alt="" className='w-100'/> */}
  {/* // <br /> */}
  <div className='aboutback pt-5'>
  
 <Container>
  <div className='text-center pb-5'><h1>Welcome to Bharat Sewa Samiti – Your Trusted Partner for a Divine Journey</h1>
  <p></p></div>
 
  <Row className='justify-content-between'>
    <Col md={6} sm={12}>
    <h2>Bharat Sewa Samiti</h2>
    <p>At <strong>Bharat Sewa Samiti</strong>, we understand that a pilgrimage is not just a journey—it’s a sacred quest for peace, reflection, and spiritual fulfillment. Our mission is simple:&nbsp; to ensure that your yatra is a serene and enriching experience, free from the concerns of travel logistics.</p>
    <p>
    We believe that a spiritual journey should be as tranquil as the destinations you seek. That’s why we meticulously plan every detail, from personalized itineraries to comfortable accommodations, nourishing meals, and seamless transportation. Our team is dedicated to taking care of everything, allowing you to focus solely on your spiritual connection and personal growth.
    </p>
    <p>
    Whether you’re visiting ancient temples, exploring serene landscapes, or immersing yourself in moments of quiet reflection, <strong>Bharat Sewa Samiti</strong> is here to make your pilgrimage effortless and meaningful. With us, you’ll experience peace of mind, knowing that your journey is in trusted hands.
    </p>
    <p>
    Embark on your yatra with <strong>Bharat Sewa Samiti</strong>, and let us take care of the rest. Together, we’ll create a pilgrimage experience that not only enriches your soul but leaves you with memories that last a lifetime.
    </p>
    <h2> key services</h2>
    <ul>
                <li><strong>Personalized Itineraries:&nbsp;</strong> Tailored travel plans that cater to your specific spiritual goals and preferences.</li>
                <li><strong>Comfortable Accommodations:&nbsp;</strong> Arrangements for stays in serene and comfortable environments, ensuring you rest well during your journey.</li>
                <li><strong>Nourishing Meals:&nbsp;</strong> Provision of wholesome and nutritious meals to keep you energized and healthy.</li>
                <li><strong>Seamless Transportation:&nbsp; </strong>Reliable and comfortable transportation options to take you to and from your pilgrimage sites without any hassle.</li>
                <li><strong>Guided Tours:&nbsp; </strong>Knowledgeable guides who can provide insights and historical context about the sacred sites you visit.</li>
                <li><strong>Spiritual Activities:&nbsp;</strong> Organization of meditation sessions, prayer meetings, and other spiritual activities to enhance your experience.</li>
                <li><strong>24/7 Support:&nbsp;</strong> Continuous support throughout your journey to address any concerns or needs that may arise.</li>
            </ul>
    </Col>
    <Col md={6} sm={12}>
    <h2>Special Services</h2>
    <ul>
                <li><strong>Group Pilgrimages:&nbsp;</strong> Coordinated group travel for those who prefer to embark on their spiritual journey with others.</li>
                <li><strong>Solo Pilgrimages:&nbsp;</strong> Personalized support for individuals seeking a solitary and introspective pilgrimage experience.</li>
                <li><strong>Family Pilgrimages:&nbsp;</strong> Tailored services to accommodate families, ensuring a fulfilling experience for all members.</li>
                
            </ul>
            <h2>Trip Highlights</h2>
            <ul>
                <li><strong>Sacred Destinations:&nbsp;</strong>
                Visit ancient temples, serene landscapes, and other spiritually significant sites that offer a deep sense of peace and reflection.</li>
                <li><strong>Cultural Immersion:&nbsp;</strong>
                Experience the local culture, traditions, and rituals, enriching your understanding and connection to the places you visit.</li>
                <li><strong>Spiritual Guidance:&nbsp;</strong>
                Benefit from the insights and wisdom of knowledgeable guides who provide historical context and spiritual teachings.</li>
                <li><strong>Comfort and Convenience:&nbsp;</strong>
                Relax in comfortable accommodations, enjoy nourishing meals, and travel with ease thanks to seamless transportation arrangements.</li>
                <li><strong>Memorable Moments:&nbsp;</strong>
                Create lasting memories through unique experiences and moments of quiet reflection that stay with you long after the journey ends.</li>
                <li><strong>Personalized Experiences:&nbsp;</strong>
                Enjoy a journey tailored to your spiritual goals and preferences, ensuring a meaningful and fulfilling experience.</li>
                <li><strong>Community and Fellowship:&nbsp;</strong>
                Share your journey with like-minded individuals, creating a sense of community and support throughout your pilgrimage.</li>
            </ul>
    </Col>
  </Row>
  <div className='text-center pt-5'>
  <h2 style={{lineHeight:'18px'}}>Customer Review:&nbsp;</h2>
  <Review/>
 
 </div>
 </Container>
 
            
  </div>
  <div className="footersection">
      <Footers/>
    </div> 
  {/* <div className="blog">
      <Blogs/>
    </div>
    <div className="recenttrip py-5">
    <Lastvisit/>
    </div>
    <div className="footersection">
      <Footers/>
    </div> */}

  </div>
  
  )
}
