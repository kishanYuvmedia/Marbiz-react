import React from "react";
import logo from "../Images/marbiz-logo.png";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-md bg-dark navbar-dark">
        <div className="container">
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
                <Link className="nav-link" to="/#">
                  Explore
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#">
                  How it Works
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#">
                  Category
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/celebprofile">
                  Celeb Profile
                </Link>
              </li> */}
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/brand">
                  Join As Brand
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/creator">
                  Join as creator
                </Link>
              </li>
            </ul>
            <button className=" btn-hover color-4 btn-rounded ms-2">
              Login
            </button>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
