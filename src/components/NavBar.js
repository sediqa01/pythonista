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
                <Nav className="ml-auto text-left">
                  <Nav.Link>
                  <i class="fa-solid fa-house"></i> Home
                  </Nav.Link>
                  {/* <Nav.Link>
                  <i class="fa-solid fa-square-plus"></i> Create Post
                  </Nav.Link>
                  <Nav.Link>
                  <i class="fa-solid fa-calendar-days"></i> Meetup
                  </Nav.Link> */}
                  <NavDropdown
                      title={
                        <span>
                            <i className="fas fa-user-alt ml-5"></i>
                        </span>
                      }
                      id="basic-nav-dropdown">
                      <NavDropdown.Item>
                      <i class="fa-solid fa-right-to-bracket"></i> Sign In
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                      <i class="fa-solid fa-user-plus"></i> Sign Up
                      </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar