import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { BsSearch, BsBriefcase, BsPeople, BsStar } from "react-icons/bs";


const MobileNavBar = () => {

    const [activeNavItem, setActiveNavItem] = useState("explore");
    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
    };
    return (
        <div>
            {/* mobile navigation */}
            <div className="position-relative mobile-view">
                <nav class="bottom-nav">
                    <div
                        className={`bottom-nav-item ${activeNavItem === "explore" ? "active" : ""
                            }`}
                        onClick={() => setActiveNavItem("explore")}
                    >
                        <Link className="bottom-nav-link" to="/explore">

                            <BsSearch />
                            <span class="">Explore</span>
                        </Link>
                    </div>

                    <div
                        className={`bottom-nav-item ${activeNavItem === "brand" ? "active" : ""
                            }`}
                        onClick={() => setActiveNavItem("brand")}
                    >
                        <Link className="bottom-nav-link" to="/brand">
                            <BsBriefcase />
                            <span class="">Brand</span>
                        </Link>
                    </div>
                    <div
                        className={`bottom-nav-item ${activeNavItem === "creator" ? "active" : ""
                            }`}
                        onClick={() => setActiveNavItem("creator")}
                    >
                        <Link className="bottom-nav-link" to="/creator">
                            <BsStar />
                            <span class="">Creator</span>
                        </Link>
                    </div>
                    <div
                        className={`bottom-nav-item ${activeNavItem === "login" ? "active" : ""
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
        </div>
    )
}

export default MobileNavBar;