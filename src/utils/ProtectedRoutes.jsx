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