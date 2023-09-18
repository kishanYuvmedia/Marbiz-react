import React from 'react';
import celeb1 from "../Images/celeb-1.webp";
import celeb2 from "../Images/celeb-2.webp";

const Promotions = () => {
    return (
        <div className="container my-5">
            <div className="row d-flex justify-content-between">

                <div className="col-md-12 col-lg-6  mb-3 ">
                    <div className="d-flex flex-column flex-md-row promotion-card px-3 pt-3">
                        
                        <div className="col promotion-body">
                            <div className="promotion-title fw-bolder text-white">Streamline Your Influencer Strategy.</div>
                        </div>
                        <div className="col-6 celeb1 ">
                            <img src={celeb1} className="" alt="..." />
                        </div>
                    </div>
                </div>

                <div className="col-md-12 col-lg-6  mb-3">
                    <div className="d-flex flex-column flex-md-row promotion-card">
                        
                        <div className="col promotion-body">
                            <div className="promotion-title fw-bolder text-white">Streamline Your Influencer Strategy.</div>
                        </div>
                        <div className="col-6 celeb2">
                            <img src={celeb2} className="" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promotions;
