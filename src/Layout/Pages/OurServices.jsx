import { Row, Col, Container } from "react-bootstrap";
import React from "react";
import NavBar from "../Navbar";
const ourServices = () => {
  return (
    <>
      <div className="backgroundAccent" style={{ zIndex: "-1" }}>
        <NavBar />
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            paddingTop: "82px",
            backgroundColor: "#7c295e",
            textAlign: "center",
            width: "80vw",
          }}
        >
          <h1 style={{ margin: 0 }}>Why Choose OnPoint Solutions?</h1>
          <h3 style={{ margin: 0 }}>
            At OnPoint Solutions Group, our goal is to provide innovative
            credentialing and enrollment services that help our clients manage
            the constantly changing healthcare environment. We believe that
            credentialing and enrollments are the start of the patient care
            experience and the revenue cycle. Everything we do is focused on
            assisting our clients with effectively managing their credentialing
            and enrollment lifecycle, thereby increasing availability of care to
            patients and generating more income in less time. We pride ourselves
            with providing individualized care. We assign a certified provider
            credentialing specialist (CPCS) to each client to ensure we are not
            only meeting but exceeding our client's expectations. We give our
            clients the ability to focus on patient care and providing them the
            tools to operationally and financially prosper is our passion.
          </h3>
        </div>
      </div>
    </>
  );
};
export default ourServices;
