import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
   const navigate = useNavigate();

   // const token = 
   return (
      <header>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
               <li class="nav-item active">
               <a class="nav-link" href="/">About Us <span class="sr-only">(current)</span></a>
               </li>
               <li class="nav-item">
               <a class="nav-link" href="/ourservices">Our Services</a>
               </li>
               <li class="nav-item">
               <a class="nav-link" href="/contactForm">Contact Us</a>
               </li>
            </ul>
         </div>
         </nav>
      </header>
   )
}