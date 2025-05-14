import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Home from "./Layout/Pages/Home";
import Login from "./Layout/Pages/Login";
import Registration from "./Layout/Pages/Registration";
import SingleUser from "./Layout/Pages/Profile";
import OurServices from "./Layout/Pages/OurServices";
import ContactForm from "./Layout/Pages/ContactForm";
import React, { useContext } from "react";

import userNav from "./Features/Navigations/Navbars/UserNav";
// import { AuthProvider } from "./Features/Navigations/AuthContext";


// const AuthContext = React.createContext({ role: 'visitor'});

function App() {
  // const { role } = useAuthState();

  return (
    <>

      {/* Visitor Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/unauthorized" element={<UnauthorizedPage/>} /> */}
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/contactform" element={<ContactForm />} />



         {/* Protected Routes
        <Route path = '/admin' element={ 
          <ProtectedRoutes roles={["admin"]}>
            <AdminPage />
          </ProtectedRoutes>}> 
        </Route> */}


        <Route path="/user/:id" element={
          <ProtectedRoutes roles={["admin", "user"]}>
            <SingleUser />
          </ProtectedRoutes>}> 
        </Route>
         
        <Route path="/" element={
          <ProtectedRoutes roles={["admin", "user", "guest"]}>
            <Home />
          </ProtectedRoutes>}> 
        </Route>
       </Routes>
    </>
  );
}

export default App;