import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CelebHoverSlider = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        draggable: true,
        arrows: false,
        
    };


    return (
        <>
            <Slider
                className='video-slider'
                {...settings}
            >
                <div id="celeb1" className="vd-box m1">
                    <video className="clip" poster="https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE_001.jpg?tr=q-80">
                        <source src="https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_02_.mp4" type="video/mp4" />
                    </video>
                </div>

                <div id="celeb2" className="vd-box m2">
                    <video className="clip" poster="https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE_14.jpg?tr=q-80">
                        <source src="https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_14.mp4" type="video/mp4" />
                    </video>
                </div>
                <div id="celeb3" className="vd-box m3">
                    <video className="clip" poster="https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE_16th.jpg?tr=q-80">
                        <source src="https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_16.mp4" type="video/mp4" />
                    </video>
                </div>
                <div id="celeb4" className="vd-box m4">
                    <video class="clip" poster="https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE__01.jpg?tr=q-80">
                        <source src="https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_01.mp4" type="video/mp4" />
                    </video>
                </div>
                <div id="celeb5" className="vd-box m5">
                    <video class="clip" poster="https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE_08.jpg?tr=q-80">
                        <source src="https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_08.mp4" type="video/mp4" />
                    </video>
                </div>
                <div id="celeb6" className="vd-box m6">
                    <video class="clip" poster="https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE_15_.jpg?tr=q-80">
                        <source src="https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_15.mp4" type="video/mp4" />
                    </video>
                </div>
                <div id="celeb7" className="vd-box m7">
                    <video class="clip" poster="https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE_10.jpg?tr=q-80">
                        <source src="https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_10.mp4" type="video/mp4" />
                    </video>
                </div>
                <div id="celeb8" className="vd-box m8">
                    <video class="clip" poster="https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE_16.jpg?tr=q-80">
                        <source src="https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_17.mp4" type="video/mp4" />
                    </video>
                </div>
                <div id="celeb9" className="vd-box m9">
                    <video class="clip" poster="https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE__04.jpg?tr=q-80">
                        <source src="https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_04.mp4" type="video/mp4" />
                    </video>
                </div>
                <div id="celeb10" className="vd-box m10">
                    <video class="clip" poster="https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE__05.jpg?tr=q-80">
                        <source src="https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_05.mp4" type="video/mp4" />
                    </video>
                </div>
                
            </Slider>
            <div className="celebrity-name celeb-list" style={{display: "block"}}>
                <div className="celeb-nm">1000+ brands <span>•</span> 850 mn+ reach</div>
            </div>
            <div className="celebrity-name swwapnil-joshi" style={{display: "none"}}>
                <h6>Swwapni Joshi</h6>
            </div>
        </>
    )
}

export default CelebHoverSlider