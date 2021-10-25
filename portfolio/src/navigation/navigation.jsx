// import 
import { Offcanvas, Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'




// navbar code 

function navigation() {

    return (

        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Brand href="#">Adrian Auchterlonie</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel"> Portfolio </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">About Me</Nav.Link>
                            <Nav.Link href="#action2">Work Experience</Nav.Link>
                            <Nav.Link href="#action2">Projects</Nav.Link>
                            <Nav.Link href="#action2">Contact Information</Nav.Link>
                            <NavDropdown title="More" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="https://github.com/adrianauch">Github</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.linkedin.com/in/aauchterlonie/">LinkedIn</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Email</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Resume Download
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    )







}

export default navigation