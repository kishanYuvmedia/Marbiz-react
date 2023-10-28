import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom";
const CreatorNavigation = () => {

    const [activeNavItem, setActiveNavItem] = useState('Dashboard');
    const navigate = useNavigate();
    

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
        navigate(`/CreatorNavigation/${item.toLowerCase()}`);
    };
    return (
        <>
            {/* dashboard */}
            <div className='creator-dashboard-wrap px-4 py-5 ' style={{
                // minHeight: "100vh",
            }}>

                {/* mobile sidebar navMenu */}
                <a className="mobNavigation collapsed" data-bs-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
                    <i className="fas fa-bars me-2"></i>Dashboard Navigation
                </a>

                {/*sidebar navMenu */}
                <div className="collapse" id="MobNav" >
                    <div className="creator-dashboard-nav ">
                        <div className="creator-dashboard-inner">
                            <ul data-submenu-title="Main Navigation" className="fw-bold">
                                {/* <li className={activeNavItem === 'Dashboard' ? 'active' : ''}>
                                    <Link to="/creatorDashboard" onClick={() => handleNavItemClick('Dashboard')}>
                                        <i className="lni lni-dashboard me-2"></i>
                                        Dashboard
                                    </Link>
                                </li> */}
                                <li className={activeNavItem === 'Enquires' ? 'active' : ''}>
                                    <Link to="/creatorDashboard/CreatorEnquiries" onClick={() => handleNavItemClick('Enquires')}>
                                        <i className="lni lni-files me-2"></i>
                                        Enquires
                                    </Link>
                                </li>
                                <li className={activeNavItem === 'CreatorUpload' ? 'active' : ''}>
                                    <Link to="/creatorDashboard/CreatorUpload" onClick={() => handleNavItemClick('CreatorUpload')}>
                                        <i className="lni lni-image me-2"></i>
                                        Add Portfolio
                                    </Link>
                                </li>
                                <li className={activeNavItem === 'PortfolioList' ? 'active' : ''}>
                                    <Link to="/creatorDashboard/PortfolioList" onClick={() => handleNavItemClick('PortfolioList')}>
                                        <i className="lni lni-image me-2"></i>
                                         Portfolio List
                                    </Link>
                                </li>
                                <li className={activeNavItem === 'CreatorPackages' ? 'active' : ''}>
                                    <Link to="/creatorDashboard/CreatorPackages" onClick={() => handleNavItemClick('CreatorPackages')}>
                                        <i className="lni lni-add-files me-2"></i>
                                        Packages
                                    </Link>
                                </li>
                            </ul>

                            <ul data-submenu-title="My Accounts">
                                <li className={activeNavItem === 'MyProfile' ? 'active' : ''}>
                                    <Link to="/creatorDashboard/CreatorMyProfile" onClick={() => handleNavItemClick('MyProfile')}>
                                        <i className="lni lni-user me-2"></i>
                                        My Profile
                                    </Link>
                                </li>
                                <li className={activeNavItem === 'ChangePassword' ? 'active' : ''}>
                                    <Link to="/creatorDashboard/CreatorPassword" onClick={() => handleNavItemClick('ChangePassword')}>
                                        <i className="lni lni-lock-alt me-2"></i>
                                        Change Password
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* body content */}
                <div className="creator-dashboard-content">
                    <div className="row">
                        <Outlet />
                    </div>

                </div>
            </div>
        </>
    )
}

export default CreatorNavigation