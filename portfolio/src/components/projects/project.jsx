import { useState } from 'react';
import {Container, Row, Col,Button, Offcanvas, Card, CardGroup} from 'react-bootstrap'

function Projects (){
// offCanvas 
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
    <Container>
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Grip</Card.Title>
      <Card.Text>
        <p>Get A Grip On Your Next Group Trip</p>
        <ul>
            <li>JavaScript</li>
        </ul>
      </Card.Text>
      <Button variant="primary" onClick={handleShow}>
        More information
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Links here?</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Grip</Card.Title>
      <Card.Text>
        <p>Get A Grip On Your Next Group Trip</p>
        <ul>
            <li>JavaScript</li>
        </ul>
      </Card.Text>
      <Button variant="primary" onClick={handleShow}>
        More information
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Links here?</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Grip</Card.Title>
      <Card.Text>
        <p>Get A Grip On Your Next Group Trip</p>
        <ul>
            <li>JavaScript</li>
        </ul>
      </Card.Text>
      <Button variant="primary" onClick={handleShow}>
        More information
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Links here?</small>
    </Card.Footer>
  </Card>
</CardGroup>
<CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Grip</Card.Title>
      <Card.Text>
        <p>Get A Grip On Your Next Group Trip</p>
        <ul>
            <li>JavaScript</li>
        </ul>
      </Card.Text>
      <Button variant="primary" onClick={handleShow}>
        More information
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Links here?</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Grip</Card.Title>
      <Card.Text>
        <p>Get A Grip On Your Next Group Trip</p>
        <ul>
            <li>JavaScript</li>
        </ul>
      </Card.Text>
      <Button variant="primary" onClick={handleShow}>
        More information
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Links here?</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Grip</Card.Title>
      <Card.Text>
        <p>Get A Grip On Your Next Group Trip</p>
        <ul>
            <li>JavaScript</li>
        </ul>
      </Card.Text>
      <Button variant="primary" onClick={handleShow}>
        More information
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Links here?</small>
    </Card.Footer>
  </Card>
</CardGroup>

      </Container>
    )

}



export default Projects
