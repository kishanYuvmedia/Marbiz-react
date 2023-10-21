import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom";



const CreatorDashboard = () => {

    const [activeNavItem, setActiveNavItem] = useState('Dashboard');
    const navigate = useNavigate();
    

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
        navigate(`/creatorDashboard/${item.toLowerCase()}`);
    };
    return (
        <>
            {/* dashboard */}
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
                                {/* <li className={activeNavItem === 'Dashboard' ? 'active' : ''}>
                                    <Link to="/creatorDashboard" onClick={() => handleNavItemClick('Dashboard')}>
                                        <i class="lni lni-dashboard me-2"></i>
                                        Dashboard
                                    </Link>
                                </li> */}
                                <li className={activeNavItem === 'Enquires' ? 'active' : ''}>
                                    <Link to="/creatorDashboard/enquires" onClick={() => handleNavItemClick('Enquires')}>
                                        <i class="lni lni-files me-2"></i>
                                        Enquires
                                    </Link>
                                </li>
                                <li className={activeNavItem === 'CreatorPackages' ? 'active' : ''}>
                                    <Link to="/creatorDashboard/CreatorPackages" onClick={() => handleNavItemClick('CreatorPackages')}>
                                        <i class="lni lni-add-files me-2"></i>
                                        Packages
                                    </Link>
                                </li>
                            </ul>

                            <ul data-submenu-title="My Accounts">
                                <li className={activeNavItem === 'MyProfile' ? 'active' : ''}>
                                    <Link to="/creatorDashboard/CreatorPage" onClick={() => handleNavItemClick('MyProfile')}>
                                        <i class="lni lni-user me-2"></i>
                                        My Profile
                                    </Link>
                                </li>
                                <li className={activeNavItem === 'ChangePassword' ? 'active' : ''}>
                                    <Link to="/creatorDashboard/changepassword" onClick={() => handleNavItemClick('ChangePassword')}>
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
    )
}

export default CreatorDashboard