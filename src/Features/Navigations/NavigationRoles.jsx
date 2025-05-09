import AuthorizedNav from "./Navbars/AuthorizedNav";
import OpenNav from "./Navbars/OpenNav";
import { Outlet } from "react-router-dom";

export default function NavigationRoles() {
    const role = window.sessionStorage.getItem('role').toLowerCase;

    const DisplayNavbar = () => {

        switch (role) {
            case 'user':
                return (
                    <>
                    <OpenNav />
                    </>
                );
            case 'admin':
                return (
                    <>
                    <AuthorizedNav />
                    </>
                );
            default:
            break;
        }
    };

    return  (
        <>
            {DisplayNavbar()}
        <>
            <Outlet />
        </>
       </>
    );
};