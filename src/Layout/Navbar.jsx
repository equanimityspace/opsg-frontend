import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getToken, deleteToken } from "../utils/tokenService";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import opsgLogo from "../Assets/img/opsg-logo.png";

export default function NavBar() {
  const navigate = useNavigate();
  const token = getToken();

  const [isLoggedIn, setIsLoggedIn] = useState("Login");

  let userId;
  if (token) {
    const { id } = jwtDecode(token);
    userId = id;
  }

  useEffect(() => {
    if (token) {
      setIsLoggedIn("LOGOUT");
    } else {
      setIsLoggedIn("LOGIN");
    }
  }, [token]);

  const handleLogout = () => {
    deleteToken(token);
    navigate("/login");
  };

  const [isNotActive, setNotActive] = useState("true");

  // const backToProfile = () => {
  //   navigate(`/profile/${userId}`);
  // };

  //handle login/logout button change
  // const buttonStatus = token ? "Log Out" : "Login";

  // const token =
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="sidebar-header2">
          <img
            src={opsgLogo}
            className="rounded-circle usr-image2"
            style={{
              marginLeft: "25px",
            }}
            height={isNotActive ? "35" : "70"}
            width={isNotActive ? "35" : "70"}
          ></img>
          <h6
            style={{
              marginLeft: "12px",
            }}
          >
            OnPoint
          </h6>
        </div>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav"
            style={{
              paddingLeft: "20px",
              fontSize: "12px",
              width: "40%",
              textAlign: "center",
            }}
          >
            <li className="nav-item active">
              <a className="nav-link " href="/" style={{ paddingLeft: "20px" }}>
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link nav-link2"
                href="/ourservices"
                style={{ paddingLeft: "50px" }}
              >
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link nav-link2"
                href="/contactForm"
                style={{ paddingLeft: "50px" }}
              >
                CONTACT
              </a>
            </li>
            <li className="nav-item active">
              {token ? (
                <a
                  className="nav-link nav-link2"
                  href={`/user/${userId}`}
                  style={{ paddingLeft: "50px" }}
                >
                  PROFILE
                </a>
              ) : (
                <a className="nav-link nav-link2" href="/"></a>
              )}
            </li>
          </ul>
          {token ? (
            <button
              type="button"
              style={{
                backgroundColor: "rgb(121, 203, 187)",
                fontSize: "12px",
              }}
              className="btn btn-sm"
              onClick={handleLogout}
              navigate="/"
            >
              {isLoggedIn}
            </button>
          ) : (
            <button
              type="button"
              style={{
                backgroundColor: "rgb(121, 203, 187)",
                fontSize: "12px",
              }}
              className="btn btn-info btn-sm mx-3"
              onClick={handleLogout} // TODO make sure this is fine, I dont think its fine
            >
              {isLoggedIn}
            </button>
          )}
          {token ? (
            <button className="nav-link" href="/"></button>
          ) : (
            <button
              type="button"
              style={{
                backgroundColor: "rgb(121, 203, 187)",
                fontSize: "12px",
              }}
              className="btn btn-info btn-sm"
              width="20px"
              onClick={() => navigate("/register")}
            >
              REGISTER
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

//TESTING NEW NAVBAR
// const StickyNavigation = () => {
// const [currentId, setCurrentId] = useState(null);
// const [currentTab, setCurrentTab] = useState(null);
// const [tabContainerHeight, setTabContainerHeight] = useState(70);

// useEffect(() => {
//   const handleScroll = () => {
//     checkTabContainerPosition();
//     findCurrentTabSelector();
//   };

//   const handleResize = () => {
//     if (currentId) {
//       setSliderCss();
//     }
//   };

//   $(window).on('scroll', handleScroll);
//   $(window).on('resize', handleResize);

//   return () => {
//     $(window).off('scroll', handleScroll);
//     $(window).off('resize', handleResize);
//   };
// }, []);

// const checkTabContainerPosition = () => {
//   const offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - tabContainerHeight;
//   if ($(window).scrollTop() > offset) {
//     $('.et-hero-tabs-container').toggleClass('et-hero-tabs-container--top');
//   } else {
//     $('.et-hero-tabs-container').toggleClass('et-hero-tabs-container--top');
//   }
// };

// const findCurrentTabSelector = () => {
//   const $window = $(window);
//   let newCurrentId;
//   let newCurrentTab;
//   $window.find('.et-hero-tab').each((_, el) => {
//     const id = $(el).attr('href');
//     const offsetTop = $(id).offset().top - tabContainerHeight;
//     const offsetBottom = $(id).offset().top + $(el).height() - tabContainerHeight;
//     if ($window.scrollTop() > offsetTop && $window.scrollTop() < offsetBottom) {
//       newCurrentId = id;
//       newCurrentTab = $(el);
//     }
//   });
//   if (currentId !== newCurrentId || currentId === null) {
//     setCurrentId(newCurrentId);
//     setCurrentTab(newCurrentTab);
//     setSliderCss();
//   }
// };

// const setSliderCss = () => {
//   if (currentTab) {
//     const width = currentTab.css('width');
//     const left = currentTab.offset().left;
//     $('.et-hero-tab-slider').css('width', width);
//     $('.et-hero-tab-slider').css('left', left);
//   }
// };

// const onTabClick = (event, element) => {
//   event.preventDefault();
//   const scrollTop = $(element.attr('href')).offset().top - tabContainerHeight + 1;
//   $('html, body').animate({ scrollTop: scrollTop }, 600);
// };

// function StickyNavigation() {
//   return (
//     <nav className="et-hero-tabs-container">
//       <div className="et-hero-tabs" onScroll={findCurrentTabSelector} ref={node => {
//         if (node) {
//           $(node).find('.et-hero-tab').on('click', (event) => {
//             onTabClick(event);
//           });
//         }
//       }>
//         {/* ... your tab elements ... */}
//       </div>
//     </nav>
//     );
// }

// export default StickyNavigation;
