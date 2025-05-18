import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { useState } from "react";
import Home from "./Layout/Pages/Home";
import Login from "./Layout/Pages/Login";
import Registration from "./Layout/Pages/Registration";
import Profile from "./Layout/Pages/Profile";
import OurServices from "./Layout/Pages/OurServices";
import ContactForm from "./Layout/Pages/ContactForm";
import React, { useContext } from "react";
import AdminPage from "./Layout/Pages/AdminDashboard/AdminDashboard";

import userNav from "./Features/Navigations/Navbars/UserNav";
import AdminAllUsers from "./Layout/Pages/AdminDashboard/AdminAllUsers";
// import { AuthProvider } from "./Features/Navigations/AuthContext";

// const AuthContext = React.createContext({ role: 'visitor'});

function App() {
  // const { role } = useAuthState();
  const [userId, setUserId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);

  return (
    <>
      {/* Visitor Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route
          path="/login"
          element={<Login setUserId={setUserId} setIsAdmin={setIsAdmin} />}
        />
        {/* <Route path="/unauthorized" element={<UnauthorizedPage/>} /> */}
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/contactform" element={<ContactForm />} />

        {/* Protected Routes */}
        <Route
          path="/login/redirect"
          element={<ProtectedRoutes userId={userId} isAdmin={isAdmin} />}
        />
        <Route path={`/user/${userId}`} element={<Profile />} />

        <Route path="/admin/dashboard" element={<AdminPage />} />
        <Route path="/admin/users" element={<AdminAllUsers />} />
        <Route path={`/admin/users/user/${userId}`} element={AdminAllUsers} />
      </Routes>
    </>
  );
}

export default App;
