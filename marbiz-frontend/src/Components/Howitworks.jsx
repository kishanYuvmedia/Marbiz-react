import React from 'react'
import artist_1 from "../Images/artist_1.webp";
import artist_2 from "../Images/artist_2.webp";
import artist_3 from "../Images/artist_3.webp";

const Howitworks = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mt-5">
                        <h3 className="section-heading">How Marbiz Works</h3>
                        <p className="text-secondary">
                            Everything you need to run your business as an influencer, and
                            more.
                        </p>
                    </div>
                    <hr className="border border-danger border-1 opacity-50 my-3" />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="text-center p-3">
                            <img
                                src={artist_1}
                                alt="artist_1"
                                className="rounded-3 img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="text-center p-3">
                            <img
                                src={artist_2}
                                alt="artist_2"
                                className="rounded-3 img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="text-center p-3">
                            <img
                                src={artist_3}
                                alt="artist_3"
                                className="rounded-3 img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row my-3">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="mt-3 p-3 rounded-3 info-box">
                            <div className="info-heading">Get Brand Deals</div>
                            <div className="info-paragraph">
                                Get discovered by thousands of brands on our marketplace looking
                                to work with you.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="mt-3 p-3 rounded-3 info-box">
                            <div className="info-heading">Manage Collabs</div>
                            <div className="info-paragraph">
                                Easily keep track of brand deals and deadlines. Submit
                                deliverables directly through the platform.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="mt-3 p-3 rounded-3 info-box">
                            <div className="info-heading">Always Get Paid</div>
                            <div className="info-paragraph">
                                Funds are collected upfront and paid out to you when you
                                complete the collaboration.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="mt-3 p-3 rounded-3 info-box">
                            <div className="info-heading">Custom Link</div>
                            <div className="info-paragraph">
                                Share your custom URL in your link in bio and with brands. Drive
                                traffic to your page and get more brand deals.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="mt-3 p-3 rounded-3 info-box">
                            <div className="info-heading">Instant Chat</div>
                            <div className="info-paragraph">
                                Receive messages from brands and communicate instantly
                                throughout the whole collaboration.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="mt-3 p-3 rounded-3 info-box">
                            <div className="info-heading">Taxes Made Simple</div>
                            <div className="info-paragraph">
                                We handle the filing of your 1099 forms. No more worrying about
                                tax season.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Howitworks