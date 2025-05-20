import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getToken, deleteToken } from "../utils/tokenService";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import opsgLogo from "../Assets/img/opsg-logo.png";
import "../Layout/navbar.css";
import ReactiveButton from "reactive-button";

export default function NavBarExperiment() {
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

  return (
    <header>
        <a className="navbarLayout"></a>
        <nav className="navContainer"
        style={{
            display: "inlineGrid",
            gridTemplateRows: "auto auto auto",
        }}
        >
          <div className="nameLogo"
            style={{
              zIndex: "0",
            }}
          >
            <img
              src={opsgLogo}
              className="rounded-circle usr-image2"
              style={{
                marginLeft: "30px",
                marginTop: "18px",
              }}
              height={isNotActive ? "35" : "70"}
              width={isNotActive ? "35" : "70"}
            ></img>
            <h6
              style={{
                marginLeft: "17px",
              }}
            >
              OnPoint
            </h6>
          </div>
        <div>
          <ul 
            className="nav justify-content-start"
            style={{
              paddingLeft: "100px",
              fontSize: "12px",
            }}
          >
            <li className="nav-item active">
              <a
                className="nav-link"
                variant="secondary"
                href="/"
                style={{ 
                  maxWidth: "300px",
                  color: "black",
                }}
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link nav-link2"
                href="/ourservices"
                style={{ 
                  maxWidth: "300px",
                  color: "black",              
                }}
              >
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link nav-link2"
                href="/contactForm"
                style={{ 
                  maxWidth: "300px",
                  color: "black",            
                }}
              >
                CONTACT
              </a>
            </li>
            <li className="nav-item active">
              {token ? (
                <a
                  className="nav-link nav-link2"
                  href={`/user/${userId}`}
                  style={{ 
                    maxWidth: "300px",
                    color: "black",    
                  }}
                >
                  PROFILE
                </a>
              ) : (
                <a className="nav-link nav-link2" href="/"></a>
              )}
            </li>
          </ul>
        </div>
        <div className="buttonContainer">
          {token ? (
            <ReactiveButton
              rounded
              idleText={'LOGOUT'}
              type="button"
              variant="secondary"
              style={{
                width: "80px",
                backgroundColor: "rgb(121, 203, 187)",
                fontSize: "12px",
              }}
              className="button"
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
                backgroundColor: "rgb(121, 203, 187)",
                fontSize: "12px",
                align: "center",
              }}
              className="button"
              onClick={handleLogout} // TODO make sure this is fine, I dont think its fine
            >
              {isLoggedIn}
            </ReactiveButton>
          )}
          </div>
          <div className="buttonContainer">
          {token ? (
            <button className="nav-link" href="/" variant="secondary"></button>
          ) : (
            <ReactiveButton
              rounded
              idleText={'REGISTER'}
              type="button"
              style={{
                backgroundColor: "rgb(121, 203, 187)",
                fontSize: "12px",
              }}
              className="button"
              onClick={() => navigate("/register")}
            >
            </ReactiveButton>
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
