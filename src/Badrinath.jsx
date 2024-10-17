import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Blogs from './Blogs';
import Lastvisit from './Lastvisit';
import Footers from './Footers';
import Ratio from 'react-bootstrap/Ratio';


export default function Badrinath() {
  return (
    <div className='chardham'>
      <div>
  <Ratio aspectRatio="16x9">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/FgoYa4I23_Y?si=s5haSUt2F1UEUf4D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </Ratio>
</div>
      <br />
      <Container>
        <Row>
          <Col>
          <h1>Description of Badrinath </h1>
          <section>
            <h2>Location</h2>
            <p><strong>District:</strong> Chamoli, Uttarakhand</p>
            <p><strong>Altitude:</strong> Approximately 3,133 meters (10,279 feet) above sea level</p>
        </section>

        <section>
            <h2>Religious Significance</h2>
            <p><strong>Main Deity:</strong> Lord Vishnu</p>
            <p><strong>Temple:</strong> The Badrinath Temple, which is renowned for the worship of Lord Vishnu. The temple houses a grand statue of Lord Vishnu, known as "Badri Nath". This temple remains closed during winter and opens in the summer months.</p>
        </section>

        <section>
            <h2>History and Mythology</h2>
            <p><strong>Mythology:</strong> According to ancient legends, Lord Vishnu came here to meditate. The "Narayan Parvat" (Narayan Mountain) and "Badri Van" (Badri Forest) hold significant importance in these stories.</p>
            <p><strong>History:</strong> The Badrinath Temple was initially established for the worship of Brahma and Vishnu. This site has been considered a sacred place for pilgrims since ancient times.</p>
        </section>

        <section>
            <h2>Main Attractions</h2>
            <ul>
                <li><strong>Badrinath Temple:</strong> This temple is one of the most important pilgrimage sites in Uttarakhand and is believed to have been established around the 6th century. The architecture of the temple reflects the Garhwal style.</li>
                <li><strong>Tapt Kund:</strong> A hot water spring located near the Badrinath Temple. Pilgrims come here to bathe, as it is believed that bathing in its waters absolves all sins.</li>
                <li><strong>Narad Kund and Brahma Kund:</strong> These are also sacred ponds located near the temple and hold great religious significance. Pilgrims visit them for holy baths.</li>
                <li><strong>Shreenath Temple:</strong> Situated near the Badrinath Temple, this temple is dedicated to "Shreenath", an avatar of Lord Vishnu.</li>
            </ul>
        </section>

        <section>
            <h2>Travel and Weather</h2>
            <p><strong>Best Time to Visit:</strong> Generally, the pilgrimage is undertaken between April and November. The temple remains closed during winter due to heavy snowfall.</p>
            <p><strong>Weather:</strong> During the summer (May to October), the weather is pleasant, while in winter (November to March), it becomes extremely cold with possible snowfall.</p>
        </section>

        <section class="important">
            <h2>Travel Tips</h2>
            <ul>
                <li><strong>Physical Preparation:</strong> Since Badrinath is located at a high altitude, physical preparation and wearing appropriate clothing is essential before the journey.</li>
                <li><strong>Rest:</strong>It is important to take adequate rest and stay hydrated during the journey.</li>
                <li><strong>Transportation:</strong> It is advisable to use well-equipped vehicles and seek assistance from reliable travel agencies for the trip.</li>
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
