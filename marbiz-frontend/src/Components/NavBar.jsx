import React from "react";
import logo from "../Images/marbiz-logo.png";
import { Outlet } from "react-router-dom";


function NavBar() {
  return (
    <>
      
      <nav class="navbar navbar-expand-md bg-black navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="Logo" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#explore">Explore</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#works">How it Works</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#category">Category</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/celebprofile">Celeb Profile</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
            
            <li class="nav-item ">
                <a class="nav-link" href="brand">Join As Brand</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="creator">Join as creator</a>
              </li>
            </ul>
            <button class=" btn-hover color-4 btn-rounded ml-2">Login</button>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
