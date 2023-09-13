import React from 'react'
import logo from "../Images/marbiz-logo.png";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container-fluid footer bg-black p-5 mt-5" style={{ borderRadius: "50px 50px 0 0" }}>
                <div className='row justify-content-around'>
                    <div className='col-lg-2 col-md-3 col-sm-6'>
                        <img src={logo} alt="Logo" />
                        <p className='text-white mt-3'>
                            Influencer marketing can be an effective strategy
                            for many brands, but it's not without its challenges
                            and potential pitfalls. Here are some common shortcomings
                            or challenges associated with influencer marketing:
                        </p>
                        <div className="mt-4">
                            <div className="d-flex">
                                <a href="#facebook" className="text-gray-400 hover-text-gray-900 dark-hover-text-white me-3">
                                    <i className="fab fa-facebook-square"></i>
                                </a>
                                <a href="#Discord" className="text-gray-400 hover-text-gray-900 dark-hover-text-white me-3">
                                    <i className="fab fa-discord"></i>
                                </a>
                                <a href="#Twitter" className="text-gray-400 hover-text-gray-900 dark-hover-text-white me-3">
                                    <i className="fab fa-twitter-square"></i>
                                </a>
                                <a href="#Github" className="text-gray-400 hover-text-gray-900 dark-hover-text-white me-3">
                                    <i className="fab fa-github-square"></i>
                                </a>
                                <a href="#Dribble" className="text-gray-400 hover-text-gray-900 dark-hover-text-white">
                                    <i className="fab fa-dribbble"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-2 col-md-3 col-sm-6'>
                        <h2 className="mb-2 text-white text-uppercase font-bold ">Category</h2>
                        <div className='list-group list-group-light list-group-small'>
                            <li className='mb-2 list-group-item'>
                                <a href="#celeb" className='group-item'>Celebrities & Influencer</a>
                            </li>
                            <li className='mb-2 list-group-item'>
                                <a href="#celeb" className='group-item'>Spokespersons & Models</a>
                            </li>
                            <li className='mb-2 list-group-item'>
                                <a href="#celeb" className='group-item'>News Articles & Blogs</a>
                            </li>
                            <li className='mb-2 list-group-item'>
                                <a href="#celeb" className='group-item'>Micro Influencer & Content Creators</a>
                            </li>
                        </div>
                    </div>

                    <div className='col-lg-2 col-md-3 col-sm-6'>
                        <h2 className="mb-2 text-white text-uppercase font-bold">Discover</h2>
                        <ul className='list-group list-group-light list-group-small'>
                            <li className='mb-2 list-group-item'>
                                <a href="#celeb" className='group-item'>Find Influencers</a>
                            </li>
                            <li className='mb-2 list-group-item'>
                                <a href="#celeb" className='group-item '>Top Influencers</a>
                            </li>
                            <li className='mb-2 list-group-item'>
                                <a href="#celeb" className='group-item '>Hire an Influencer</a>
                            </li>
                        </ul>
                    </div>

                    <div className='col-lg-2 col-md-3 col-sm-6'>
                        <h2 className="mb-2 text-white text-uppercase font-bold">Discover</h2>
                        <ul className='list-group list-group-light list-group-small'>
                            <li className='mb-2 list-group-item'>
                                <a href="#celeb" className='group-item'>Celebrities & Influencers</a>
                            </li>
                            <li className='mb-2 list-group-item'>
                                <a href="#celeb" className='group-item'>Celebrities & Influencers</a>
                            </li>
                            <li className='mb-2 list-group-item'>
                                <a href="#celeb" className='group-item'>Celebrities & Influencers</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bottom-footer p-2 d-flex justify-content-center align-items-center'>
                <span className='text-sm text-white'>
                    © Marbiz Inc.
                </span>
            </div>
        </footer>
    );
}

export default Footer