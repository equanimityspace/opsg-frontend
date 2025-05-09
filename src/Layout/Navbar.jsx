import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
   const navigate = useNavigate();

   // const token = 
   return (
      <header>
         <div className="navbar">
            <ul>
               <li className="navbar">
                  <NavLink to="/">
                     About Us
                  </NavLink>
                  <NavLink to="/ourservices">
                    Our Services
                  </NavLink>
                  <NavLink to="/contactform">
                    Contact us
                  </NavLink>


                  {/* <NavLink to="/">ViewInvoices</NavLink> */}
                  {/* <NavLink to="/updateUserProfile/:userid" className={({ isActive }) => 
                    isActive}>
                    Edit Profile
                  </NavLink> */}
               </li>
            </ul>
         </div>
      </header>
   )

}