import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminNav.css";

import opsgLogo from "../../../assets/img/opsg-logo.png";

const AdminNav = (props) => {
  const [isNotActive, setNotActive] = useState("true");
  const [isDropdownActive, setDropdownActive] = useState("false");
  var arrowRight = <i class="bi bi-arrow-right-circle-fill"></i>;
  var crossIcon = <i class="bi bi-x-circle"></i>;
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
              <i className="fas fa-briefcase icon-color"></i>
              <Link to="/admin/dashboard">Home</Link>
            </li>
            <li className="list-item">
              <i className="fas fa-building icon-color"></i>
              <Link to="/admin/users">Users</Link>
            </li>
            <li className="list-item">
              <i className="fas fa-history icon-color"></i>
              <Link to="/">Log out</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default AdminNav;
