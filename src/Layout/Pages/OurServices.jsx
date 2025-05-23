import { Row, Col, Container } from "react-bootstrap";
import { motion } from "motion/react";
import React from "react";
import NavBar from "../Navbar";
import CredentialsCards from "../../utils/ServicesCards/CredentialsCards";
import EnrollmentCards from "../../utils/ServicesCards/EnrollmentCards";
import ConsultingCards from "../../utils/ServicesCards/ConsultingCards";

import "./ourservices.css";

import Footer from "../../utils/footer";

const ourServices = () => {
  const fadeInAnimationVariants = {
    initial: (direction) => ({
      opacity: 0,
      y: 100 * direction,
    }),
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  return (
    <>
      <div className="backgroundAccent" style={{ zIndex: "-1", width: "100%" }}>
        <NavBar />
        <Container className="main mt-5" fluid>
          {/* animate fade in going down */}
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={-1} // make y negative, so fade in from top moving down
          >
            <Row className="justify-content-md-center">
              <Col
                className="display-1"
                md="auto"
                style={{
                  margin: "auto",
                  paddingTop: "1.5em",
                  fontSize: "5vw",
                  paddingBottom: ".75em",
                }}
              >
                Why Choose OnPoint Solutions?
              </Col>
            </Row>
            <Row
              className="justify-content-md-center"
              style={{ color: "#558e89" }}
            >
              <Col
                className="display-1"
                md="auto"
                style={{
                  fontSize: "2vw",
                  fontWeight: "200",
                  width: "80vw",
                  paddingBottom: "6vw",
                }}
              >
                <ul className="whyChoose">
                  <li className="whyChooseParag">
                    <strong>Support:</strong> Every client is assigned a
                    Certified Provider Credentialing Specialist (CPCS) to ensure
                    personalized service and attention to detail.
                  </li>
                  <li className="whyChooseParag">
                    <strong>Streamlined Processes:</strong> We manage the entire
                    credentialing and enrollment lifecycle, so you can focus on
                    what matters most—patient care.
                  </li>
                  <li className="whyChooseParag">
                    <strong>Faster Revenue Cycles:</strong> Our efficient
                    systems help you get credentialed quicker, increasing
                    patient access and accelerating your income.
                  </li>
                  <li className="whyChooseParag">
                    <strong>Individualized Service:</strong> No
                    one-size-fits-all solutions here. We tailor our approach to
                    meet your unique operational and financial goals.
                  </li>
                </ul>
              </Col>
            </Row>
          </motion.div>
        </Container>

        {/* Credentials Section */}
        <Container className="py-5 justify-content-center">
          <h2 className="text-center cardheader">Credentials</h2>
          <h3 className="text-center mb-4 mx-auto cardPara">
            Recredentialing, Applications and License Renewals
          </h3>
          <CredentialsCards />
        </Container>

        {/* Enrollment Section */}
        <Container className="py-5">
          <h2 className="text-center cardheader">Enrollment</h2>
          <h3
            className="text-center mb-4 mx-auto cardPara"
            style={{ maxWidth: "55%" }}
          >
            Medicare Opt-Out, Group Providers and Individual Providers Serving
            Commercial and Government Payers
          </h3>
          <EnrollmentCards />
        </Container>

        {/* Consulting Section */}
        <Container className="py-5">
          <h2 className="text-center cardheader">Consulting</h2>
          <h3
            className="text-center mb-4 mx-auto cardPara"
            style={{ maxWidth: "45%" }}
          >
            Development Planning Assessing Compliance, Risk, and Opportunities
          </h3>
          <ConsultingCards />
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default ourServices;
