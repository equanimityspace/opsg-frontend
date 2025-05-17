import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./UserNav.css";
import opsgLogo from "../../../assets/img/opsg-logo.png";
import { Button } from "react-bootstrap";

export const UserNav = (props) => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [isNotActive, setNotActive] = useState("true");
  const [isDropdownActive, setDropdownActive] = useState("false");

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  var arrowRight = <i className="bi bi-arrow-right-circle-fill"></i>;
  var crossIcon = <i className="bi bi-x-circle"></i>;

  // Making the gear a button
  const handleGearClick = () => {
    navigate(`/profile/${userId}`);
  };

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
              <Link to="/">Home</Link>
            </li>
            <li className="list-item">
              <i className="bi bi-people-fill"></i>
              <Link to="/admin/users">Invoices</Link>
            </li>
            <li className="list-item-unstyled">
              <Button onClick={handleGearClick} className="edit-profile">
                <i className="bi bi-gear"></i>
              </Button>
              <Link to={`/profile/${userId}`}>Edit profile</Link>
            </li>
            <li className="list-item">
              <i className="bi bi-box-arrow-left"></i>
              <Link to="/" onClick={handleClick}>
                Log out
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

