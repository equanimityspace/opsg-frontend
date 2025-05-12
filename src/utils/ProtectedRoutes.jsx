// import React from "react";
// import { useAuthState } from "../Features/Navigations/AuthContext";
// import { Redirect, useLocation } from "react-router-dom";
// import { Navigate, Outlet } from "react-router-dom";
// import { getToken } from "./tokenService";

// const getRole = () => {
//   return window.sessionStorage.getItem("role").toLowerCase();
// };

// function ProtectedRoute({component: Component, ...props}) {
//   const authState = useAuthState();
//   const location = useLocation();
 
//   return authState.role === "admin" || "user" ? (
//     <Component {...props}/>
//   ) : (
//     <Redirect to={{pathname: "/", state: {from:location}}} />
//   )
// }
// export default ProtectedRoute;


import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "./tokenService";

const getRole = () => {
  return window.sessionStorage.getItem("role").toLowerCase();
};

const ProtectedRoutes = () => {
    //not sure how to handle token below... might be good?
  const token = getToken();

    if (!token) {
        return <Navigate to="/"/>
    }
    return <Outlet/>;
    
};
export default {ProtectedRoutes, getRole}