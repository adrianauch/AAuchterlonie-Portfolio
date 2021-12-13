
import {Container, Row, Col, NavLink, Navbar, Nav } from 'react-bootstrap'
import {BsLinkedin,BsGithub,BsFillFileEarmarkTextFill,BsFillEnvelopeFill} from 'react-icons/bs'



function footer() {
  

  return (
    
    <Navbar bg="dark" variant="dark" fixed="bottom" className="justify-content-center" >
    <Container>
    <Nav className="m-auto">
      <Nav.Link href="https://www.linkedin.com/in/adrianauch/">
        <BsLinkedin/>
      </Nav.Link>
      <Nav.Link href="https://github.com/adrianauch">
        <BsGithub/>
      </Nav.Link>
      <Navbar.Brand href="/homepage">Adrian Auchterlonie</Navbar.Brand>

      <Nav.Link href="mailto:adrian.auch11@gmail.com">
        <BsFillEnvelopeFill/>
      </Nav.Link>
      <Nav.Link href="#resume">
        <BsFillFileEarmarkTextFill/>
      </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
  );
}

export default footer
