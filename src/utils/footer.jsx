import opsgLogo from "../assets/img/opsg-logo.png";
import { Row, Col, Container } from "react-bootstrap";
import phone from "../assets/img/phone.png";
import fax from "../assets/img/fax.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#558e89",
        padding: "40px 0",
        width: "100%",
        marginTop: "15%",
      }}
    >
      <Container>
        <div
          className="footerTextWrapper"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8vw",
          }}
        >
          <div className="footerTextBoxes">
            <p>
              M. Michelle Zachary, CPCS, CPMSM
              <br />
              <a href="mailto:szachary@onpointsolutionsgroup.org">
                szachary@onpointsolutionsgroup.org
              </a>
            </p>
          </div>
          <div className="footerTextBoxes">
            <p>
              M. Catherine Cutrone, CPCS
              <br />
              <a href="mailto:ccutrone@onpointsolutionsgroup.org">
                ccutrone@onpointsolutionsgroup.org
              </a>
            </p>
          </div>
        </div>

        <div className="btmFooterTextBox">
          <Row className="justify-content-center mb-3">
            <Col className="text-center">
              <h4>General Inquiries</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="d-flex justify-content-center align-items-center">
                <img src={opsgLogo} alt="Logo" style={{ width: "100px" }} />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="text-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={phone}
                  style={{
                    width: "50px",
                    marginRight: "8px",
                  }}
                ></img>
                <span>(970) 394-5560</span>
              </div>
            </Col>
            <Col className="text-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={fax}
                  style={{
                    width: "50px",
                    marginRight: "8px",
                  }}
                ></img>
                <span>(970) 317-2233</span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
