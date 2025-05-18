import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getToken, deleteToken } from "../utils/tokenService";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export default function NavBar() {
  const navigate = useNavigate();
  const token = getToken();

  const [isLoggedIn, setIsLoggedIn] = useState("Login");

  let userId;
  if (token) {
    const { id } = jwtDecode(token);
    userId = id;
  }

  useEffect(() => {
    if (token) {
      setIsLoggedIn("Logout");
    } else {
      setIsLoggedIn("Login");
    }
  }, [token]);

  const handleLogout = () => {
    deleteToken(token);
    navigate("/login");
  };

  // const backToProfile = () => {
  //   navigate(`/profile/${userId}`);
  // };

  //handle login/logout button change
  // const buttonStatus = token ? "Log Out" : "Login";

  // const token =
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ourservices">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contactForm">
                Contact Us
              </a>
            </li>
            <li className="nav-item active">
              {token ? (
                <a className="nav-link" href={`/user/${userId}`}>
                  My Profile
                </a>
              ) : (
                <a className="nav-link" href="/"></a>
              )}
            </li>
          </ul>
          {token ? (
            <button
              type="button"
              className="btn btn-info btn-sm mx-2"
              onClick={handleLogout}
              navigate="/"
            >
              {isLoggedIn}
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-info btn-sm mx-2"
              onClick={handleLogout} // TODO make sure this is fine, I dont think its fine
            >
              {isLoggedIn}
            </button>
          )}
          {token ? (
            <button className="nav-link" href="/"></button>
          ) : (
            <button
              type="button"
              className="btn btn-info btn-sm"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
