import AdminNav from "./Navbars/UserNav";
import UserNav from "./Navbars/OpenNav";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { useAuthState } from "./AuthContext";

const DisplayNavbar = () => {
  //default to visitor role if a role is not set
  const role =
    window.sessionStorage.getItem("role")?.toLowerCase() || "visitor";
  switch (role) {
    case "user":
      return (
        <>
          <UserNav />
        </>
      );
    case "admin":
      return (
        <>
          <AdminNav />
        </>
      );
    default:
      return (
        <>
          <Outlet />
        </>
      );
  }
};

const NavRoles = () => {
  const { authstate } = useAuthState();
  const { role } = authstate;
  const location = useLocation();

  const isProtected = (roleRequired) => {
    return role === roleRequired || (!role && location.pathname !== "/login");
  };

  const renderNavLink = (to, text, roleRequired = "user" || "admin") => {
    return isProtected(roleRequired) ? (
      <NavLink to={to} className="nav-link" activeClassName="active">
        {text}
      </NavLink>
    ) : null;
  };

  return (
    <nav className="nav flex-column">
      <NavLink to="/" className="nav-link" activeClassName="active">
        Home
      </NavLink>
      {renderNavLink("/ourservices", "Our Services", "user" || "admin")}
      {renderNavLink("/contactform", "Contact Form", "user" || "admin")}
      {role == "user" ||
        ("admin" && (
          <NavLink
            to="/navbars/navigations/updateuserprofile"
            className="nav-link"
            activeClassName="active"
          >
            Update Profile
          </NavLink>
        ))}
    </nav>
  );
};
export default NavRoles;
