import React from "react";
import { Card, CardBody } from "react-bootstrap";
import stethoscope from "../Assets/img/stethoscope.png";
import certificate from "../Assets/img/certificate.png"
import medicalBag from "../Assets/img/medicalBag.png"


const ConsultingCards = () => {
  const cardData = [
    {
      src: certificate,
      alt: "Certificate",
      className: "homeCards",
      title: "CAQH",
    },
    {
       src: stethoscope,
       alt: "Stethoscope image",
       className: "homeCards",
       title: "NPPES",
    },
    {
       src: stethoscope,
       alt: "Stethoscope image",
       className: "homeCards",
       title: "PECOS",
    },
    {
       src: stethoscope,
       alt: "Stethoscope image",
       className: "homeCards",
       title: "SAM",
    },
    {
       src: stethoscope,
       alt: "Stethoscope image",
       className: "homeCards",
       title: "Sanitation Checks",
    },
    {
       src: stethoscope,
       alt: "Stethoscope image",
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

export default ConsultingCards;