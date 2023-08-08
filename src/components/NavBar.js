import React from "react";
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import styles from "../styles/NavBar.module.css"
import { Link } from "react-router-dom";
import axios from 'axios';
import Avatar from './Avatar';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';


const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const [toggleNavBar, setToggleNavBar] = useState(false);

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      setToggleNavBar(!toggleNavBar);
    } catch (err) {
      console.log(err);
    }
  };

  const createPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/posts/create"
      onClick={() => {
        setToggleNavBar(!toggleNavBar);
      }}
    >
      <i className="fa-solid fa-square-plus"></i> Post
    </NavLink>
  );

  const loggedInIcons = (
    <>
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/events"
      onClick={() => {
        setToggleNavBar(!toggleNavBar);
      }}
      >
      <i className="fa-solid fa-calendar-days"></i>Events
    </NavLink>
    <NavDropdown 
        title={
          <span>
            <i className="fas fa-user-alt ml-5"></i>
          </span>
        }
        id="basic-nav-dropdown" 
      >
      <NavDropdown.Item 
        className={styles.NavLink}
        id={styles.dropdownItems}
        as={Link} 
        to={`/profiles/${currentUser?.profile_id}`}
        onClick={() => {
          setToggleNavBar(!toggleNavBar);
        }}
      >
      <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item 
        className={styles.NavLink}
        id={styles.dropdownItems}
        as={Link} 
        to="/" 
        onClick={handleSignOut}
      >
      <i className="fas fa-sign-out-alt"></i>Sign out
      </NavDropdown.Item>
    </NavDropdown>
    </>
  )

  const loggedOutIcons = (
    <>
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/signin"
      onClick={() => {
        setToggleNavBar(!toggleNavBar);
      }}
      >
      <i className="fa-solid fa-right-to-bracket"></i>Sign In
    </NavLink>
    <NavLink 
      to="/signup"
      className={styles.NavLink}
      activeClassName={styles.Active}
      onClick={() => {
        setToggleNavBar(!toggleNavBar);
      }}
      >
      <i className="fa-solid fa-user-plus"></i>Sign Up
      </NavLink>
  </>
  )
  return (
    <Navbar
      collapseOnSelect
      className={styles.NavBar}
      expand="lg"
      fixed='top'
      expanded={toggleNavBar}
      >
        <Container>
          <NavLink to="/">
          <Navbar.Brand
           className={styles.NavBrand}
           alt="logo"
           >
            <i className="fa-solid fa-code" aria-hidden="true"></i>
            <span>Pythonista</span>
          </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle
            onClick={() => {
              setToggleNavBar(!toggleNavBar);
            }}
            aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="ml-auto text-center"> 
                <NavLink
                  exact
                  className={styles.NavLink}
                  activeClassName={styles.Active}
                  to="/"
                  onClick={() => {
                    setToggleNavBar(!toggleNavBar);
                  }}
                  >
                <i className="fa-solid fa-house"></i>Home
                </NavLink>
                {currentUser && createPostIcon}
                {currentUser ? loggedInIcons : loggedOutIcons}
              </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar