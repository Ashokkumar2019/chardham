import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Lastvisit from './Lastvisit';
import Footers from './Footers';
import Blogs from './Blogs';
export default function About() {
  return (
  <div><img src="./src/assets/about.jpg" alt="" className='w-100'/>
  <br />
  <div className='aboutback pt-5'>
  
 <Container>
  <div className='text-center pb-5'><h1>चार धाम यात्रा कंपनी</h1>
  <p>10+ वर्षों का अनुभव, 10000+ संतुष्ट यात्री, सुरक्षित और यादगार यात्रा</p></div>
 
  <Row className='justify-content-between'>
    <Col md={6} sm={12}>
    <h2>हमारे बारे में</h2>
    <p>हमारी कंपनी [आपकी कंपनी का नाम] चार धाम यात्रा के लिए विशेष रूप से तैयार की गई सेवाएं प्रदान करती है। हम यात्रियों को सुरक्षित और आरामदायक यात्रा का अनुभव प्रदान करते हैं, जो उनके धार्मिक और आध्यात्मिक उद्देश्यों को पूर्ण करने में मदद करती है।</p>
    <h2>हमारी विशेषज्ञता</h2>
    <ul>
                <li>10+ वर्षों का अनुभव</li>
                <li>10000+ संतुष्ट यात्री</li>
                <li>पेशेवर गाइड और सेवाएं</li>
                <li>सुरक्षित यात्रा और चिकित्सा सहायता</li>
            </ul>
    </Col>
    <Col md={6} sm={12}>
    <h2>हमारी सेवाएं</h2>
    <ul>
                <li>चार धाम यात्रा पैकेज (बद्रीनाथ, केदारनाथ, गंगोत्री, यमुनोत्री)</li>
                <li>लक्सरी और बजट पैकेज</li>
                <li>हेलीकॉप्टर यात्रा सेवाएं</li>
                <li>यात्रा बीमा और मेडिकल सहायता</li>
                <li>पर्सनलाइज्ड पैकेज</li>
            </ul>
            <h2>यात्रा के मुख्य आकर्षण</h2>
            <ul>
                <li>बद्रीनाथ धाम – भगवान विष्णु का निवास</li>
                <li>केदारनाथ धाम – भगवान शिव का प्रमुख ज्योतिर्लिंग</li>
                <li>गंगोत्री – गंगा नदी का उद्गम स्थल</li>
                <li>यमुनोत्री – यमुना नदी का उद्गम स्थल</li>
            </ul>
    </Col>
  </Row>
  <div className='text-center pt-5'>
  <h2>ग्राहक प्रशंसा</h2>
 <p>"चार धाम यात्रा के दौरान हमें जितनी सुविधा और सुरक्षा मिली, वह आपकी कंपनी के कारण ही संभव हो पाई।" — [ग्राहक का नाम]</p>
 <p>"हेलीकॉप्टर सेवा और गाइड द्वारा दी गई जानकारी ने हमारी यात्रा को अविस्मरणीय बना दिया।" — [दूसरे ग्राहक का नाम]</p>
 </div>
 </Container>
 
            
  </div>
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
