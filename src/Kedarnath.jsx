import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import Lastvisit from './Lastvisit';
import Footers from './Footers';
import Blogs from './Blogs';
import Ratio from 'react-bootstrap/Ratio';

export default function Kedarnath() {
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
          <h1>Description of the Kedarnath Pilgrimage</h1>
          <section>
            <h2>Location</h2>
            <p><strong>District:</strong>Rudraprayag, Uttarakhand</p>
            <p><strong>Altitude:</strong> Approximately 3,584 meters (11,762 feet) above sea level</p>
        </section>

        <section>
            <h2>Religious Significance</h2>
            <p><strong>Main Deity:</strong> Lord Shiva</p>
            <p><strong>Temple:</strong> Kedarnath Temple, which is famous for the worship of Lord Shiva. This temple is one of the twelve Jyotirlingas of Lord Shiva.</p>
        </section>

        <section>
            <h2>History and Mythology</h2>
            <p><strong>Mythology:</strong> According to ancient legends, Lord Shiva came here while fleeing from Mount Kailash, and this is where he manifested.</p>
            <p><strong>History:</strong> The Kedarnath Temple is believed to have been constructed by the Pandavas during the Mahabharata era. This site holds immense historical significance and is considered a sacred pilgrimage destination for devotees.</p>
        </section>

        <section>
            <h2>Main Attractions</h2>
            <ul>
                <li><strong>Kedarnath Temple:</strong> The temple is a major site for the worship of Lord Shiva, located in a high-altitude mountainous region with unique architecture.</li>
                <li><strong>Bhairav Temple:</strong> Located near the Kedarnath Temple, this temple is dedicated to Bhairav Baba and is considered significant by pilgrims.</li>
                <li><strong>Chorabari Tal:</strong> A beautiful high-altitude lake situated a short distance from Kedarnath. The serene beauty of this lake attracts pilgrims and visitors alike.</li>
                <li><strong>Phata:</strong> This is a key location from where helicopter services to Kedarnath are available, and many pilgrims start their journey from here.</li>
            </ul>
        </section>

        <section>
            <h2>Travel and Weather</h2>
            <p><strong>Best Time to Visit:</strong> The pilgrimage is typically undertaken from April to November. The temple remains closed in winter due to heavy snowfall.</p>
            <p><strong>Weather:</strong> In the summer (May to October), the weather is pleasant, while in the winter (November to March), it becomes extremely cold with potential snowfall.</p>
        </section>

        <section class="important">
            <h2>Travel Tips</h2>
            <ul>
                <li><strong>Physical Preparation:</strong> Since the temple is located at a high altitude, physical preparation and wearing appropriate clothing is essential before the journey.</li>
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
