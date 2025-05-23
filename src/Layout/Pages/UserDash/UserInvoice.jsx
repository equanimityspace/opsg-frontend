import "./userDashboard.css";
import { UserNav } from "../../../Features/Navigations/Navbars/UserNav";
import opsgLogo from "../../../assets/img/opsg-logo.png";
import InfoCard from "../../../utils/InfoCard";
import { Row, Col, Image, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import Balance from "../../../utils/qbCustomer/Balance";
import FullName from "../../../utils/qbCustomer/FullName";

export default function UserInvoice() {
  const objId = useParams();
  const id = objId.userId;

  return (
    <div className="backgroundAccent">
      <div className="page">
        <Container>
          <Row className="justify-content-md-center">
            <UserNav />
            <Col
              className="display-3 mt-4"
              style={{
                fontWeight: "200",
                color: "black",
                fontSize: "30px",
                paddingTop: "20px",
                paddingBottom: "50px",
              }}
            >
              OnPoint User Dashboard
            </Col>
          </Row>
          <Row
            className="justify-content-md-center mt-4"
            xs={12}
            md={12}
            lg={12}
          >
            <Col>
              <FullName bg="primary" id={id} />
            </Col>
            <Col className="balanceCard">
              <Balance bg="danger" id={id} />
            </Col>
          </Row>
          <Row className="justify-content-md-center"></Row>
        </Container>
      </div>
    </div>
  );
}
