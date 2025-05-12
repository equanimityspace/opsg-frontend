import React from "react";
import { getRole } from "./ProtectedRoutes";

export function landingPage() {
    const role = getRole();


    const displayLandingPage = () => {
      switch (role) {

        case 'visitor', 'disabled':
            return (
                <>
                <OpenNav />
                </>
            );

        case 'user':
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
          break;
      }
    };

    return (
        <>
        {displayLandingPage()}
        </>
    )
};
