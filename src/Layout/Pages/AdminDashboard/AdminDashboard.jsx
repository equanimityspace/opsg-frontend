import "./adminDashboard.css";
import AdminNav from "../../../Features/Navigations/Navbars/AdminNav";
import flowersImage from "../../../assets/img/beautiful-flowers.png";
import InfoCard from "../../../utils/InfoCard";
import { useDisconnectQuery } from "../../../Slices/qbSlice";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function AdminPage() {
  const qbDisconnect = () => {
    useDisconnectQuery(); // TODO fix  this!!!!
  };

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
                title="Connect app to QuickBooks"
                text={
                  <Button
                    variant="primary"
                    onClick={() => {
                      window.location.href =
                        "https://opsg-backend.onrender.com/qbauth/connect";
                    }}
                  >
                    Connect
                  </Button>
                }
              />
            </Col>
            <Col>
              <InfoCard
                bg="secondary"
                title="Disconnect app from QuickBooks"
                text={
                  <Button variant="danger" onClick={() => qbDisconnect()}>
                    Disconnect
                  </Button>
                }
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
