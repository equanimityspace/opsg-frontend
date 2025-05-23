import { motion } from "motion/react";
// const { scrollYProgress } = useScroll();

import { Row, Col, Image, Container, CardImg } from "react-bootstrap";
import React from "react";
import opsgLaptop from "../../assets/img/opsg-laptop.jpg";
import opsgLogo from "../../Assets/img/opsg-logo.png";
import nurseSmiling from "../../Assets/img/nurseSmiling.jpg";
import NavBar from "../Navbar";
import AnimationCountUp from "../../utils/AnimationCountUp";
import "./home.css";
import "../../../src/app.css";
import HomeInfoCards from "../../utils/HomeInfoCards";
import usaMap from "../../Assets/img/usaMap.png";
import phone from "../../Assets/img/phone.png";
import fax from "../../Assets/img/fax.png";

const Home = () => {
  // animate fading in
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
    <div className="background">
      <div className="backgroundAccent">
        {/* <motion.div style={{ scaleX: scrollYProgress }} /> */}
        <NavBar />
        <div className="nameLogo">
          <div
            className="logoContainer"
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "clamp(16px, 3vw, 100px)",
              fontWeight: "200",
            }}
          >
            <img
              src={opsgLogo}
              // className="rounded-circle usr-image2"
              style={{
                width: "10vw",
                height: "auto",
                paddingRight: "1vw",
              }}
            ></img>
            <Row>
              <Col>OnPoint Solutions Group</Col>
            </Row>
          </div>

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
                <Col className="display-1" md="auto" style={{margin: "auto"}}>
                  You care for patients
                </Col>
              </Row>
              <Row
                className="justify-content-md-center"
                style={{ color: "#558e89" }}
              >
                <Col className="display-1" md="auto">
                  We'll take care of the rest
                </Col>
              </Row>

              <Row
                className="justify-content-md-center mt-3 mb-5"
                style={{
                  display: "flex",
                }}
              >
                <Col className="text-muted">
                  <div
                    className="secondaryHeaderBox"
                    style={{ verticalAlign: "middle" }}
                  >
                    <div className="secondHeader">Credentials </div>
                    <div className="secondHeader">Enrollments</div>
                    <div className="secondHeader">Consulting</div>
                  </div>
                </Col>
              </Row>
            </motion.div>

            {/* animate fade in going up */}
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={1} // make y positive, so fade in from bottom moving up
            >
              <div className="mainImage">
                <img
                  className="mainImage"
                  src={nurseSmiling}
                  fluid="true"
                  rounded="true"
                  thumbnail="true"
                  alt="Nurse Smiling"
                  loading="lazy"
                  style={{
                    margin: "auto",
                  }}
                />
              </div>

              <div
                className="counterWrapper"
                style={{
                  marginTop: "7vh",
                  marginBottom: "7vh",
                  display: "grid",
                  justifyContent: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "clamp(3.5vw, 6px, 2vw)",
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  Trusted by over <AnimationCountUp from={0} to={50} />{" "}
                  Hospitals, providers, and practicioners
                </h3>
              </div>
              <img className="usMap" src={usaMap} alt="United States Map"></img>

              <div
                className="cardsContainer"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                  gap: "3vw",
                }}
              >
                <div>
                  <HomeInfoCards></HomeInfoCards>
                </div>
              </div>
            </motion.div>
            {/* no animation */}
          </Container>
          <footer
            style={{
              backgroundColor: "#558e89",
              height: "40vh",
              marginTop: "100px",
            }}
          >
            <div className="footerTextWrapper" 
            style={{ display: "flex",
                flexWrap: "wrap",
                wrapDirection: "column",
                justifySelf: "center",
                gap: "8vw",
                paddingTop: "5vh",
              }}>
            <div className="footerTextBoxes">
                <p>M. Michelle Zachary, CPCS, CPMSM<br />  
                  <a href="mailto:szachary@onpointsolutionsgroup.org">
                  szachary@onpointsolutionsgroup.org</a>
                </p>
            </div>
            <div className="footerTextBoxes">
                <p>M. Catherine Cutrone, CPCS<br />
                  <a href="mailto:ccutrone@onpointsolutionsgroup.org">
                    ccutrone@onpointsolutionsgroup.org</a>
                </p>
            </div>
          </div>
            <div className="btmFooterTextBox"
            style={{
                // display: "flex-box",
                // flexDirection: "column",
                // alignItems: "center",
                // width: "50vw",
                // transform: "translate(70%, 50%)",
            }}>

              <p className="wrap-box strict">General Inquiries:<br />
                <img src={phone} 
                style={{
                  width: "5%",
                  margin: "1vw"}}>
                    </img>(970) 394-5560<br />

                <img src={fax}
                style={{
                  width: "5%",
                  margin: "1vw",}}>

                  </img>(970) 317-2233<br />
                </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

// import { useDeleteProfileMutation } from "../app/mainSlice";
// import { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
// import InfoModal from "./Modal";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   // using navgate for update profile button
//   const navigate = useNavigate();
//   const [deleteUser] = useDeleteUserMutation();

//   const { data, isLoading, isError } = useGetAllUsersQuery(); // get all users

//   useEffect(() => {
//     if (isError) {
//       setResponse(data?.error.status || "unknown error");
//       // openModal();
//       navigate("/login");
//     } else {
//       navigate("/");
//     }
//   }, [isError]);

//   // Modal logic
//   const [response, setResponse] = useState("");
//   const [show, setShow] = useState(false);
//   const openModal = () => setShow(true);
//   const closeModal = () => setShow(false);

//   //handleDelete for delete button
//   const handleDelete = async (userId) => {
//     try {
//       await deleteUser(userId).unwrap();
//     } catch (error) {
//       console.error(error.message);
//       openModal();
//     }
//   };

//   return (
//     <article>
//       {show ? (
//         <InfoModal
//           show={show}
//           hide={closeModal}
//           heading="Error"
//           body={response || "unknown error"}
//         />
//       ) : (
//         <>
//           <h2>Our users</h2>
//           <div className="user-list">
//             <Accordion>
//               {data && !isError ? (
//                 data?.map((user) => (
//                   <div key={user.id} className="user-info">
//                     <Accordion.Item eventKey={user.id}>
//                       <Accordion.Header className="user-info">
//                         {user.email} {user.firstName} {user.lastName}
//                       </Accordion.Header>
//                       <Accordion.Body>
//                         <Button
//                           variant="primary"
//                           onClick={() => navigate(`user/${user.id}`)}
//                         >
//                           Update User
//                         </Button>
//                         <Button
//                           variant="primary"
//                           onClick={() => handleDelete(user?.id)}
//                         >
//                           Delete User
//                         </Button>
//                       </Accordion.Body>
//                     </Accordion.Item>
//                   </div>
//                 ))
//               ) : (
//                 <></>
//               )}
//             </Accordion>
//           </div>
//         </>
//       )}
//     </article>
//   );
// }
export default Home;
