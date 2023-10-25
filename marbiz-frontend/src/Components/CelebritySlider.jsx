import React, { useRef, useEffect, useState } from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const CelebritySlider = () => {
    

    const options = {
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoWidth: true,
        autoplay: true,
        autoplayTimeout: 6000,
        center: true,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        },
    }

        return (
            <>

                <OwlCarousel
                    className="owl-theme new-slider"
                    {...options}
                    
                >
                    <div className="item">
                        <video
                            className="banner-video"
                            id="video-1"
                            width="100%"
                            loop={true}
                            muted={true}
                            autoPlay={true}
                            playsInline={true}
                            poster="https://ik.imagekit.io/j83rchiauw/brand-enquiry/shivaji_satam_b2b.png?tr=q-80"

                        >
                            <source className="video-sec" src="https://cdn.tring.co.in/img/shivaji_satam_b2b.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="item">
                        <video className="banner-video" id="video-2" width="100%" loop={true} muted={true} autoPlay={true} playsInline={true} poster="https://ik.imagekit.io/j83rchiauw/brand-enquiry/Sopphie_Chowdhary.jpg?tr=q-80" >
                            <source className="video-sec" src="https://cdn.tring.co.in/img/sophie_choudhary_b2b.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="item">
                        <video className="banner-video" id="video-3" width="100%" loop={true} muted={true} autoPlay={true} playsInline={true} poster="https://ik.imagekit.io/j83rchiauw/brand-enquiry/daisy_shah_b2b.png?tr=q-80" >
                            <source className="video-sec" src="https://cdn.tring.co.in/img/daisy_shah_b2b.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="item">
                        <video className="banner-video" id="video-4" width="100%" loop={true} muted={true} autoPlay={true} playsInline={true} poster="https://ik.imagekit.io/j83rchiauw/brand-enquiry/satyayani_b2b.png?tr=q-80" >
                            <source className="video-sec" src="https://cdn.tring.co.in/img/shayantani_b2b.mp4" type="video/mp4" />
                        </video>
                    </div>


                </OwlCarousel>


            </>
        )
    }

export default CelebritySlider;