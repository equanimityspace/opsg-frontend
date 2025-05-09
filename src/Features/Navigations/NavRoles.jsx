// import AdminNav from "./Navbars/UserNav";
// import UserNav from "./Navbars/OpenNav";
import { Outlet } from "react-router-dom";

export default function navRoles() {
//   const role = window.sessionStorage.getItem("role").toLowerCase;

  //   const DisplayNavbar = () => {
  //     switch (role) {
  //       // case 'user':
  //       //     return (
  //       //         <>
  //       //         <UserNav />
  //       //         </>
  //       //     );
  //       case "admin":
  //         return (
  //           <>
  //             <AdminNav />
  //           </>
  //         );
  //       default:
  //         break;
  //     }
  //   };

  return (
    <>
      {displayNavbar()}
      <>
        <Outlet />
      </>
    </>
  );
}
