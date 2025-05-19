import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../Slices/mainSlice";
import { useState } from "react";
import NavBar from "../Navbar";
import "../../app.css";

import InfoModal from "../../utils/Modal";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import { storeToken } from "../../utils/tokenService";

export default function Login({ setUserId, setIsAdmin }) {
  const navigate = useNavigate();
  const [login, status] = useLoginMutation();

  // Modal logic
  const [response, setResponse] = useState();
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  // //attempting to store user role at login
  // const data = await response.JSON();
  // localStorage.setItem("role", data.role);

  // stores data from login form
  const [formData, setFormData] = useState({
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

  // submit login request
  const submit = async (e) => {
    e.preventDefault();
    try {
      const payload = await login(formData).unwrap();
      const userId = payload.user.id;
      const isAdmin = payload.user.isAdmin;
      setUserId(userId);
      setIsAdmin(isAdmin);
      navigate("/login/redirect");
    } catch (err) {
      console.error(err);
      setResponse(err);
      openModal();
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
            body={response?.error?.data}
          />
        ) : (
          <></>
        )}
        <Card className="w-50 mt-5">
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="/login">
              <Nav.Item>
                <Nav.Link
                  href="/login"
                  style={{
                    fontSize: "12px",
                    paddingBottom: "10px",
                    paddingTop: "15px",
                  }}
                >
                  LOGIN
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="/register"
                  style={{
                    fontSize: "12px",
                    paddingBottom: "10px",
                    paddingTop: "15px",
                  }}
                >
                  REGISTER
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={submit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                  className="formLabel"
                  style={{ paddingLeft: "3px" }}
                >
                  EMAIL
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={update}
                  style={{
                    fontSize: "12px",
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label
                  className="formLabel"
                  style={{ paddingLeft: "3px" }}
                >
                  PASSWORD
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={update}
                  style={{
                    fontSize: "12px",
                  }}
                />
              </Form.Group>
              {!status?.isLoading ? (
                <Button
                  variant="primary"
                  className="button3"
                  type="submit"
                  style={{
                    width: "80px",
                    fontSize: "12px",
                    marginTop: "10px",
                  }}
                >
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
