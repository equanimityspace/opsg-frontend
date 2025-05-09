import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import router from "./Router";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Home from "./Layout/Pages/Home";
import Login from "./Layout/Pages/Login";
import Registration from "./Layout/Pages/Registration";
// import SingleUser from "./components/SingleUser";

function App() {
  return (
    <>
      <Routes>
        <NavBar />
        <Routes>
          {/* No auth needed */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          
          {/* must be logged in */}
          <Route path="/Navbars" element={<ProtectedRoutes />} />

          {/* <Route path="/user/:id" element={<SingleUser />} /> */}
        </Routes>
      </Routes>
    </>
  );
}

export default App;
