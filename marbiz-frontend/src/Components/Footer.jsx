import React from 'react'
import logo from "../Images/marbiz-logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (


        <footer className="footer text-center text-lg-start text-white">

            <section className="d-flex social-section justify-content-center justify-content-lg-between p-4 " >

                <div div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>


                <div>
                    <Link to="/facebook" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="/twitter" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="/google" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </Link>
                    <Link to="/instagram" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="/linkedin" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </Link>
                    <Link to="/github" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </Link>
                </div>

            </section>



            <section className="">
                <div className="container text-center text-md-start mt-5">
                    {/* <!-- Grid row --> */}
                    <div className="row mt-3">
                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* <!-- Content --> */}
                            <img src={logo} alt="Logo" />
                            <p className='my-3'>
                                Influencer marketing can be an effective strategy for many brands, but it's not without its challenges and potential pitfalls. Here are some common shortcomings or challenges associated with influencer marketing.
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <!-- Links --> */}
                            <h4 className="text-uppercase fw-bold mb-4">
                                Category
                            </h4>
                            <p>
                                <Link to="/celebrities-influencer" className="group-item">Celebrities & Influencer</Link>
                            </p>
                            <p>
                                <Link to="/spokespersons-models" className="group-item">Spokespersons & Models</Link>
                            </p>
                            <p>
                                <Link to="/news-articles-blogs" className="group-item">News Articles & Blogs</Link>
                            </p>
                            <p>
                                <Link to="/micro-influencer-content-creators" className="group-item">Micro Influencer & Content Creators</Link>
                            </p>

                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <!-- Links --> */}
                            <h4 className="text-uppercase fw-bold mb-4">
                                Discover
                            </h4>
                            <p>
                                <Link to="/find-influencers" className="group-item">Find Influencers</Link>
                            </p>
                            <p>
                                <Link to="/top-influencers" className="group-item">Top Influencers</Link>
                            </p>
                            <p>
                                <Link to="/hire-an-influencer" className="group-item">Hire an Influencer</Link>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h4 className="text-uppercase fw-bold mb-4">
                                Discover
                            </h4>
                            <p>
                                <Link to="/find-influencers" className="group-item">Find Influencers</Link>
                            </p>
                            <p>
                                <Link to="/top-influencers" className="group-item">Top Influencers</Link>
                            </p>
                            <p>
                                <Link to="/hire-an-influencer" className="group-item">Hire an Influencer</Link>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i>Ajmer, Rajasthan</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@marbiz.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i>+91-8078671648</p>
                        </div>

                    </div>

                </div>
            </section>

            <div className="text-center p-3 bottom-footer" style={{}}>
                © 2023 Copyright: Marbiz.com
                <Link className="text-reset fw-bold" to='/'></Link>
            </div>

        </footer>


    );
}

export default Footer