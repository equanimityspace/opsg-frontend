// import { NavLink } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function openNav() {
  const navigate = useNavigate()

    return (
        <nav className="navbar sticky-top navbar-light bg-light">
          <a className="navbar-brand" href="#"></a>
          {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#" onClick={() => navigate("/")}>About Us<span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => navigate("/ourservices")}>Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => navigate("/contactform")}>Contact Us</a>
                </li>
              </ul>
            </div>
            <form className="form-inline">
                <button className="btn btn-sm btn-outline-secondary" type="button" >Login</button>
                <button className="btn btn-sm btn-outline-secondary" type="button">Register</button>
            </form>
        </nav>
    )
}



