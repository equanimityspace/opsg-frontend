import { motion } from "motion/react";
// const { scrollYProgress } = useScroll();

import { Row, Col, Image, Container } from "react-bootstrap";
// import React from "react";
import opsgLaptop from "../../assets/img/opsg-laptop.jpg";
import opsgLogo from "../../Assets/img/opsg-logo.png";
import nurseSmiling from "../../Assets/img/nurseSmiling.jpg"
import NavBar from "../Navbar";
import AnimationCountUp from "../../utils/AnimationCountUp";

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
        <div className="logoContainer">
                  <img
                    src={opsgLogo}
                    // className="rounded-circle usr-image2"
                    style={{
                      width: "auto",
                      height: "100px",
                    }}
                  ></img>
            <h3 style={{fontWeight: "200", paddingTop: "32px", paddingLeft: "10px"}}>OnPoint Solutions Group</h3>
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
            <Col className="display-1" md="auto">
              You care for patients
            </Col>
          </Row>
          <Row className="justify-content-md-center" style={{color: "#558e89",}}>
            <Col className="display-1" md="auto">
              We'll take care of the rest
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-3 mb-5"
          style={{
            display: "flex",
            paddingRight: "1rem",
          }}
          >
            <Col className="text-muted" md="auto">
            <div className="secondaryHeaderBox">
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
          <Row>
            <Col md="auto" style={{textAlign: "center"}}>
            <div className="imageWrapper">
              <Image 
              className="mainImage" src={nurseSmiling} fluid rounded thumbnail alt="Nurse Smiling" loading="lazy"/>
              </div>
            </Col>
          </Row>
        </motion.div>
        {/* no animation */}
        <Row className="justify-content-md-center text-primary mt-5 mb-5">
          <Col md="auto">
            {/* consider rising number */}
            <h3 style={{marginTop: "800px"}}>
              Trusted by over <AnimationCountUp from={0} to={50} />{" "}
              practitioners, providers, and hospitals.
            </h3>
          </Col>
        </Row>
      </Container>
          <footer style={{backgroundColor: "#558e89", height: "400px", marginTop: "210px"}}>
            <p className="footer">test footer insert names of reps or address? idk..</p> 
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
