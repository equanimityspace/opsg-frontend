import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ userId, isAdmin }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (token && !isAdmin) {
    return <Navigate to={`/user/${userId}`} />;
  } else if (token && isAdmin) {
    // Render the protected content if the user is logged in and is an admin
    return <Navigate to={"/admin/dashboard"} />;
  }
};

export default ProtectedRoutes;

// const ProtectedRoute = ({ isAdmin, children }) => {
//   const userRole = localStorage.getItem('token'); // Get the user’s role and token from local storage

//   if (userRole !== role) {
//     return <Navigate to="/" />; // Redirect if the role doesn't match
//   }

//   return children;
// };

// export default ProtectedRoute;
