import React from "react";
import { Card, CardBody, Row, Col, Container } from "react-bootstrap";
import certificate from "../../assets/img/certificate.png";

const CredentialsCards = () => {
  const cardData = [
    {
      src: certificate,
      alt: "Certificate",
      className: "homeCards",
      title: "Healthcare Facilities",
    },
    {
      src: certificate,
      alt: "Certificate",
      className: "homeCards",
      title: "ASC",
    },
    {
      src: certificate,
      alt: "Certificate",
      className: "homeCards",
      title: "Staffing Agencies",
    },
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        {cardData.map((card, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={4}
            className="mb-4 d-flex"
          >
            <Card
              key={index}
              className="info-card"
              style={{ backgroundColor: "#79cbbb", margin: "3vw" }}
            >
              <CardBody
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "270px",
                }}
              >
                <Card.Img
                  src={card.src}
                  alt={card.alt}
                  className="override"
                  style={{
                    width: "25%",
                    display: "block",
                    alignSelf: "anchor-center",
                    paddingBottom: "4vh",
                    paddingTop: "3vh",
                  }}
                />
                <Card.Title
                  style={{
                    display: "block",
                    paddingBottom: "1em",
                  }}
                >
                  {card.title}
                </Card.Title>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CredentialsCards;
