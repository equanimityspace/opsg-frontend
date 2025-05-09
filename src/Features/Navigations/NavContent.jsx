import { Outlet } from "react-router-dom";
import React from "react";
import AdminNav from "./Navbars/AdminNav";
import UserNav from "./Navbars/UserNav";
import OpenNav from "./Navbars/OpenNav";

export default function navContent() {
    const role = window.sessionStorage.getItem("role").toLowerCase();
    
    const displayNavBar = () => {

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
      
              case 'admin':
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
              <div className='nav-content'>
                {displayNavBar()}
                <div>
                    <Outlet />
                </div>
              </div>
          );
      };
    