// import bootstrap 
import {Container, Row, Col} from 'react-bootstrap'




// React Function 

function aboutMe() {

    return (
        <Container>
        <Row>
          <Col sm={6}>
              <h1>Image</h1>
              </Col>
          <Col sm={6}>
              <h2> Hi There, I'm Adrian!</h2>
              <p>I'm a full stack web developer, with a background in customer service analytics. BLAH BLAH BLAH.   </p>
          </Col>
        </Row>
        <Row>
            <Col sm>
                <p>Techinical</p>
                <ul>
                    <li>skill 1</li>
                    <li>skill 2</li>
                </ul>
            </Col>
            <Col sm>
            <p>Professionally</p>
                <ul>
                    <li>skill 1 </li>
                    <li>Skill 2</li>
                </ul>
            </Col>
            <Col sm>
            <p>Personally</p>
                <ul>
                    <li>Skiing</li>
                    <li>My dog</li>
                </ul>
            </Col>
        </Row>
      </Container>
    )
}

export default aboutMe