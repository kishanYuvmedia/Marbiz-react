import React, { useRef, useEffect, useState } from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const CelebritySlider = () => {

    const videoData = [
        {
            index: 0,
            id: "video-1",
            title: "shivaji_satam",
            poster: "https://ik.imagekit.io/j83rchiauw/brand-enquiry/shivaji_satam_b2b.png?tr=q-80",
            src: "https://cdn.tring.co.in/img/shivaji_satam_b2b.mp4"
        },
        {
            index: 1,
            id: "video-2",
            title: "Sopphie_Chowdhary",
            poster: "https://ik.imagekit.io/j83rchiauw/brand-enquiry/Sopphie_Chowdhary.jpg?tr=q-80",
            src: "https://cdn.tring.co.in/img/sophie_choudhary_b2b.mp4"
        },
        {
            index: 2,
            id: "video-3",
            title: "daisy_shah",
            poster: "https://ik.imagekit.io/j83rchiauw/brand-enquiry/daisy_shah_b2b.png?tr=q-80",
            src: "https://cdn.tring.co.in/img/daisy_shah_b2b.mp4"
        },
        {
            index: 3,
            id: "video-4",
            title: "shivaji_satam",
            poster: "https://ik.imagekit.io/j83rchiauw/brand-enquiry/satyayani_b2b.png?tr=q-80",
            src: "https://cdn.tring.co.in/img/shayantani_b2b.mp4"
        },
    ]

    const options = {
        loop: true,
        lazyLoad: true,
        video: true,
        margin: 10,
        nav: false,
        dots: false,
        // autoWidth: true,
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

            <OwlCarousel className="owl-theme new-slider" {...options}

            >
                {videoData.map((video, index) => (

                    <div className="item-video" key={video.index}>
                        <video
                            className="banner-video"
                            id={video.id}
                            // width="100%"
                            loop
                            muted
                            autoPlay
                            playsInline
                            poster={video.poster}
                        >
                            <source
                                className="video-sec"
                                src={video.src}
                                type="video/mp4" />
                        </video>
                    </div>
                ))}

            </OwlCarousel>


        </>
    )
}

export default CelebritySlider;