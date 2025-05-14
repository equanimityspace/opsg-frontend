import "./adminDashboard.css";
import AdminNav from "../../../Features/Navigations/Navbars/AdminNav";
import flowersImage from "../../../assets/img/beautiful-flowers.png";

import { Row, Col, Container, Image } from "react-bootstrap";
import InfoCard from "../../../utils/InfoCard";

export default function AdminPage() {
  return (
    <>
      <div className="page">
        <AdminNav />
        <Container data-bs-theme="dark">
          <Row className="justify-content-md-center">
            <Col className="display-3 mt-4" md="auto">
              OnPoint Admin Dashboard
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-4">
            <Col xs lg="3">
              <InfoCard
                bg="success"
                title="Total Users"
                text="import number of registered users"
              />
            </Col>
            <Col xs lg="3">
              <InfoCard
                bg="secondary"
                title="Total Owed"
                text="import unpaid $ amount"
              />
            </Col>
          </Row>
          <Row>
            <Image src={flowersImage} roundedCircle className="mb-3 mt-3" />
          </Row>
        </Container>
      </div>
    </>
  );
}
