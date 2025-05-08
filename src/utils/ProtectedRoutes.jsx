import React from "react";
import { useOutletContext, Navigate, Outlet } from "react-router-dom";

export default ProtectedRoute = ({role}) => {

    const context = useOutletContext();

    if (!context.user || !context.user.role.includes(role)) {
        return <Navigate to="/" replace/>
    }
    return <Outlet context={context}/>;
    
};