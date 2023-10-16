import React, { useState } from "react";
import logo from "../Images/marbiz-logo.png";
import { Outlet, Link, useLocation } from "react-router-dom";
import { BsSearch, BsBriefcase, BsPeople, BsStar } from "react-icons/bs";

function NavBar() {
  const location = useLocation();
  const [activeNavItem, setActiveNavItem] = useState("explore");

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark sticky-top">
        <div className="container-fluid mx-lg-5">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" />
          </Link>
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
                  className={`nav-link text-center ${
                    activeNavItem === "explore" && "active"
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
                  className={`nav-link text-center ${
                    activeNavItem === "howitworks" && "active"
                  }`}
                  to="/howitworks"
                  onClick={() => handleNavItemClick("howitworks")}
                >
                  How it Works
                </Link>
              </li>
              <div
                className="vr desktop-view"
                style={{ backgroundColor: "#FC6E90" }}
              ></div>
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
              <li className="nav-item">
                <Link to="/login">
                  <button className="btn-global w-50 fw-normal ms-2">
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* mobile navigation */}
      <div className="position-relative mobile-view">
        <nav class="bottom-nav">
          <div
            className={`bottom-nav-item ${
              activeNavItem === "explore" ? "active" : ""
            }`}
            onClick={() => setActiveNavItem("explore")}
          >
            <Link className="bottom-nav-link" to="/explore">
              <BsSearch />
              <span class="">Explore</span>
            </Link>
          </div>

          <div
            className={`bottom-nav-item ${
              activeNavItem === "brand" ? "active" : ""
            }`}
            onClick={() => setActiveNavItem("brand")}
          >
            <Link className="bottom-nav-link" to="/brand">
              <BsBriefcase />
              <span class="">Brand</span>
            </Link>
          </div>
          <div
            className={`bottom-nav-item ${
              activeNavItem === "login" ? "active" : ""
            }`}
            onClick={() => setActiveNavItem("login")}
          >
            <Link to="/login" className="bottom-nav-link">
              <BsPeople />
              <span class="">Login</span>
            </Link>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  );
}

export default NavBar;
