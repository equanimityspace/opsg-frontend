import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getToken, deleteToken } from "../utils/tokenService";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import opsgLogo from "../Assets/img/opsg-logo.png";
import "../Layout/navbar.css";
import ReactiveButton from "reactive-button";
import { Button } from "react-bootstrap";

export default function NavBar() {
  const navigate = useNavigate();
  const token = getToken();

  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const [isLoading, setLoading] = useState(false);

  let userId;
  if (token) {
    const { id } = jwtDecode(token);
    userId = id;
  }

  useEffect(() => {
    if (token) {
      setIsLoggedIn("LOGOUT");
    } else {
      setIsLoggedIn("LOGIN");
    }
  }, [token]);

  const handleLogout = () => {
    deleteToken(token);
    navigate("/login");
  };

  const [isNotActive, setNotActive] = useState("true");

  return (
    <header>
      <nav className="navbar bg-light2"
        style={{  
          overflow: "hidden",
          position: "fixed", /* Set the navbar to fixed position */
          top: "0", /* Position the navbar at the top of the page */
          width: "100%",
          zIndex: "5",
          }}>
            

        <div className="container-fluid" style={{diplay: "contents"}}>
          <div className="navbar-header">
            <div className="navLogoWrapper" style={{
                display: "flex",
                marginLeft: "12px",
                fontWeight: "200",
                flexDirection: "column",
                flexWrap: "wrap",
                alignItems: "center"
              }}>
            <img
              src={opsgLogo}
              className="rounded-circle usr-image2 nav navbar-nav"
              height={isNotActive ? "35" : "70"}
              width={isNotActive ? "35" : "70"}
            ></img>
            <h6>
              OnPoint
            </h6>
            </div>
        </div>
          
          <ul
            className="nav navbar-nav  sidebar-header2"
            style={{
              fontSize: "14px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "noWrap",
              gap: "5%",
            }}
          >
            <li className="nav-item active">
              <a
                className="nav-link"
                variant="secondary"
                href="/"
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/ourservices"
                
              >
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/contactForm"
               
              >
                CONTACT
              </a>
            </li>
            <li className="nav-item active">
              {token ? (
                <a
                  className="nav-link"
                  href={`/user/${userId}`}
               
                >
                  PROFILE
                </a>
              ) : (
                <a className="nav-link" href="/"></a>
              )}
            </li>
            </ul>
  
            <ul className="nav navbar-nav navbar-right" style={{display: "flex",
              flexDirection: "row"
              }}>
      <li>
        <span style={{ 
              marginRight: "15px",}}>
          {token ? (
            <ReactiveButton
              rounded
              idleText={'LOGOUT'}
              type="button"
              variant="secondary"
              style={{
                width: "80px",
                backgroundColor: "#558e89",
                fontSize: "12px",
              }}
              // className=""
              onClick={handleLogout}
              navigate="/"
            >
              {isLoggedIn}
            </ReactiveButton>
          ) : (
            <ReactiveButton
              rounded                  
              idleText={'LOGIN'}
              type="button"
              variant="secondary"
              style={{
                marginRight: "5px",
                backgroundColor: "#558e89",
                fontSize: "12px",
              }}
              className="navbar-right"
              onClick={handleLogout} // TODO make sure this is fine, I dont think its fine
            >
              {isLoggedIn}
            </ReactiveButton>
          )}
          </span>
          </li>
          <li>
            <span>
          {token ? (
            <button className="nav-link" href="/" variant="secondary"></button>
          ) : (
            <ReactiveButton
              rounded
              idleText={'REGISTER'}
              type="button"
              style={{
                backgroundColor: "#558e89",
                fontSize: "12px",
              }}
              // className="button"
              onClick={() => navigate("/register")}
            >
            </ReactiveButton>
          )}
          </span>
          </li>
           </ul>
        </div>
      </nav>
    </header>
  );
}