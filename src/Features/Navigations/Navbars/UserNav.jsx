import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserNav.css";


import opsgLogo from "../../../assets/img/opsg-logo.png";

const UserNav = (props) => {
  const [isNotActive, setNotActive] = useState("true");
  const [isDropdownActive, setDropdownActive] = useState("false");
  var arrowRight = <i className="bi bi-arrow-right-circle-fill"></i>;
  var crossIcon = <i className="bi bi-x-circle"></i>;
  return (
    <div>
      <div className="wrapper">
        <nav id="sidebar" className={isNotActive ? "active" : ""}>
          <button
            type="button"
            id="sidebarCollapse"
            onClick={() => setNotActive(!isNotActive)}
            className="btn btn-custom"
          >
            <span className={isNotActive ? "" : "hidden"}>{arrowRight}</span>
            <span className={isNotActive ? "hidden" : ""}>{crossIcon}</span>
          </button>
          <div className="sidebar-header">
            <img
              src={opsgLogo}
              className="rounded-circle usr-image"
              height={isNotActive ? "20" : "70"}
              width={isNotActive ? "20" : "70"}
            ></img>
            <h3>OnPoint</h3>
          </div>

          <ul className="list-unstyled components">
            <li className="list-item">
              <i className="bi bi-house"></i>
              <Link to="/admin/dashboard">Home</Link>
            </li>
            <li className="list-item">
              <i className="bi bi-people-fill"></i>
              <Link to="/admin/users">Invoices</Link>
            </li>
            <li className="list-item">
              <i className="bi bi-box-arrow-left"></i>
              <Link to="/">Log out</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default UserNav;




// import { NavLink } from "react-router-dom";
// import React from "react";
// import ContextProvider from "../ContextProvider";

// export default function userNav() {
//   // // Check if there's a token in secure storage
//   // const token = localStorage.getItem("token");
//   // if (token) {
//   //   // Verify token with server if needed
//   //   const verifyResponse = fetch("/api/verify", {
//   //     method: "GET",
//   //     headers: {
//   //       Authorization: `Bearer ${token}`,
//   //     },
//   //   });
//   //   if (verifyResponse.ok) {
//   //     // Fetch user data from the server if needed
//   //     const userData = verifyResponse.json();
//   //     setAuthState((prevState) => ({
//   //       ...prevState,
//   //       isLoggedIn: true,
//   //       user: userData.user,
//   //       isAdmin: true,
//   //     }));
//   //   } else {
//   //     console.error("token verification failed");
//   //   }
//   // }


//   return (
//     <>

      
//     </>
//   );
// }



