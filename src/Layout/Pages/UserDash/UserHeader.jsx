import "./userHeader.css";
import opsgLogo from "../../../assets/img/opsg-logo.png";
import userHeader from "../UserDash/userHeader.css";

import { Row, Col, Image, Container } from "react-bootstrap";
import UserNav from "../../../Features/Navigations/Navbars/UserNav";

export default function UserHeader() {
  return (
    <div className="page">
      <AdminNav />
      <Container style={{color: "#558e89"}}>
        <Row className="justify-content-md-center">
          <Col xs={1} md={4}>
            <Image src={opsgLogo} roundedCircle className="small-image" />
          </Col>
          <Col className="display-5 mt-4" md="auto">
            OnPoint User View
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-4"></Row>
      </Container>
    </div>
  );
}
