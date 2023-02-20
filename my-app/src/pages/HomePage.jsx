import React from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <Container className="my-5" id="home">
      <h1 className="d-flex justify-content-center">Mockup Shop
      by Stefandayy</h1>
      <p className="d-flex justify-content-center">
        This is a mockup eCommerce filled with Fake Store API
      </p>
      <NavLink to="/store" className="d-flex justify-content-center"> <Button>Visit the store</Button></NavLink>
    </Container>
    
  );
};

export default HomePage;
