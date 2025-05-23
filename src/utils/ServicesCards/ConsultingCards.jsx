import React from "react";
import { Card, CardBody } from "react-bootstrap";
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

export default ConsultingCards;
