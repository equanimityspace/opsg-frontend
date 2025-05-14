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



import React, {useContext} from "react";
import { userContext } from "../TEST SHIT/ContextProvider";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutes({children, roles}) {
    const {role, authenticated} = useContext(userContext);
    const Navigate = useNavigate();

    if(!authenticated) {
      return <Navigate to="/login" />
    }

    const allowedRoles = ["admin", "user"];

    if(!allowedRoles.includes(role)) {
      return <Navigate to="/" />

    }

    return children;

};



