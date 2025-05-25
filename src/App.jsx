import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Layout/Pages/Home";
import Login from "./Layout/Pages/Login";
import Registration from "./Layout/Pages/Registration";
import OurServices from "./Layout/Pages/OurServices";
import ContactForm from "./Layout/Pages/ContactForm";
import UserPage from "./Layout/Pages/UserDash/UserDashboard";
import Profile from "./Layout/Pages/Profile";
import UserInvoice from "./Layout/Pages/UserDash/UserInvoice";

import AdminPage from "./Layout/Pages/AdminDashboard/AdminDashboard";
import AdminAllUsers from "./Layout/Pages/AdminDashboard/AdminAllUsers";
import AdminUser from "./Layout/Pages/AdminDashboard/AdminUser";
import AdminSearch from "./Layout/Pages/AdminDashboard/AdminSearch";
// import { AuthProvider } from "./Features/Navigations/AuthContext";

// const AuthContext = React.createContext({ role: 'visitor'});

function App() {
  return (
    <Routes>
      {/* Admin Routes (most specific first) */}
      <Route path="/admin/user/user/:userId" element={<AdminUser />} />
      <Route path="/admin/user" element={<AdminAllUsers />} />
      <Route path="/admin/search" element={<AdminSearch />} />
      <Route path="/admin/dashboard" element={<AdminPage />} />

      {/* User Protected Routes */}
      <Route path="/profile/invoices/:userId" element={<UserInvoice />} />
      <Route path="/profile/:userId" element={<Profile />} />
      <Route path="/user/:userId" element={<UserPage />} />

      {/* Visitor Routes */}
      <Route path="/contactform" element={<ContactForm />} />
      <Route path="/ourservices" element={<OurServices />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
