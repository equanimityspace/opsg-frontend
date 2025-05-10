import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Home from "./Layout/Pages/Home";
import Login from "./Layout/Pages/Login";
import Registration from "./Layout/Pages/Registration";
import Profile from "./Layout/Pages/Profile";
import OurServices from "./Layout/Pages/OurServices";
import ContactForm from "./Layout/Pages/ContactForm";
import React, { useContext } from "react";
import { useAuthState } from "./Features/Navigations/AuthContext";
import NavRoles from "./Features/Navigations/NavRoles";

// const AuthContext = React.createContext({ role: 'visitor'});

function App() {
  const {role} = useAuthState();

  return (
    <>
      {/* App content */}
      <AuthProvider>
        <Switch>
          {/* Visitor Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/contactform" element={<ContactForm />} />

          {/* Protected Routes */}
          <ProtectedRoutes>
            <NavRoles role={role}/>
              <Route 
                path="/navbars/navigations/me" 
                element={<NavRoles/>} 
              />
              <Route
                path="/navbars/navigations/updateuserprofile/:userid"
                element={<NavRoles/>}
              />
          </ProtectedRoutes>
          </Switch>
      </AuthProvider>
    </>
  );
}

export default App;
