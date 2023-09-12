import React from 'react'
import celeb1 from "../Images/celeb-1.webp";
import celeb2 from "../Images/celeb-2.webp";

const Promotions = () => {
    return (
        <div className="container my-3">
            <div className="row justify-content-center">

                <div class="card  promotion-card" >
                    <div class="row g-0">
                        <div class="col-md-4 celeb">
                            <img src={celeb1} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8 promotion-body">
                            <div class="card-body">
                                <h2 class="card-title text-white">Streamline Your
                                    Influencer Strategy.</h2>
                                {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                {/* <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card ms-5 promotion-card " >
                    <div class="row g-0">

                        <div class="col-md-8 promotion-body">
                        
                            <div class="card-body">
                                <h2 class="card-title text-white">Easy Influencer Marketing
                                    at Your Fingertips.</h2>
                                {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                {/* <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>
                        <div class="col-md-4 celeb">
                            <img src={celeb2} class="img-fluid rounded-start celeb-img" alt="..." />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Promotions;