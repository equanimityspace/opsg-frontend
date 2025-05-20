import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getToken, deleteToken } from "../utils/tokenService";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import opsgLogo from "../Assets/img/opsg-logo.png";
import "../Layout/navbar.css";
import ReactiveButton from "reactive-button";

export default function NavBar() {
  const navigate = useNavigate();
  const token = getToken();

  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const [isLoading, setLoading] = useState(false);

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
<nav className="navbar navbar-inverse bg-light2">
  <div className="container-fluid" style={{diplay: "contents", paddingRight: "30px"}}>
    <div className="navbar-header">
          <div className="nameLogo navbar-brand">
            <img
              src={opsgLogo}
              className="rounded-circle usr-image2 nav navbar-nav"
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

        {/* <div className="collapse navbar-collapse" id="navbarNav" > */}
          
          <ul
            className="nav navbar-nav  sidebar-header2"
            style={{
              fontSize: "12px",
              width: "40%",
              display: "flex",
              flexDirection: "row",
              marginBottom: "15px",
            }}
          >
            <li className="nav-item active">
              <a
                className="nav-link"
                variant="secondary"
                href="/"
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/ourservices"
                
              >
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/contactForm"
               
              >
                CONTACT
              </a>
            </li>
            <li className="nav-item active">
              {token ? (
                <a
                  className="nav-link"
                  href={`/user/${userId}`}
               
                >
                  PROFILE
                </a>
              ) : (
                <a className="nav-link" href="/"></a>
              )}
            </li>
            </ul>
  

            {/* <ReactiveButton
                  rounded
                  buttonState={isLoading ? 'loading' : 'idle'}
                  idleText={'LOGIN'}
                  loadingText={'Loading'}
                  variant="secondary"
                  className="button3"
                  type="submit"
                  style={{
                    width: "80px",
                    fontSize: "12px",
                    backgroundColor: "rgb(121, 203, 187)"
                  }}>
            </ReactiveButton> */}
            <ul className="nav navbar-nav navbar-right" style={{display: "flex",
              flexDirection: "row"
              }}>
      <li>
        <span style={{ 
              marginRight: "15px",}}>
          {token ? (
            <ReactiveButton
              rounded
              idleText={'LOGOUT'}
              type="button"
              variant="secondary"
              style={{
                width: "80px",
                backgroundColor: "#558e89",
                fontSize: "12px",
              }}
              // className=""
              onClick={handleLogout}
              navigate="/"
            >
              {isLoggedIn}
            </ReactiveButton>
          ) : (
            <ReactiveButton
              rounded                  
              idleText={'LOGIN'}
              type="button"
              variant="secondary"
              style={{
                marginRight: "5px",
                backgroundColor: "#558e89",
                fontSize: "12px",
              }}
              className="navbar-right"
              onClick={handleLogout} // TODO make sure this is fine, I dont think its fine
            >
              {isLoggedIn}
            </ReactiveButton>
          )}
          </span>
          </li>
          <li>
            <span>
          {token ? (
            <button className="nav-link" href="/" variant="secondary"></button>
          ) : (
            <ReactiveButton
              rounded
              idleText={'REGISTER'}
              type="button"
              style={{
                backgroundColor: "#558e89",
                fontSize: "12px",
              }}
              // className="button"
              onClick={() => navigate("/register")}
            >
            </ReactiveButton>

            



          /* {token ? (
            <button
              type="button"
              variant="secondary"
              style={{
                backgroundColor: "rgb(121, 203, 187)",
                fontSize: "12px",
              }}
              className="button"
              onClick={handleLogout}
              navigate="/"
            >
              {isLoggedIn}
            </button>
          ) : (
            <button
              type="button"
              variant="secondary"
              style={{
                backgroundColor: "rgb(121, 203, 187)",
                fontSize: "12px",
              }}
              className="button"
              onClick={handleLogout} // TODO make sure this is fine, I dont think its fine
            >
              {isLoggedIn}
            </button>
          )}
          {token ? (
            <button className="nav-link" href="/" variant="secondary"></button>
          ) : (
            <button
              type="button"
              style={{
                backgroundColor: "rgb(121, 203, 187)",
                fontSize: "12px",
              }}
              className="button"
              width="20px"
              onClick={() => navigate("/register")}
            >
              REGISTER
            </button> */
          )}
          </span>
          </li>
           </ul>
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
