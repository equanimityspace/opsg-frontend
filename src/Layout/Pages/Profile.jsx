import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
export default function SingleUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: user, error, isLoading, refetch } = useGetUserQuery(id);
  const [updateUserProfile, { isLoading: isUpdating, error: updateError }] =
    useUpdateUserProfileMutation();
  const [changePassword, { isLoading: isChanging, error: changeError }] =
    useChangePasswordMutation();
  // const [editMode, setEditMode] = useState(true);
  // const [showPasswordField, setShowPasswordField] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
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
      await updateUserProfile({
        id,
        ...formData,
      }).unwrap();
      // setEditMode(false);
      // setShowPasswordField(false);
      refetch();
      // navigate back home
      navigate(`/`);
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
        id,
        currentPassword: currentPwd,
        newPassword: newPwd,
      }).unwrap();
      setShowPwdForm(false);
      setCurrentPwd("");
      setNewPwd("");
      setConfirmPwd("");
      setPwdError("");
      refetch();
    } catch (error) {
      setPwdError("Password change failed");
    }
    //   try {
    //     await updateUserProfile({
    //       id,
    //       currentPassword: currentPwd,
    //       password: newPwd,
    //     }).unwrap();
    //     setShowPwdForm(false);
    //     setCurrentPwd("");
    //     setNewPwd("");
    //     setConfirmPwd("");
    //     setPwdError("");
    //     refetch();
    //   } catch (err) {
    //     setPwdError("Password change failed");
    //   }
  };
  if (isLoading) return <p>Loading user data...</p>;
  if (error) return <p>Error loading user. Please try again later.</p>;
  return (
    <div className="d-flex justify-content-center vh-80 vw-80">
      <Form className="w-50 mt-5" onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              value={formData.firstName}
              onChange={(e) =>
                setFormData((f) => ({ ...f, firstName: e.target.value }))
              }
            />
          </Form.Group>
          <Form.Group as={Col} controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              value={formData.lastName}
              onChange={(e) =>
                setFormData((f) => ({ ...f, lastName: e.target.value }))
              }
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={user.email}
            onChange={(e) =>
              setFormData((f) => ({ ...f, email: e.target.value }))
            }
          />
        </Form.Group>
        <Row className="align-items-end mb-3">
          <Form.Group as={Col} controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="********"></Form.Control>
          </Form.Group>
          {!showPwdForm && (
            <Col xs="auto">
              <Button
                variant="primary"
                onClick={() => setShowPwdForm((v) => !v)}
              >
                Change Password
              </Button>
            </Col>
          )}
        </Row>
        {/* Renders the 3 change password fields */}
        {showPwdForm && (
          <div className="border p-3 mb-3">
            <Form.Group className="mb-2" controlId="currentPwd">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                value={currentPwd}
                onChange={(e) => setCurrentPwd(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-2" controlId="newPwd">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                value={newPwd}
                onChange={(e) => setNewPwd(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-2" controlId="confirmPWd">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPwd}
                onChange={(e) => setConfirmPwd(e.target.value)}
              ></Form.Control>
            </Form.Group>
            {pwdError && <p className="text-danger small">{pwdError}</p>}
            <div className="d-flex gap-2 mt-2">
              <Button variant="success" onClick={handlePasswordChange}>
                Save Password
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setShowPwdForm(false);
                  setPwdError("");
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
        {/* <Row className="mb-3"> */}
        {/* <Form.Group as={Col} controlId="formGridmpg">
          <Form.Label>Miles per gallon</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridgasTank">
          <Form.Label>How many gallons of gas</Form.Label>
        </Form.Group> */}
        {/*
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group> */}
        {/* </Row> */}
        {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
        <Button variant="primary" type="submit">
          Save Profile
        </Button>
      </Form>
    </div>
  );
}
