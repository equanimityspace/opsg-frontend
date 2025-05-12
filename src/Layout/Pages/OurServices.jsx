import { Row, Col, Container } from "react-bootstrap";
import React from "react";
import NavBar from "../Navbar";

const ourServices = () => {
  return (
    <>
    <NavBar />
    <Container className="main" fluid>
      <Row className="justify-content-md-center">
        <Col className="text-muted" md="auto">
          <h1>Our Services</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p>erghrehgg;regnewrglhnrwngelhblverjbghsregenwguhwieshglsubgeuisrhglueblurhbvlbksjbjrblebgrgb</p>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ourServices;
