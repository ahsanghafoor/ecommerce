import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import {Link} from 'react-router-dom';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" varient="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand> ProShop </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart/:id">
                <Nav.Link>
                  <li className="fa fa-shopping-cart px-1"></li> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <li className="fa fa-user px-1"></li> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
