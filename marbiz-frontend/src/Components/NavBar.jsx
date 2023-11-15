import React, { useState, useEffect } from "react";
import logo from "../Images/marbiz-logo.webp";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import {
  BsSearch,
  BsBriefcase,
  BsPeople,
  BsStar,
  BsIncognito,
} from "react-icons/bs";
import Swal from "sweetalert2";
import artist_1 from "../Images/icon.png";
import { isEmpty } from "lodash";
import {authenticationService} from "../services/api/auth-service";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  const [activeNavItem, setActiveNavItem] = useState("explore");
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginUser, setLoginUser] = useState([]);


  // Function to handle logout
  const handleLogout = () => {
    // console.log("logout");
    setIsLoggedIn(false);
   
    Swal.fire({
      title: "Logout Your Account?",
      width: 600,
      padding: "3em",
      customClass: {
        title: 'my-swal-title',
      },
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        authenticationService.logout();
      }
    });
   
  };
  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"));
      // console.log("login user", obj);
      setLoginUser(obj);
    }
  }, []);
  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-md navbar-dark sticky-top">
        <div className="container-fluid mx-lg-5">
          <div className="navbar-brand">
            <NavLink className="" to="/">
              <img src={logo} alt="Logo" className="img-fluid " />
            </NavLink>
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
                <NavLink
                  to="/explore"
                  className="nav-link text-center"
                  activeclassname="active"
                >
                  Explore
                </NavLink>
              </li>
              <div
                className="vr desktop-view"
                style={{ backgroundColor: "#FC6E90" }}
              ></div>
              <li className="nav-item">
                <NavLink
                  to="/AboutUs"
                  className="nav-link text-center"
                  activeclassname="active"
                >
                  About Us
                </NavLink>
              </li>
              <div
                className="vr desktop-view"
                style={{ backgroundColor: "#FC6E90" }}
              ></div>
              <li className="nav-item">
                <NavLink
                  to="/celebrity"
                  className="nav-link text-center"
                  activeclassname="active"
                >
                  Celebrity
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/brand"
                  className="nav-link d-flex align-items-center"
                  activeclassname="active"
                >
                  Join as Brand
                  <i className="fa-solid fa-arrow-right-long ms-2"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/creator"
                  className="nav-link d-flex align-items-center"
                  activeclassname="active"
                >
                  Join as creator
                  <i className="fa-solid fa-arrow-right-long ms-2"></i>
                </NavLink>
              </li>
              {isEmpty(loginUser) && (
                <li className="nav-item" style={{ width: "180px", }} >
                  <NavLink to="/login">
                    <button className="btn-global w-50 fw-normal ms-2">
                      Login
                    </button>
                  </NavLink>
                </li>
              )}

              {!isEmpty(loginUser) && (
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle"
                    href="/#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
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

                    {/* profile */}
                    {loginUser.userType === "Business" &&
                      <li>
                        <NavLink to="/brand-dashboard/brandHome"
                          className={`dropdown-item ${location.pathname === "/brand-dashboard/brandHome" ? "active" : ""
                            }`}
                        >
                          Profile
                        </NavLink>
                      </li>
                    }
                    {loginUser.userType !== "Business" &&
                      <li>
                        <NavLink to="/creatorDashboard/CreatorMyProfile"
                          className={`dropdown-item ${location.pathname === "/creatorDashboard/CreatorMyProfile" ? "active" : ""
                            }`}
                        >
                          Profile
                        </NavLink>
                      </li>
                    }

                    {/* {loginUser.userType === "Business" &&
                      <li>
                        <NavLink to="/brand-dashboard/brandWishlist"
                          className={`dropdown-item ${location.pathname === "/brand-dashboard/brandWishlist" ? "active" : ""
                            }`}
                        >
                          Wishlist
                        </NavLink>
                      </li>
                    } */}

                    {loginUser.userType !== "Business" &&
                      <li>
                        <NavLink to="/creatorDashboard/CreatorEnquiries"
                          className={`dropdown-item ${location.pathname === "/creatorDashboard/CreatorEnquiries" ? "active" : ""
                            }`}
                        >
                          Enquiries
                        </NavLink>
                      </li>
                    }

                    {/* Packages / bookings */}
                    {loginUser.userType === "Business" &&
                      <li>
                        <NavLink to="/brand-dashboard/brandBooking"
                          className={`dropdown-item ${location.pathname === "/brand-dashboard/brandBooking" ? "active" : ""
                            }`}>
                          Bookings
                        </NavLink>
                      </li>
                    }
                    {loginUser.userType !== "Business" &&

                      <li>
                        <NavLink to="/creatorDashboard/CreatorPackages"
                          className={`dropdown-item ${location.pathname === "/creatorDashboard/CreatorPackages" ? "active" : ""
                            }`}>
                          Packages
                        </NavLink>
                      </li>
                    }

                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <NavLink to="/#" className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </NavLink>
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
            className={`bottom-nav-item ${location.pathname === "/explore" ? "active" : ""
              }`}
          >
            <NavLink className="bottom-nav-link" to="/explore">
              <BsSearch />
              <span className="">Explore</span>
            </NavLink>
          </div>

          <div
            className={`bottom-nav-item ${location.pathname === "/brand" ? "active" : ""
              }`}
          >
            <NavLink className="bottom-nav-link" to="/brand">
              <BsBriefcase />
              <span className="">Brand</span>
            </NavLink>
          </div>
          <div
            className={`bottom-nav-item ${location.pathname === "/profile" ? "active" : ""
              }`}
          >
            {!isEmpty(loginUser) && (
              <div className="d-grid justify-content-center align-items-center dropup dropdown-center">
                <div className="user-image-container dropdown-toggle" data-mdb-toggle="dropdown">
                  <img
                    src={loginUser.profile ? loginUser.profile : artist_1}
                    alt="user-img"
                    className="img-fluid rounded-circle border border-danger border-3"
                  />
                </div>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                  {/* profile */}
                  {loginUser.userType === "Business" &&
                    <li>
                      <NavLink to="/brand-dashboard/brandHome"
                        className={`dropdown-item ${location.pathname === "/brand-dashboard/brandHome" ? "active" : ""
                          }`}
                      >
                        Profile
                      </NavLink>
                    </li>
                  }
                  {loginUser.userType !== "Business" &&
                    <li>
                      <NavLink to="/creatorDashboard/CreatorMyProfile"
                        className={`dropdown-item ${location.pathname === "/creatorDashboard/CreatorMyProfile" ? "active" : ""
                          }`}
                      >
                        Profile
                      </NavLink>
                    </li>
                  }

                  {/* Wishlist / Enquiries */}
                  {/* {loginUser.userType === "Business" &&
                    <li>
                      <NavLink to="/brand-dashboard/brandWishlist"
                        className={`dropdown-item ${location.pathname === "/brand-dashboard/brandWishlist" ? "active" : ""
                          }`}
                      >
                        Wishlist
                      </NavLink>
                    </li>
                  } */}

                  {loginUser.userType !== "Business" &&
                    <li>
                      <NavLink to="/creatorDashboard/CreatorEnquiries"
                        className={`dropdown-item ${location.pathname === "/creatorDashboard/CreatorEnquiries" ? "active" : ""
                          }`}
                      >
                        Enquiries
                      </NavLink>
                    </li>
                  }

                  {/* Packages / bookings */}
                  {loginUser.userType === "Business" &&
                    <li>
                      <NavLink to="/brand-dashboard/brandBooking"
                        className={`dropdown-item ${location.pathname === "/brand-dashboard/brandBooking" ? "active" : ""
                          }`}>
                        Bookings
                      </NavLink>
                    </li>
                  }
                  {loginUser.userType !== "Business" &&

                    <li>
                      <NavLink to="/creatorDashboard/CreatorPackages"
                        className={`dropdown-item ${location.pathname === "/creatorDashboard/CreatorPackages" ? "active" : ""
                          }`}>
                        Packages
                      </NavLink>
                    </li>
                  }

                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <NavLink to="/#" className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </NavLink>
                  </li>
                </ul>

              </div>
            )}
            {isEmpty(loginUser) && (
              <div className={`bottom-nav-item ${location.pathname === "login" ? "active" : ""
                }`}
              >
                <NavLink to="/login" className="bottom-nav-link">
                  <BsPeople />
                  <span className="">Login</span>
                </NavLink>
              </div>
            )}
          </div>

          <div
            className={`bottom-nav-item ${location.pathname === "/creator" ? "active" : ""
              }`}
          >
            <NavLink className="bottom-nav-link" to="/creator">
              <BsStar />
              <span className="">Creator</span>
            </NavLink>
          </div>
          <div
            className={`bottom-nav-item ${location.pathname === "/celebrity" ? "active" : ""
              }`}
          >
            <NavLink className="bottom-nav-link" to="/celebrity">
              <BsIncognito />
              <span className="">Celebrity</span>
            </NavLink>
          </div>

        </nav>
      </div>

      <Outlet />
    </>
  );
}

export default NavBar;
