import { motion } from "motion/react";
// const { scrollYProgress } = useScroll();

import { Row, Col, Image, Container, CardImg } from "react-bootstrap";
import opsgLogo from "../../assets/img/opsg-logo.png";
import nurseSmiling from "../../assets/img/nurseSmiling.jpg";
import NavBar from "../Navbar";
import AnimationCountUp from "../../utils/AnimationCountUp";
import "./home.css";
import "../../../src/app.css";
import HomeInfoCards from "../../utils/HomeInfoCards";
import usaMap from "../../assets/img/usaMap.png";
import Footer from "../../utils/footer";

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
    <div
      className="background"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <div className="backgroundAccent" style={{ flex: 1 }}>
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
                <Col className="display-1" md="auto" style={{ margin: "auto" }}>
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
          <Footer />
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
