import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  useGetUserQuery,
  useUpdateUserProfileMutation,
} from "../../Slices/mainSlice";
import { useChangePasswordMutation } from "../../Slices/changePasswordSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InfoModal from "../../utils/Modal";
import UserPage from "./UserDash/UserDashboard";
import "./../../app.css"

export default function Profile() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { data: user, error, isLoading, refetch } = useGetUserQuery(userId);
  const [updateUserProfile] = useUpdateUserProfileMutation();
  const [changePassword] = useChangePasswordMutation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [modalShow, setModalShow] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [modalBody, setModalBody] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showPwdForm, setShowPwdForm] = useState(false);
  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [pwdError, setPwdError] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
      });
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({ id: userId, ...formData }).unwrap();
      setModalHeading("Profile Updated");
      setModalBody("Your profile was updated succesfully");
      setModalShow(true);
      setEditMode(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePasswordChange = async () => {
    if (!currentPwd || !newPwd || newPwd !== confirmPwd) {
      setPwdError(
        !currentPwd
          ? "Enter your current password"
          : newPwd !== confirmPwd
          ? "New passwords must match"
          : "Enter a new password"
      );
      return;
    }
    try {
      await changePassword({
        id: userId,
        currentPassword: currentPwd,
        newPassword: newPwd,
        confirmPassword: confirmPwd,
      }).unwrap();
      setShowPwdForm(false);
      setCurrentPwd("");
      setNewPwd("");
      setConfirmPwd("");
      setPwdError("");
      setEditMode(false);
      setModalHeading("Password Changed");
      setModalBody("Your password was changed successfully.");
      setModalShow(true);
    } catch {
      setPwdError("Password change failed");
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
    setEditMode(false);
    setShowPwdForm(false);
    setPwdError("");
  };

  if (isLoading) return <p>Loading user data...</p>;
  if (error) return <p>Error loading user. Please try again later.</p>;

  return (
    <>
      <UserPage />
      <div style={{ paddingTop: '60px' }} className="d-flex justify-content-center align-items-center">
        <div
          className="bg-white rounded shadow p-4"
          style={{ width: "100%", maxWidth: "600px" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2
              style={{
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              {editMode ? "EDIT PROFILE" : "MY PROFILE"}</h2>
            {!editMode && (
              <Button
                  className="button3"
                  variant="secondary"
                  type="submit"
                  style={{
                    width: "100px",
                    fontSize: "12px",
                    marginTop: "10px",
                  }}
                onClick={() => setEditMode(true)}
              >
                EDIT PROFILE
              </Button>
            )}
          </div>

          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="firstName">
                <Form.Label
                 style={{
                    fontSize: "12px",
                    paddingLeft: "3px",
                  }}
                >FIRST NAME</Form.Label>
                <Form.Control
                  readOnly={!editMode}
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, firstName: e.target.value }))
                  }
                />
              </Form.Group>
              <Form.Group as={Col} controlId="lastName">
                <Form.Label
                  style={{
                    fontSize: "12px",
                    paddingLeft: "3px",
                  }}
                >LAST NAME</Form.Label>
                <Form.Control
                  readOnly={!editMode}
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, lastName: e.target.value }))
                  }
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label
              style={{
                    fontSize: "12px",
                    paddingLeft: "3px",
                  }}
              >EMAIL</Form.Label>
              <Form.Control
                readOnly={!editMode}
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((f) => ({ ...f, email: e.target.value }))
                }
              />
            </Form.Group>
            {editMode && (
              <>
                <Row className="align-items-end mb-3">
                  <Form.Group as={Col} controlId="password">
                    <Form.Label
                    style={{
                    fontSize: "12px",
                    paddingLeft: "3px",
                  }}
                    >PASSWORD</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="********"
                      readOnly
                    />
                  </Form.Group>
                  {!showPwdForm && (
                    <Col xs="auto">
                      <Button
                        variant="secondary"
                        onClick={() => setShowPwdForm(true)}
                        className="button3"
                        style={{
                          width: "135px",
                          marginRight: "9px",
                          fontSize: "12px",
                          marginTop: "10px",
                          borderRadius: "7%",
                        }}
                      >CHANGE PASSWORD
                      </Button>
                    </Col>
                  )}
                </Row>

                {showPwdForm && (
                  <div className="border rounded p-3 mb-3">
                    <Form.Group className="mb-2" controlId="currentPwd">
                      <Form.Label
                      style={{
                        fontSize: "12px",
                        paddingLeft: "3px",
                      }}
                      >CURRENT PASSWORD</Form.Label>
                      <Form.Control
                        type="password"
                        value={currentPwd}
                        onChange={(e) => setCurrentPwd(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="newPwd">
                      <Form.Label
                        style={{
                          fontSize: "12px",
                          paddingLeft: "3px",
                        }}
                      >NEW PASSWORD</Form.Label>
                      <Form.Control
                        type="password"
                        value={newPwd}
                        onChange={(e) => setNewPwd(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="confirmPwd">
                      <Form.Label
                        style={{
                            fontSize: "12px",
                            paddingLeft: "3px",
                          }}
                      >CONFIRM NEW PASSWORD</Form.Label>
                      <Form.Control
                        type="password"
                        value={confirmPwd}
                        onChange={(e) => setConfirmPwd(e.target.value)}
                      />
                    </Form.Group>

                    {pwdError && (
                      <p className="text-danger small">{pwdError}</p>
                    )}

                    <div className="d-flex gap-2 mt-2">
                      <Button variant="secondary" onClick={handlePasswordChange}
                        className="button3"
                        style={{
                          width: "80px",
                          fontSize: "12px",
                          marginTop: "10px",
                        }}
                      >
                        CONFIRM
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setShowPwdForm(false);
                          setPwdError("");
                        }}
                        className="button3"
                        style={{
                          width: "80px",
                          fontSize: "12px",
                          marginTop: "10px",
                        }}
                      >
                        CANCEL
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
            <div className="d-flex justify-content-end">
              {editMode && (
                <>
                  <Button variant="secondary" type="submit"
                  className="button3"
                        style={{
                          marginRight: "8px",
                          width: "135px",
                          height: "35px",
                          fontSize: "12px",
                          marginTop: "10px",
                          paddingTop: "9px",
                          borderRadius: "7%",
                        }}
                  >
                    SAVE CHANGES
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={handleCancel}
                    // className="me-2"
                    className="button3 me-2"
                        style={{
                          width: "135px",
                          height: "35px",
                          fontSize: "12px",
                          marginTop: "10px",
                          paddingTop: "9px",
                          borderRadius: "7%",
                          justifyItems: "left",
                        }}
                  >
                    CANCEL CHANGES
                  </Button>
                </>
              )}
            </div>
          </Form>
        </div>
      </div>

      <InfoModal
        show={modalShow}
        hide={() => setModalShow(false)}
        heading={modalHeading}
        body={modalBody}
      />
    </>
  );
}
