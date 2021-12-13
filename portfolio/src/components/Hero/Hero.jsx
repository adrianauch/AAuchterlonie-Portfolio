import "../Hero/hero.css"
import MyImage from "../Hero/bit3.png"
import {Container, Row, Col, Image} from 'react-bootstrap'

function Hero (){
    return (
      <Container>
        <Row>
        <Col xs={6} > 
        <Image src={MyImage} fluid ></Image>
        </Col>
        
        <Col className="para">
          <div>
         <p>Hi There! </p>
         <p>My name is Adrian Auchterlonie. Welcome to my portfolio.</p>
          <p>I'm a Denver based Full-Stack developer with a background in customer service analytics. I have a passion for problem-solving, data and project management and I am looking to build applications with a user in mind to push businesses forward.</p>
          <p>Want to Say Hi?</p>
          </div>
          
          </Col>
        </Row>
        
       
      



      </Container>
    )
}








export default Hero