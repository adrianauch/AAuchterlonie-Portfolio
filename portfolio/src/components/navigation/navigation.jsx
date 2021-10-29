// import - css
import {  Nav, Navbar, NavDropdown, Container, Link } from 'react-bootstrap'
// import router 
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
// Import other modules 
import AboutMe from '../aboutMe/aboutMe.jsx';
import ContactMe from '../contactMe/contactMe.jsx';
import PreviousWork from '../previousExperience/previousExperience.jsx';
import Projects from '../projects/project.jsx';




// navbar code 

function navigation() {
    return (
    <header>
        
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Adrian Auchterlonie</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">About</Nav.Link>
      <Nav.Link href="#features">Work</Nav.Link>
      <Nav.Link href="#features">Contact</Nav.Link>
      <Nav.Link href="#pricing">Resume</Nav.Link>
    </Nav>
    </Container>
    </Navbar>

    </header>

        
    )







}

export default navigation