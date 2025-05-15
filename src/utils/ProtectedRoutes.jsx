import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ isAdmin, children }) => {
  const isLoggedIn = () => {
    // Check for token 
    const token = localStorage.getItem('token');
    return token ? true : false;
  };

  // Check if the user is logged in
  const isAuthenticatedUser = isLoggedIn();0

  if (!isAuthenticatedUser) {
    return <Navigate to="/login" />;
  }

  if (isLoggedIn) {
    return <Navigate to="/user/:userid" />; 
  }
// Render the protected content if the user is logged in and is an admin
  return children; 
};

export default ProtectedRoute;


// const ProtectedRoute = ({ isAdmin, children }) => {
//   const userRole = localStorage.getItem('token'); // Get the user’s role and token from local storage

//   if (userRole !== role) {
//     return <Navigate to="/" />; // Redirect if the role doesn't match
//   }

//   return children;
// };

// export default ProtectedRoute;





