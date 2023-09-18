import React from "react";
import logo from "../Images/marbiz-logo.png";
import { Outlet } from "react-router-dom";


function NavBar() {
  return (
    <>

      <nav className="navbar fixed-top navbar-expand-md bg-dark navbar-dark">
        <div className="container">

          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" />
          </a>

          <button className="navbar-toggler" 
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
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a className="nav-link" href="#explore">Explore</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#works">How it Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#category">Category</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/celebprofile">Celeb Profile</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">

              <li className="nav-item ">
                <a className="nav-link" href="brand">Join As Brand</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="creator">Join as creator</a>
              </li>
            </ul>
            <button className=" btn-hover color-4 btn-rounded ms-2">Login</button>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
