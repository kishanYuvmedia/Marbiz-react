import React, { useState, useEffect } from "react";
import logo from "../Images/marbiz-logo.webp";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  BsSearch,
  BsBriefcase,
  BsPeople,
  BsStar,
  BsIncognito,
} from "react-icons/bs";

import artist_1 from "../Images/icon.png";
import { isEmpty } from "lodash";

function NavBar() {
  const location = useLocation();
  const [activeNavItem, setActiveNavItem] = useState("explore");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginUser, setLoginUser] = useState([]);
  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic here, and then set isLoggedIn to false
    setIsLoggedIn(false);
  };
  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"));
      console.log("login user", obj);
      setLoginUser(obj);
    }
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark sticky-top">
        <div className="container-fluid mx-lg-5">
          <div className="navbar-brand">
            <Link className="" to="/">
              <img src={logo} alt="Logo" className="img-fluid " />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fas fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link text-center ${activeNavItem === "explore" && "active"
                    }`}
                  to="/explore"
                  onClick={() => handleNavItemClick("explore")}
                >
                  Explore
                </Link>
              </li>
              <div
                className="vr desktop-view"
                style={{ backgroundColor: "#FC6E90" }}
              ></div>
              <li className="nav-item">
                <Link
                  className={`nav-link text-center ${activeNavItem === "AboutUs" && "active"
                    }`}
                  to="/AboutUs"
                  onClick={() => handleNavItemClick("AboutUs")}
                >
                  About Us
                </Link>
              </li>
              <div
                className="vr desktop-view"
                style={{ backgroundColor: "#FC6E90" }}
              ></div>
              <li className="nav-item">
                <Link
                  className={`nav-link text-center ${activeNavItem === "celebrity" && "active"
                    }`}
                  to="/celebrity"
                  onClick={() => handleNavItemClick("celebrity")}
                >
                  Celebrity
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center"
                  to="/brand"
                >
                  Join as Brand
                  <i className="fa-solid fa-arrow-right-long ms-2"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center"
                  to="/creator"
                >
                  Join as creator
                  <i className="fa-solid fa-arrow-right-long ms-2"></i>
                </Link>
              </li>
              {isEmpty(loginUser) && (
                <li className="nav-item" style={{ width: "180px", }} >
                  <Link to="/login">
                    <button className="btn-global w-50 fw-normal ms-2">
                      Login
                    </button>
                  </Link>
                </li>
              )}

              {!isEmpty(loginUser) && (
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle"
                    href="/#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center ">
                      <div className="user-image-container">
                        <img
                          src={loginUser.profile ? loginUser.profile : artist_1}
                          alt="user-img"
                          className="img-fluid rounded-circle border border-danger border-3"
                        />
                      </div>
                      <div className="text-white text-capitalize ms-2">
                        {loginUser.realm}
                      </div>
                    </div>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  {loginUser.userType ==="Business" &&
                  <li>
                  <Link to="/brand-dashboard/brandHome" className="dropdown-item">
                    My Profile
                  </Link>
                </li>
                  }
                    {loginUser.userType !="Business" &&
                 <li>
                 <Link to="/creatorDashboard/CreatorMyProfile" className="dropdown-item">
                   My Profile
                 </Link>
               </li>
                  }
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <Link to="" className="dropdown-item">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* mobile navigation */}
      <div className="position-relative mobile-view">
        <nav className="bottom-nav">
          <div
            className={`bottom-nav-item ${activeNavItem === "explore" ? "active" : ""
              }`}
            onClick={() => setActiveNavItem("explore")}
          >
            <Link className="bottom-nav-link" to="/explore">
              <BsSearch />
              <span className="">Explore</span>
            </Link>
          </div>

          <div
            className={`bottom-nav-item ${activeNavItem === "brand" ? "active" : ""
              }`}
            onClick={() => setActiveNavItem("brand")}
          >
            <Link className="bottom-nav-link" to="/brand">
              <BsBriefcase />
              <span className="">Brand</span>
            </Link>
          </div>
          <div
            className={`bottom-nav-item ${activeNavItem === "profile" ? "active" : ""
              }`}
            onClick={() => setActiveNavItem("profile")}
          >
            {!isEmpty(loginUser) && (
              <div className="d-grid justify-content-center align-items-center dropup">
                <div className="user-image-container dropdown-toggle" data-bs-toggle="dropdown">
                  <img
                    src={loginUser.profile ? loginUser.profile : artist_1}
                    alt="user-img"
                    className="img-fluid rounded-circle border border-danger border-3"
                  />
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="" className="dropdown-item">
                      My Profile
                    </Link>
                  </li>

                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <Link to="" className="dropdown-item">
                      Logout
                    </Link>
                  </li>
                </ul>

              </div>
            )}
            {isEmpty(loginUser) && (
              <div className={`bottom-nav-item ${activeNavItem === "login" ? "active" : ""
                }`}
                onClick={() => setActiveNavItem("login")}
              >
                <Link to="/login" className="bottom-nav-link">
                  <BsPeople />
                  <span className="">Login</span>
                </Link>
              </div>
            )}
          </div>

          <div
            className={`bottom-nav-item ${activeNavItem === "creator" ? "active" : ""
              }`}
            onClick={() => setActiveNavItem("creator")}
          >
            <Link className="bottom-nav-link" to="/creator">
              <BsStar />
              <span className="">Creator</span>
            </Link>
          </div>
          <div
            className={`bottom-nav-item ${activeNavItem === "Celebrity" ? "active" : ""
              }`}
            onClick={() => setActiveNavItem("Celebrity")}
          >
            <Link className="bottom-nav-link" to="/celebrity">
              <BsIncognito />
              <span className="">Celebrity</span>
            </Link>
          </div>

        </nav>
      </div>

      <Outlet />
    </>
  );
}

export default NavBar;
