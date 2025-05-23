import { Row, Col, Container } from "react-bootstrap";
import React from "react";
import NavBar from "../Navbar";
import CredentialsCards from "../../utils/ServicesCards/CredentialsCards";
import EnrollmentCards from "../../utils/ServicesCards/EnrollmentCards";
import ConsultingCards from "../../utils/ServicesCards/ConsultingCards";


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
        <div>
          <h2>Credentials</h2>
          <h3>Recredentialing, Applications and License Renewals</h3>
          <CredentialsCards></CredentialsCards>
        </div>
        <div>
          <h2>Enrollment</h2>
          <h3>Group Providers and Individual Providers Serving Commercial and Government Payers, Medicare Opt-Out</h3>
          <EnrollmentCards></EnrollmentCards>
        </div>
        <div>
          <h2>Consulting</h2>
          <h3>Development Planning Assessing Compliance, Risk, and Opportunities</h3>
          <ConsultingCards></ConsultingCards>
        </div>
      </div>
    </>
  );
};
export default ourServices;
