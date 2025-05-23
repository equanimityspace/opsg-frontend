import { Card, CardBody, Row, Col, Container } from "react-bootstrap";
import pen from "../../Assets/img/pen.png";

const EnrollmentCards = () => {
  const cardData = [
    {
      src: pen,
      alt: "pen on paper",
      className: "homeCards",
      title: "CAQH",
    },
    {
      src: pen,
      alt: "pen on paper",
      className: "homeCards",
      title: "NPPES",
    },
    {
      src: pen,
      alt: "pen on paper",
      className: "homeCards",
      title: "PECOS",
    },
    {
      src: pen,
      alt: "pen on paper",
      className: "homeCards",
      title: "SAM",
    },
    {
      src: pen,
      alt: "pen on paper",
      className: "homeCards",
      title: "Sanitation Checks",
    },
    {
      src: pen,
      alt: "pen on paper",
      className: "homeCards",
      title: "OIG",
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
            className="mb-4 justify-content-center d-flex"
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

export default EnrollmentCards;
