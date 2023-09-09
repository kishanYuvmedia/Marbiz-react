import React from "react";
import logo from "../Images/marbiz-logo.png";
import Container from "react-bootstrap/Container";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>

      <header class=" bg-neutral-900 body-font border-b-2 border-b-purple-500">
        <div class="container mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
          {/* logo */}
          <a class="flex title-font font-medium items-center nav-btn my-2 md:mb-0" href="/">
            <img src={logo} alt="" />
          </a>

          {/* Center navigation */}
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">

            <a href="#explore" class="mr-5 text-lg font-semibold nav-btn   no-underline">Explore</a>

            <a href="#works" class="mr-5 text-lg font-semibold nav-btn   no-underline">How it Works</a>

            <a href="#category" class="mr-5 text-lg font-semibold nav-btn   no-underline">Category</a>
          </nav>

          {/* right navigation */}
          <a href="brand" class="mr-5 text-lg font-semibold nav-btn   no-underline">Join As Brand</a>
          <a href="creator" class="mr-5 text-lg font-semibold nav-btn   no-underline">Join as creator</a>

          <button class=" nav-btn font-semibold text-white inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg text-sm px-5 py-2.5 text-center ">Login
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>


      <Outlet />
    </>
  );
}

export default NavBar;
