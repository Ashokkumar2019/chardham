import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import Lastvisit from './Lastvisit';
import Footers from './Footers';
import Blogs from './Blogs';
import Ratio from 'react-bootstrap/Ratio';

export default function Yamunotri() {
  return (
   
    <div className='chardham'>
     <div>
  <Ratio aspectRatio="16x9">
    <video
      src="./3.mp4"
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
    <h1>Description of the Yamunotri Yatra</h1>
    <section>
      <h2>Location</h2>
      <p><strong>District:</strong> Uttarkashi, Uttarakhand</p>
      <p><strong>Altitude:</strong> Approximately 3,293 meters (10,804 feet) above sea level</p>
    </section>

    <section>
      <h2>Religious Significance</h2>
      <p><strong>Main Deity:</strong> Goddess Yamuna</p>
      <p><strong>Temple:</strong> Yamunotri Temple, famous for the worship of Goddess Yamuna. This temple represents the sacred site of the Yamuna and is an important place for pilgrims.</p>
    </section>

    <section>
      <h2>History and Mythology</h2>
      <p><strong>Mythology:</strong> According to ancient legends, Yamunotri is the place where the Yamuna river first descended to earth. The worship of Goddess Yamuna here holds special significance.</p>
      <p><strong>History:</strong> The Yamunotri Temple was constructed in the 19th century by King Pratap Shah. It holds great religious importance and is a holy site for pilgrims.</p>
    </section>

    <section>
      <h2>Main Attractions</h2>
      <ul>
        <li><strong>Yamunotri Temple:</strong> This temple is a major site for the worship of Goddess Yamuna. Its architecture and religious significance attract many pilgrims.</li>
        <li><strong>Yamunabai's Kund:</strong> A hot water spring located near the temple. It is considered sacred, and pilgrims come here to bathe in its waters.</li>
        <li><strong>Kharshali:</strong> A small location near Yamunotri, offering beautiful views of the temple.</li>
        <li><strong>Saptrishi Kund:</strong> A significant place located a short distance from Yamunotri, holding religious importance.</li>
      </ul>
    </section>

    <section>
      <h2>Travel and Weather</h2>
      <p><strong>Best Time to Visit:</strong> The pilgrimage is typically undertaken from May to October. The temple remains closed during winter due to extreme cold and heavy snowfall.</p>
      <p><strong>Weather:</strong> During summer (May to October), the weather is pleasant, while in winter (November to March), it becomes very cold and may experience snowfall.</p>
    </section>

    <section class="important">
      <h2>Travel Tips</h2>
      <ul>
        <li><strong>Physical Preparation:</strong> Since Yamunotri is located at a high altitude, physical preparation and wearing appropriate clothing is essential before the journey.</li>
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
