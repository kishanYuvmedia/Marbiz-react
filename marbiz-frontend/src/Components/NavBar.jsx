import React from "react";
import logo from "../Images/marbiz-logo.png";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-md  navbar-dark">
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
                <Link className="nav-link text-center " to="/explore">
                  Explore
                </Link>
              </li>
              <div className="vr" style={{backgroundColor: "red"}}></div>

              <li className="nav-item">
                <Link className="nav-link text-center " to="/howitworks">
                  How it Works
                </Link>
              </li>
              <div className="vr" style={{backgroundColor: "red"}}></div>
              <li className="nav-item">
                <Link className="nav-link text-center" to="/category">
                  Category
                </Link>
              </li>

            </ul>
            <ul className="navbar-nav ms-auto">
              
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center" to="/brand">
                  Join as Brand
                  <i className="fa-solid fa-arrow-right-long ms-2"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center" to="/creatorSignUp">
                  Join as creator
                  <i className="fa-solid fa-arrow-right-long ms-2"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login">
                  <button className=" btn-global w-50 fw-normal ms-2">
                    Login
                  </button>
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
