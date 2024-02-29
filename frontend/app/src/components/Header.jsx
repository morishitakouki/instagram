import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import '../App.css';

const Header = () => {
  return (
    <Navbar className="custom-navbar" variant="light">
      <Container>
        <Navbar.Brand href="#home">My Stylish Header</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;