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
          <h1>यमुनोत्री यात्रा का विवरण</h1>
          <section>
            <h2>स्थान</h2>
            <p><strong>जिला:</strong> उत्तरकाशी, उत्तराखंड</p>
            <p><strong>ऊँचाई:</strong> लगभग 3,293 मीटर (10,804 फीट) समुद्रतल से</p>
        </section>

        <section>
            <h2>धार्मिक महत्व</h2>
            <p><strong>मुख्य देवता:</strong> माता यमुनाजी</p>
            <p><strong>मंदिर:</strong> यमुनोत्री मंदिर, जो माता यमुनाजी की पूजा के लिए प्रसिद्ध है। यह मंदिर यमुनाजी के पवित्र स्थान को दर्शाता है और तीर्थयात्रियों के लिए एक महत्वपूर्ण स्थल है।</p>
        </section>

        <section>
            <h2>इतिहास और पौराणिक कथा</h2>
            <p><strong>पौराणिक कथा:</strong> पौराणिक कथाओं के अनुसार, यमुनोत्री वह स्थान है जहाँ यमुनाजी धरती पर आई थीं। यहाँ यमुनाजी की पूजा का विशेष महत्व है।</p>
            <p><strong>इतिहास:</strong> यमुनोत्री मंदिर का निर्माण 19वीं शताब्दी में राजा प्रताप शाह द्वारा किया गया था। यह स्थल धार्मिक दृष्टि से महत्वपूर्ण है और तीर्थयात्रियों के लिए पवित्र स्थल है।</p>
        </section>

        <section>
            <h2>मुख्य आकर्षण</h2>
            <ul>
                <li><strong>यमुनोत्री मंदिर:</strong> यह मंदिर माता यमुनाजी की पूजा के लिए प्रमुख स्थल है। मंदिर की वास्तुकला और धार्मिक महत्व तीर्थयात्रियों को आकर्षित करते हैं।</li>
                <li><strong>यमुनाबाई का कुण्ड:</strong> यह एक गर्म पानी का स्रोत है जो मंदिर के पास स्थित है। इसे भी पवित्र माना जाता है और यहाँ स्नान करने के लिए तीर्थयात्री आते हैं।</li>
                <li><strong>खरशाली:</strong> यह एक छोटा सा स्थान है जो यमुनोत्री के पास स्थित है और यहाँ से मंदिर का सुंदर दृश्य देखा जा सकता है।</li>
                <li><strong>सप्तरishi कुंड:</strong> यह एक महत्वपूर्ण स्थान है जो यमुनोत्री से कुछ दूरी पर स्थित है और धार्मिक महत्व रखता है।</li>
            </ul>
        </section>

        <section>
            <h2>यात्रा और मौसम</h2>
            <p><strong>यात्रा का समय:</strong> आमतौर पर मई से अक्टूबर तक यात्रा की जाती है। सर्दियों में अत्यधिक ठंड और बर्फबारी के कारण मंदिर बंद रहता है।</p>
            <p><strong>मौसम:</strong> गर्मियों में (मई से अक्टूबर) मौसम सुखद रहता है, जबकि सर्दियों में (नवंबर से मार्च) यहाँ बहुत ठंड होती है और बर्फबारी हो सकती है।</p>
        </section>

        <section class="important">
            <h2>यात्रा सुझाव</h2>
            <ul>
                <li><strong>शारीरिक तैयारी:</strong> उच्च ऊंचाई पर स्थित होने के कारण, यात्रा से पहले शारीरिक तैयारी और उचित वस्त्र पहनना आवश्यक है।</li>
                <li><strong>आराम:</strong> यात्रा के दौरान उचित आराम और पानी का सेवन करना आवश्यक है।</li>
                <li><strong>परिवहन:</strong> यात्रा के लिए अच्छी तरह से सुसज्जित गाड़ियों और यात्रा एजेंसियों की मदद लेना फायदेमंद होता है।</li>
            </ul>
        </section>
          </Col>
        </Row>
      </Container>
    <div className="blog">
    <Blogs/>
  </div>
  <div className="recenttrip py-5">
  <Lastvisit/>
  </div>
  <div className="footersection">
    <Footers/>
  </div>


  </div>
  )
}
