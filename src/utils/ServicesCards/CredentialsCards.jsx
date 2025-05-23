import React from "react";
import { Card, CardBody, Row, Col, Container } from "react-bootstrap";
import certificate from "../../Assets/img/certificate.png"


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
        <Col key={index} xs={12} sm={6} md={4} lg={3} xl={4} className="mb-4 d-flex">
        <Card
          className="info-card flex-grow-1"
          style={{ backgroundColor: "#79cbbb", minHeight: "220px", maxWidth: "300px"}}
        >
          <CardBody className="d-flex flex-column align-items-center text-center">
            <Card.Img 
            src={card.src} 
            alt={card.alt}
            style={{
              width: "25%",
              paddingBottom: "4vh",
              paddingTop: "3vh",
            }}/>
            <Card.Title>{card.title}</Card.Title>
          </CardBody>
         </Card>
        </Col>
      ))}
     </Row>
    </Container>
  );
};

export default CredentialsCards;