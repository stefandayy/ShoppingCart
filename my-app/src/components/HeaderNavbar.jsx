import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const HeaderNavbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state)=>state.cart.totalPrice)
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <h1>myShop.</h1>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/store" className="nav-link">
              Store
            </NavLink>
          </Nav>
          <Nav>
            <NavLink to="/cart" className="nav-link">
              <CartFill /> Cart
              <Badge className="mx-1"> {totalQuantity} </Badge>
              <Badge bg="secondary" > {totalPrice.toFixed(2)}$ </Badge>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
