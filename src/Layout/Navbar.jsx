import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
   const navigate = useNavigate();
   // const onClick = () => {
   //    navigate
   // }

   // const token = 
   return (
      <header>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
               <li className="nav-item active">
               <a className="nav-link" href="/">About Us</a>
               </li>
               <li className="nav-item">
               <a className="nav-link" href="/ourservices">Our Services</a>
               </li>
               <li className="nav-item">
               <a className="nav-link" href="/contactForm">Contact Us</a>
               </li>
            </ul>
            <a href="/Login" >
               <button type="button" className="btn btn-info btn-sm">Login</button>
            </a>
            <a href="/Register">
               <button type="button" className="btn btn-info btn-sm">Register</button>
            </a >
         </div>
         </nav>
      </header>
   )
}