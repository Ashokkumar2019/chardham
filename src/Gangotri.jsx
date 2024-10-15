import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Lastvisit from './Lastvisit';
import Footers from './Footers';
import Blogs from './Blogs';
import Ratio from 'react-bootstrap/Ratio';

export default function Gangotri() {
  return (
   
    <div className='chardham'>
     <div>
  <Ratio aspectRatio="16x9">
  <video
      src="./src/assets/Basrinath-s.mp4"
      controls
      width="100%"
      height="100%"
      autoPlay={true}
      muted={true}
    >
     
    </video>
     
   
  </Ratio>
</div>
    <br />
    <Container>
    <Row>
  <Col>
    <h1>Description of the Gangotri Yatra</h1>
    <section>
      <h2>Location</h2>
      <p><strong>District:</strong> Uttarkashi, Uttarakhand</p>
      <p><strong>Altitude:</strong> Approximately 3,048 meters (10,000 feet) above sea level</p>
    </section>

    <section>
      <h2>Religious Significance</h2>
      <p><strong>Main Deity:</strong> Goddess Ganga</p>
      <p><strong>Temple:</strong> Gangotri Temple, famous for the worship of Goddess Ganga. The temple houses a sacred idol of Goddess Ganga, which holds special significance for pilgrims.</p>
    </section>

    <section>
      <h2>History and Mythology</h2>
      <p><strong>Mythology:</strong> According to ancient legends, the Ganga river descended to earth from the locks of Lord Shiva. Gangotri is the site where the Ganga river first touched the earth.</p>
      <p><strong>History:</strong> The Gangotri Temple was built in the 18th century by King Pratap Shah. It has always been an important site for pilgrims.</p>
    </section>

    <section>
      <h2>Main Attractions</h2>
      <ul>
        <li><strong>Gangotri Temple:</strong> This temple is one of the important pilgrimage sites in Uttarakhand. It is dedicated to Goddess Ganga and attracts millions of pilgrims every year.</li>
        <li><strong>Gangnani:</strong> A hot water spring located near the Gangotri Temple, which is also considered sacred. Pilgrims come here to bathe in its holy waters.</li>
        <li><strong>Dharali:</strong> A small village located near Gangotri. It offers beautiful views of Gangotri.</li>
        <li><strong>Bhairav Valley:</strong> A site located a short distance from Gangotri, where the Bhairav Baba Temple is situated. It is believed that the pilgrimage is complete after visiting this temple.</li>
      </ul>
    </section>

    <section>
      <h2>Travel and Weather</h2>
      <p><strong>Best Time to Visit:</strong> The pilgrimage is typically undertaken from April to November. The temple remains closed during the winter due to extreme cold and heavy snowfall.</p>
      <p><strong>Weather:</strong> During summer (May to October), the weather is pleasant, while in winter (November to March), it becomes extremely cold and may experience snowfall.</p>
    </section>

    <section class="important">
      <h2>Travel Tips</h2>
      <ul>
        <li><strong>Physical Preparation:</strong> Since Gangotri is located at a high altitude, physical preparation and wearing appropriate clothing is essential before the journey.</li>
        <li><strong>Rest:</strong> It is important to take adequate rest and stay hydrated during the journey.</li>
        <li><strong>Transportation:</strong> Using well-equipped vehicles and seeking help from travel agencies for a comfortable and safe journey is advisable.</li>
      </ul>
    </section>
  </Col>
</Row>

      </Container>
    {/* <div className="blog">
    <Blogs/>
  </div>
  <div className="recenttrip py-5">
  <Lastvisit/>
  </div> */}
  <div className="footersection">
    <Footers/>
  </div>


  </div>

  )
}
