import React from 'react';
import celeb1 from "../Images/celeb-1.webp";
import celeb2 from "../Images/celeb-2.webp";

const Promotions = () => {
    return (
        <div className="container my-3">
            <div className="row justify-content-center">

                <div className="col-md-6 mb-3 " >
                    <div className="card promotion-card">
                        <div className="row g-0">
                            <div className="col-md-4 celeb">
                                <img src={celeb1} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8 promotion-body">
                                <div className="card-body">
                                    <h2 className="card-title text-white">Streamline Your Influencer Strategy.</h2>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="col-md-6 mb-3">
                    <div className="card ms-md-5 promotion-card">
                        <div className="row g-0">
                            <div className="col-md-8 promotion-body">
                                <div className="card-body">
                                    <h2 className="card-title text-white">Easy Influencer Marketing at Your Fingertips.</h2>
                                </div>
                            </div>
                            <div className="col-md-4 celeb">
                                <img src={celeb2} className="img-fluid rounded-start celeb-img" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Promotions;
