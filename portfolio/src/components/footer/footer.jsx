
import {Container, Row, Col} from 'react-bootstrap'
import {BsLinkedin,BsGithub,BsFillFileEarmarkTextFill,BsFillHouseDoorFill} from 'react-icons/bs'



function footer() {
  

  return (
    <Container>
    <Row>
      <Col><BsLinkedin/></Col>
      <Col><BsFillHouseDoorFill/></Col>
      <Col>Adrian Auchterlonie</Col>
      <Col><BsGithub/></Col>
      <Col><BsFillFileEarmarkTextFill/></Col>
    </Row>
  </Container>
  );
}

export default footer