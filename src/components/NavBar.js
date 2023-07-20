import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "../styles/NavBar.module.css"
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed='top'>
        <Container>
            <NavLink to="/">
            <Navbar.Brand className={styles.NavBrand}>
              <i className="fa-solid fa-code" aria-hidden="true"></i>
              <span>Pythonista</span>
            </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto text-left">
                  <NavLink
                   exact
                   className={styles.NavLink}
                   activeClassName={styles.Active}
                   to="/"
                    >
                  <i className="fa-solid fa-house"></i>Home
                  </NavLink>

                  {/* <NavLink className={styles.NavLink}>
                  <i className="fa-solid fa-square-plus"></i> Create Post
                  </NavLink>
                  <NavLink className={styles.NavLink} >
                  <i className="fa-solid fa-calendar-days"></i> Meetup
                  </NavLink> */}

                   <NavLink
                    className={styles.NavLink}
                    activeClassName={styles.Active}
                    to="/signin"
                    >
                   <i className="fa-solid fa-right-to-bracket"></i>Sign In
                  </NavLink>

                  <NavLink 
                  to="/signup"
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  >
                  <i class="fa-solid fa-user-plus"></i>Sign Up
                  </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar