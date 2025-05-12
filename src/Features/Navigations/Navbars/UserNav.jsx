import { NavLink } from "react-router-dom";
import React from "react";

export default function userNav() {

    return (
        <div>
            <ul>
                <li>
                <NavLink 
                to={"/pages/profile"} className={({ isActive }) => 
                isActive ? "user-nav active" : "user-nav"
            }
            >
                Profile
            </NavLink>
                </li>
            </ul>
        </div>
   
    )
    // authorized navbar elements here
    // view invoice(s)
    // edit account
    // anything else??
}