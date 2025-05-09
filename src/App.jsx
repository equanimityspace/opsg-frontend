import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
// import router from "./Router";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Home from "./Layout/Pages/Home";
import Login from "./Layout/Pages/Login";
import Registration from "./Layout/Pages/Registration";
import SingleUser from "./Layout/Pages/Profile";
import NavRoles from "./Features/Navigations/NavRoles";


function App() {
  return (
    <>
      <Routes>
        {/* <NavBar /> */}
        <Routes>
          {/* No auth needed */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          
          {/* must be logged in */}
          <Route path="/Navbars" element={<ProtectedRoutes />}>
            <Route path="/Navigations" element={<NavRoles />}>
              <Route path="/me" element={<SingleUser />} />
              <Route path="/updateUserProfile/:userid" element={<SingleUser />} />
            </Route>
          </Route>
        </Routes>
      </Routes>
    </>
  );
}

export default App;
