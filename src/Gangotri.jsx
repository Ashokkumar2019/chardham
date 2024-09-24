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
      src="./assets/Basrinath-s.mp4"
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
          <h1>गंगोत्री यात्रा का विवरण</h1>
          <section>
            <h2>स्थान</h2>
            <p><strong>जिला:</strong> उत्तरकाशी, उत्तराखंड</p>
            <p><strong>ऊँचाई:</strong> लगभग 3,048 मीटर (10,000 फीट) समुद्रतल से</p>
        </section>

        <section>
            <h2>धार्मिक महत्व</h2>
            <p><strong>मुख्य देवता:</strong> माँ गंगा</p>
            <p><strong>मंदिर:</strong> गंगोत्री मंदिर, जो माँ गंगा की पूजा के लिए प्रसिद्ध है। मंदिर में माँ गंगा की एक पवित्र मूर्ति है, जो तीर्थयात्रियों के लिए विशेष महत्व रखती है।</p>
        </section>

        <section>
            <h2>इतिहास और पौराणिक कथा</h2>
            <p><strong>पौराणिक कथा:</strong> पौराणिक कथाओं के अनुसार, गंगा नदी का अवतरण भगवान शिव के जटाओं से हुआ था। गंगोत्री वह स्थल है जहां गंगा नदी धरती पर पहली बार आई थी।</p>
            <p><strong>इतिहास:</strong> गंगोत्री मंदिर का निर्माण 18वीं शताब्दी में राजा प्रताप शाह द्वारा किया गया था। यह स्थल तीर्थयात्रियों के लिए हमेशा एक महत्वपूर्ण स्थान रहा है।</p>
        </section>

        <section>
            <h2>मुख्य आकर्षण</h2>
            <ul>
                <li><strong>गंगोत्री मंदिर:</strong> यह मंदिर उत्तराखंड के महत्वपूर्ण तीर्थ स्थलों में से एक है। यहाँ माँ गंगा की पूजा की जाती है और यह स्थल हर साल लाखों तीर्थयात्रियों को आकर्षित करता है।</li>
                <li><strong>गंगनाणी:</strong> गंगोत्री मंदिर के पास स्थित गर्म पानी का स्रोत। इसे भी पवित्र माना जाता है और यहाँ स्नान करने के लिए तीर्थयात्री आते हैं।</li>
                <li><strong>धाराली:</strong> यह एक छोटा सा गाँव है जो गंगोत्री के पास स्थित है। यहाँ से गंगोत्री का सुंदर दृश्य देखने को मिलता है।</li>
                <li><strong>भैरों घाटी:</strong> यह स्थान गंगोत्री से कुछ दूर है और यहाँ भैरों बाबा का मंदिर स्थित है। धार्मिक मान्यता है कि यहाँ दर्शन करने से यात्रा पूरी होती है।</li>
            </ul>
        </section>

        <section>
            <h2>यात्रा और मौसम</h2>
            <p><strong>यात्रा का समय:</strong> आमतौर पर अप्रैल से नवंबर तक यात्रा की जाती है। सर्दियों में अत्यधिक ठंड और बर्फबारी के कारण मंदिर बंद रहता है।</p>
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
