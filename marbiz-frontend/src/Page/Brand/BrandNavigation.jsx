import React, { useState } from 'react'
import { Container, Nav } from 'react-bootstrap';
import { Link, Outlet, useNavigate } from "react-router-dom";


const BrandNavigation = () => {

    const [activeNavItem, setActiveNavItem] = useState('Dashboard');
    const navigate = useNavigate();
    

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
        navigate(`/CreatorNavigation/${item.toLowerCase()}`);
    };
    return (
        <>
            
            {/* Brand dashboard */}
            <div className='creator-dashboard-wrap px-4 py-5 ' style={{
                // minHeight: "100vh",
            }}>

                {/* mobile sidebar navMenu */}
                <a class="mobNavigation collapsed" data-bs-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
                    <i class="fas fa-bars me-2"></i>Dashboard Navigation
                </a>

                {/*sidebar navMenu */}
                <div class="collapse" id="MobNav" >
                    <div class="creator-dashboard-nav ">
                        <div class="creator-dashboard-inner">
                            <ul data-submenu-title="Main Navigation" className="fw-bold">
                                <li className={activeNavItem === 'Home' ? 'active' : ''}>
                                    <Link to="/brand-dashboard/brandHome" onClick={() => handleNavItemClick('Home')}>
                                        <i class="lni lni-dashboard me-2"></i>
                                        Home
                                    </Link>
                                </li>
                                <li className={activeNavItem === 'Bookings' ? 'active' : ''}>
                                    <Link to="/brand-dashboard/brandBooking" onClick={() => handleNavItemClick('Bookings')}>
                                        <i class="lni lni-dashboard me-2"></i>
                                        Bookings
                                    </Link>
                                </li>
                                <li className={activeNavItem === 'Wishlist' ? 'active' : ''}>
                                    <Link to="/brand-dashboard/brandWishlist" onClick={() => handleNavItemClick('Wishlist')}>
                                        <i class="lni lni-files me-2"></i>
                                        Wishlist
                                    </Link>
                                </li>
                                
                            </ul>

                            <ul data-submenu-title="My Accounts">
                                <li className={activeNavItem === 'MyProfile' ? 'active' : ''}>
                                    <Link to="/brand-dashboard/brandProfile" onClick={() => handleNavItemClick('MyProfile')}>
                                        <i class="lni lni-user me-2"></i>
                                        My Profile
                                    </Link>
                                </li>
                                <li className={activeNavItem === 'ChangePassword' ? 'active' : ''}>
                                    <Link to="/brand-dashboard/brandPassword" onClick={() => handleNavItemClick('ChangePassword')}>
                                        <i class="lni lni-lock-alt me-2"></i>
                                        Change Password
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* body content */}
                <div class="creator-dashboard-content">
                    <div class="row">
                        <Outlet />
                    </div>

                </div>
            </div>
        </>
    );
}

export default BrandNavigation;
