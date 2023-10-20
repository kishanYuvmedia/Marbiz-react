import React from 'react'

const CreatorDashboard = () => {
    return (
        <>
            {/* dashboard */}
            <div className='creator-dashboard-wrap px-4 py-5 bg-dark' style={{
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
                            <ul data-submenu-title="Main Navigation" className='fw-bold'>
                                <li class="active">
                                    <a href="dashboard.html">
                                        <i class="lni lni-dashboard me-2"></i>
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a href="dashboard-my-listings.html">
                                        <i class="lni lni-files me-2"></i>
                                        My Listings
                                    </a>
                                </li>
                                <li>
                                    <a href="dashboard-add-listings.html">
                                        <i class="lni lni-add-files me-2"></i>
                                        Add Listing
                                    </a>
                                </li>
                                <li>
                                    <a href="dashboard-saved-listings.html">
                                        <i class="lni lni-bookmark me-2"></i>
                                        Saved Listing</a>
                                </li>
                                <li>
                                    <a href="dashboard-my-bookings.html">
                                        <i class="lni lni-briefcase me-2"></i>
                                        My Bookings<span class="count-tag bg-warning">4</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="dashboard-wallet.html">
                                        <i class="lni lni-mastercard me-2"></i>
                                        Wallet
                                    </a>
                                </li>
                                <li>
                                    <a href="dashboard-messages.html">
                                        <i class="lni lni-envelope me-2"></i>
                                        Messages<span class="count-tag">4</span>
                                    </a>
                                </li>
                            </ul>

                            <ul data-submenu-title="My Accounts">
                                <li>
                                    <a href="dashboard-my-profile.html">
                                        <i class="lni lni-user me-2"></i>
                                        My Profile
                                    </a>
                                </li>
                                <li><a href="dashboard-change-password.html">
                                    <i class="lni lni-lock-alt me-2"></i>
                                    Change Password</a>
                                </li>
                                <li>
                                    <a href="/#">
                                        <i class="lni lni-trash-can me-2"></i>
                                        Delete Account
                                    </a>
                                </li>
                                <li>
                                    <a href="login.html">
                                        <i class="lni lni-power-switch me-2"></i>
                                        Log Out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* body content */}
                <div class="creator-dashboard-content">
                    <div class="dashboard-tlbar d-block mb-5">
                        <div class="row">
                            <div class="colxl-12 col-lg-12 col-md-12">
                                <h1 class="ft-medium">Hello, Darnell Johns</h1>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item text-muted"><a href="/#">Home</a></li>
                                        <li class="breadcrumb-item"><a href="/#" class="theme-cl">Dashboard</a></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default CreatorDashboard