import opsgLogo from "../assets/img/opsg-logo.png";
import { Row, Col, Container } from "react-bootstrap";
import phone from "../assets/img/phone.png";
import fax from "../assets/img/fax.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#558e89",
        padding: "20px 0px 50px 0px",
        width: "100%",
        marginTop: "15%",
      }}
    >
      <Container>
        <Row className="mb-3" >
          {" "}
          <Col className="text-start">
            {" "}
            <p style={{ 
              margin: 0, 
              paddingTop: "4vw", 
              paddingBottom: "3vw",    
              display: "inline-block",
              textAlign: "center",
              paddingLeft: "15vw"
              }}>
              {" "}
              M. Michelle Zachary, CPCS, CPMSM
              <br />
              <a href="mailto:szachary@onpointsolutionsgroup.org"
              style={{
                color: "black",
                textDecoration: "none"
              }}
              >
                szachary@onpointsolutionsgroup.org
              </a>
            </p>
          </Col>
          <Col className="text-end">
            {" "}
            <p style={{ 
              margin: 0, 
              paddingTop: "4vw",     
              display: "inline-block",
              textAlign: "center",
              paddingRight: "15vw"
              }}>
              M. Catherine Cutrone, CPCS
              <br />
              <a href="mailto:ccutrone@onpointsolutionsgroup.org"
              style={{
                color: "black",
                textDecoration: "none"
              }}
              >
                ccutrone@onpointsolutionsgroup.org
              </a>
            </p>
          </Col>
        </Row>

        <div className="btmFooterTextBox">
          <Row className="justify-content-center mb-2">
            {" "}
            <Col className="text-center">
              <h4 style={{ marginBottom: "10px" }}>General Inquiries</h4>{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="d-flex justify-content-center align-items-center">
                <img src={opsgLogo} alt="Logo" style={{ width: "8%" }} />{" "}
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            {" "}
            <Col className="text-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={phone}
                  style={{
                    width: "3vw",
                    marginRight: "5px",
                  }}
                  alt="Phone"
                />
                <span>(970) 394-5560</span>
              </div>
            </Col>
            <Col className="text-center">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={fax}
                  style={{
                    width: "3vw",
                    marginRight: "5px",
                  }}
                  alt="Fax"
                />
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
