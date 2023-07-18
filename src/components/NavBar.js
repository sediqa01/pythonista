import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md" fixed='top'>
        <Container>
            <Navbar.Brand>
              <i className="fa-solid fa-code" aria-hidden="true"></i>
              <span> Pythonista</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link1">Create Post</Nav.Link>
                <Nav.Link href="#link2">Meetup</Nav.Link>
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar