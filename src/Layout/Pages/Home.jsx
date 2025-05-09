import { Row, Col, Image, Container } from "react-bootstrap";
import React from "react";
import opsgLaptop from "../../assets/img/opsg-laptop.jpg";
import NavBar from "../Navbar";

const Home = () => {
  return (
    <>
    <NavBar></NavBar>
    <Container className="main" fluid>
      {/* animate fade in going down */}
      <Row className="justify-content-md-center">
        <Col className="display-1" md="auto">
          Title With
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="display-1" md="auto">
          Power
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="text-muted" md="auto">
          <h1>Company Motto</h1>
        </Col>
      </Row>

      {/* animate fade in going up */}
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Image src={opsgLaptop} fluid rounded thumbnail />
        </Col>
      </Row>

      {/* no animation */}
      <Row className="justify-content-md-center">
        <Col md="auto">
          {/* consider rising number */}
          <h3>Trusted By Over x Clients</h3>
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
