import { Row, Col, Container } from "react-bootstrap";
import React from "react";
import NavBar from "../Navbar";
import Form from "react-bootstrap/Form";

const contactForm = () => {
  return (
    <>
    <NavBar></NavBar>
    <Container className="main" fluid>
      <Row className="justify-content-md-center">
        <Col className="text-muted" md="auto">
          <h1>Contact Us</h1>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default contactForm ;