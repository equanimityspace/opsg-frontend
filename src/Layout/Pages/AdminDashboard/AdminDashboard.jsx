import "./adminDashboard.css";
import AdminNav from "../../../Features/Navigations/Navbars/AdminNav";
import flowersImage from "../../../assets/img/beautiful-flowers.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import InfoCard from "../../../utils/InfoCard";

export default function AdminPage() {
  return (
    <>
      <div className="page">
        <Container data-bs-theme="dark">
          <Row>
            <Col className="navCol">
              <AdminNav />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col className="display-3 mt-4">OnPoint Admin Dashboard</Col>
          </Row>
          <Row
            className="justify-content-md-center mt-4"
            xs={12}
            md={12}
            lg={12}
          >
            <Col>
              <InfoCard
                bg="success"
                title="Total Users"
                text="import number of registered users"
              />
            </Col>
            <Col>
              <InfoCard
                bg="secondary"
                title="Total Owed"
                text="import unpaid $ amount"
              />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Image src={flowersImage} roundedCircle className="mb-3 mt-3" />
          </Row>
        </Container>
      </div>
    </>
  );
}
