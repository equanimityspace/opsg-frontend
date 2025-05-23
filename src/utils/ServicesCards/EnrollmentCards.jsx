import React from "react";
import { Card, CardBody } from "react-bootstrap";
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
    <div>
      {cardData.map((card, index) => (
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
      ))}
    </div>
  );
};

export default EnrollmentCards;
