import { motion } from "motion/react";
// const { scrollYProgress } = useScroll();

import { Row, Col, Image, Container } from "react-bootstrap";
// import React from "react";
import opsgLaptop from "../../assets/img/opsg-laptop.jpg";
import NavBar from "../Navbar";
import AnimationCountUp from "../AnimationCountUp";

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
        duration: 0.5,
        delay: 0.1,
      },
    },
  };

  return (
    <>
      {/* <motion.div style={{ scaleX: scrollYProgress }} /> */}
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
            <Col className="display-1" md="auto">
              Title With
            </Col>
          </Row>
          <Row className="justify-content-md-center text-danger">
            <Col className="display-1" md="auto">
              Power
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-3 mb-5">
            <Col className="text-muted" md="auto">
              <h1>Company Motto</h1>
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
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Image src={opsgLaptop} fluid rounded thumbnail />
            </Col>
          </Row>
        </motion.div>
        {/* no animation */}
        <Row className="justify-content-md-center text-primary mt-5 mb-5">
          <Col md="auto">
            {/* consider rising number */}
            <h3>
              Trusted by over <AnimationCountUp from={0} to={50} /> providers,
              hospitals, and some other kind of client
            </h3>
          </Col>
        </Row>
      </Container>
    </>
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
