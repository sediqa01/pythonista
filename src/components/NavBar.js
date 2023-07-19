import React from 'react'
import styles from "../styles/NavBar.module.css"
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed='top'>
        <Container>
            <Navbar.Brand className={styles.NavBrand}>
              <i class="fa-solid fa-code" aria-hidden="true"></i>
              <span>Pythonista</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-left">
                  <Nav.Link className={styles.NavLink}>
                  <i class="fa-solid fa-house"></i>Home
                  </Nav.Link>
                  {/* <Nav.Link className={styles.NavLink}>
                  <i class="fa-solid fa-square-plus"></i> Create Post
                  </Nav.Link>
                  <Nav.LinkclassName={styles.NavLink} >
                  <i class="fa-solid fa-calendar-days"></i> Meetup
                  </Nav.Link> */}
                   <Nav.Link className={styles.NavLink}>
                   <i class="fa-solid fa-right-to-bracket"></i>Sign In
                  </Nav.Link>
                  <Nav.Link className={styles.NavLink}>
                  <i class="fa-solid fa-user-plus"></i>Sign Up
                  </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar