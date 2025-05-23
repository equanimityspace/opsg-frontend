import React from "react";
import { Card, CardBody, Row, Col, Container } from "react-bootstrap";
import certificate from "../../Assets/img/certificate.png";

const CredentialsCards = () => {
  const cardData = [
    {
      src: certificate,
      alt: "certificate",
      className: "homeCards",
      title: "Healthcare Facilites",
    },
    {
      src: certificate,
      alt: "certificate",
      className: "homeCards",
      title: "ASC",
    },
    {
      src: certificate,
      alt: "certificate",
      className: "homeCards",
      title: "Staffing Agencies",
    },
  ];

  return (
    <Container className="py-5 enrollment-card-container" style={{padddingBottom: "0px"}}>
      <Row className="justify-content-center">
        {cardData.map((card, index) => (
          <Col 
            key={index} 
            xs={12}
            sm={6}
            md={4}
            className="mb-4 d-flex"
          >
            <Card
              className="info-card flex-grow-1 w-100" // Added w-100 here
              style={{ 
                backgroundColor: "#79cbbb",
                minHeight: '200px', 
                maxWidth: "250px"
              }}
            >
              <CardBody className="d-flex flex-column align-items-center text-center h-100">
                <Card.Img 
                  src={card.src} 
                  alt={card.alt} 
                  style={{
                    width: "25%",
                    paddingTop: "3vh",
                  }}
                />
                <Card.Title className="mt-auto mb-0" style={{paddingBottom: "30px"}}>{card.title}</Card.Title>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CredentialsCards;