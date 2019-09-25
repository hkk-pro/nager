import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand href="#home">Nager.Date</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Countries</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://github.com/arcevit/nager">
            <i className="fab fa-github"></i> Github
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
