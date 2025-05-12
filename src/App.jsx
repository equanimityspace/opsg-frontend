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
        {/* No auth needed */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />

        {/* must be logged in */}
        <Route path="/navbars" element={<ProtectedRoutes />}>
          <Route path="/navbars/navigations" element={<NavRoles />}>
            <Route path="/navbars/navigations/me" element={<SingleUser />} />
            <Route
              path="/navbars/navigations/updateuserprofile/:userid"
              element={<SingleUser />}
            />
            <Route path="/user/:id" element={<SingleUser />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
