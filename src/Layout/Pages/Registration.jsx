import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../Slices/mainSlice";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";

import InfoModal from "../../utils/Modal";
import NavBar from "../Navbar";

export default function Registration() {
  const navigate = useNavigate();
  const [register, status] = useRegisterMutation();

  // Modal logic
  const [response, setResponse] = useState();
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  // stores data from login form
  const [formData, setFormData] = useState({
    company: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // store form data as it is typed
  const update = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // submit registartion request
  const submit = async (e) => {
    e.preventDefault();
    try {
      const payload = await register(formData).unwrap();
      // on successful registration, go to user dash
      const userId = payload.registerUser.id;
      navigate(`/user/${userId}`);
    } catch (error) {
      const errorMsg =
        typeof error.data === "string"
          ? error.data.trim()
          : error.data?.message || "Registration failed";
      setResponse(errorMsg);
      openModal();
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="d-flex justify-content-center vh-80">
        {show ? (
          <InfoModal
            show={show}
            hide={closeModal}
            heading="Error"
            body={response}
          />
        ) : (
          <></>
        )}
        <Card className="w-50 mt-5">
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="/register">
              <Nav.Item>
                <Nav.Link href="/login"
                  style={{
                    fontSize: "12px",
                    paddingBottom: "10px",
                    paddingTop: "15px",
                  }}
                >LOGIN</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/register"
                  style={{
                    fontSize: "12px",
                    paddingBottom: "10px",
                    paddingTop: "15px",
                  }}>REGISTER</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={submit}>
              <Form.Group className="mb-3" controlId="formBasicCompany">
                <Form.Label
                  style={{
                    fontSize: "12px",
                    paddingLeft: "3px",
                  }}>COMPANY</Form.Label>
                <Form.Control
                  type="text"
                  name="company"
                  placeholder="  Company"
                  onChange={update}
                  style={{
                    fontSize: "12px",
                    paddingLeft: "3px",
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label
                style={{
                    fontSize: "12px",
                    paddingLeft: "3px",
                  }}
                >FIRST NAME</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="  First name"
                  onChange={update}
                  style={{
                    fontSize: "12px",
                    paddingLeft: "3px",
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label
                  style={{
                    fontSize: "12px",
                    paddingLeft: "3px",
                  }}
                >LAST NAME</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="  Last name"
                  onChange={update}
                  style={{
                    fontSize: "12px",
                    paddingLeft: "3px",
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
               style={{
                    fontSize: "12px",
                    paddingLeft: "3px",
                  }}
                >E-MAIL</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="  johndoe@email.com"
                  onChange={update}
                  style={{
                    fontSize: "12px",
                    paddingLeft: "3px",
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label
                style={{
                    fontSize: "12px",
                    paddingLeft: "3px",
                  }}
                >PASSWORD</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="  Enter password"
                  onChange={update}
                  style={{
                    fontSize: "12px",
                    paddingLeft: "3px",
                  }}
                />
              </Form.Group>
              {!status?.isLoading ? (
                <Button variant="primary" type="submit"
                className="button3"
                  style={{
                    width: "80px",
                    fontSize: "12px",
                    marginTop: "10px",
                  }}>
                  SUBMIT
                </Button>
              ) : (
                <Button variant="primary" type="submit" disabled>
                  Loading...
                </Button>
              )}
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}