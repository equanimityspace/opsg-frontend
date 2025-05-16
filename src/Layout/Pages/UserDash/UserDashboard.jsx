import "./userDashboard.css";
import opsgLogo from "../../../assets/img/opsg-logo.png";

import { Row, Col, Image, Container } from "react-bootstrap";
import InfoCard from "../../../utils/InfoCard";

export default function UserPage() {
  return (
    <div className="page">
      <Container data-bs-theme="dark">
        <Row className="justify-content-md-center">
          <Col xs={1} md={2}>
            <Image src={opsgLogo} roundedCircle className="small-image" />
          </Col>
          <Col className="display-3 mt-4" md="auto">
            OnPoint User Dashboard
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4">
        </Row>
      </Container>
    </div>
  );
}
