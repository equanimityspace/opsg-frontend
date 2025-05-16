import { NavLink } from "react-router-dom";
import React from "react";
import ContextProvider from "../ContextProvider";

export default function userNav() {
  // Check if there's a token in secure storage
  const token = localStorage.getItem("token");
  if (token) {
    // Verify token with server if needed
    const verifyResponse = fetch("/api/verify", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (verifyResponse.ok) {
      // Fetch user data from the server if needed
      const userData = verifyResponse.json();
      setAuthState((prevState) => ({
        ...prevState,
        isLoggedIn: true,
        user: userData.user,
        isAdmin: true,
      }));
    } else {
      console.error("token verification failed");
    }
  }

  return (
    <>
      <AuthProvider>
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
                  aerggg
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ourservices">
                  abvesd
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contactForm">
                  dfvdv
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </AuthProvider>
    </>
  );
}


  /* <NavLink 
                to={"/pages/profile"} className={({ isActive }) => 
                isActive ? "user-nav active" : "user-nav"
            }
            >
                Profile
            </NavLink> */



  /* // authorized navbar elements here
    // view invoice(s)
    // edit account
    // anything else?? */

