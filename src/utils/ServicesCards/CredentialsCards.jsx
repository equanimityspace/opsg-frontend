import React from "react";
import { Card, CardBody } from "react-bootstrap";
import certificate from "../Assets/img/certificate.png"


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
    <div>
      {cardData.map((card, index) => (
        <Card
          key={index}
          className="info-card"
          style={{ backgroundColor: "#79cbbb",
          margin: "3vw",
           }}
        >
          <CardBody style={{display: "flex",
            flexDirection: "column",
            maxWidth: "270px",
            }}>
            <Card.Img src={card.src} alt={card.alt} className="override"
            style={{
              width: "25%",
              display: "block",
              alignSelf: "anchor-center",
              paddingBottom: "4vh",
              paddingTop: "3vh",
            }}/>
            <Card.Title
            style={{
              display: "block",
              paddingBottom: "1em",
            }}
            >{card.title}</Card.Title>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default CredentialsCards;