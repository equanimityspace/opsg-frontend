import React from "react";
import { Card, CardBody, Row, Col, Container } from "react-bootstrap";
import flipChart from "../../assets/img/flipChart.png";

const ConsultingCards = () => {
  const cardData = [
    {
      src: flipChart,
      alt: "FlipChart",
      className: "homeCards",
      title: "Staff bylaws, policies and procedures",
    },
    {
      src: flipChart,
      alt: "FlipChart",
      className: "homeCards",
      title: "Criteria-based privledging",
    },
    {
      src: flipChart,
      alt: "FlipChart",
      className: "homeCards",
      title: "Regulatory and accrediation compliance",
    },
    {
      src: flipChart,
      alt: "FlipChart",
      className: "homeCards",
      title: "Peer review of FPPE/OPPE",
    },
    {
      src: flipChart,
      alt: "FlipChart",
      className: "homeCards",
      title: "Credential file audit",
    },
    {
      src: flipChart,
      alt: "FlipChart",
      className: "homeCards",
      title: "Staff department core functions",
    },
  ];

  return (
    <Container className="py-5 enrollment-card-container">
      <Row className="justify-content-center">
        {cardData.map((card, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={4}
            className="mb-4 d-flex justify-content-center"
          >
            <Card
              className="info-card flex-grow-1"
              style={{
                backgroundColor: "#79cbbb",
                minHeight: "220px",
                maxWidth: "300px",
              }}
            >
              <CardBody className="d-flex flex-column align-items-center text-center">
                <Card.Img
                  src={card.src}
                  alt={card.alt}
                  style={{
                    width: "25%",
                    paddingBottom: "4vh",
                    paddingTop: "3vh",
                  }}
                />
                <Card.Title>{card.title}</Card.Title>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ConsultingCards;
