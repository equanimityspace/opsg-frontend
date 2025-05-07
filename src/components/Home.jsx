import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import opsgLaptop from "../assets/img/opsg-laptop.jpg";

export default function Home() {
  return (
    <Container fluid>
      {/* animate fade in going down */}
      <Row className="justify-content-md-center">
        <Col className="display-1" md="auto">
          Title With
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="display-1" md="auto">
          Power
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="text-muted" md="auto">
          <h1>Company Motto</h1>
        </Col>
      </Row>

      {/* animate fade in going up */}
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Image src={opsgLaptop} fluid rounded thumbnail />
        </Col>
      </Row>

      {/* no animation */}
      <Row className="justify-content-md-center">
        <Col md="auto">
          {/* consider rising number */}
          <h3>Trusted By Over x Clients</h3>
        </Col>
      </Row>
    </Container>
  );
}
