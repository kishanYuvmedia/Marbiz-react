import React from "react";
import bgImage from "../Images/influ-2.webp";
import Typewriter from 'typewriter-effect';



const HeroSection = () => {



  return (
    <>
      <div
        className="m-3 d-flex justify-content-center align-items-center rounded-5 "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "rgba(57, 57, 57, 0.5)",
          minHeight: "700px",
          border: "2px solid #9B3C95",
        }}
      >
        <div className="container text-center">
          <div className="d-flex justify-content-center flex-column align-items-center">
            <Typewriter
              options={{
                strings: ['Influencer', 'Celebrity', "Models", "Publisher"],
                autoStart: true,
                loop: true,
                wrapperClassName: 'typeWriterText',
              }}
            />
            <div className="typeWriterText">Marketing Made Easy</div>
          </div>
          <p className="mt-3 text-white">
            Find and hire top Instagram, TikTok, YouTube, and UGC influencers to create unique content for your brand.
          </p>

          <div id="cover" className="my-3">
            <form method="get" action="" className="search-form">
              <div className="tb">
                <div className="td">
                  <input className="search-input" type="text" placeholder="Search" required />
                </div>
                <div className="td" id="s-cover">
                  <button className="search-button" type="submit">
                    <div id="s-circle"></div>
                    <span></span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="mt-3">
            <span className="badge badge-primary me-2">Category 1</span>
            <span className="badge badge-primary me-2">Category 2</span>
            <span className="badge badge-primary me-2">Category 3</span>
          </div>
        </div>
      </div>

      <div
        className="my-3 d-flex justify-content-center align-items-center py-3 text-white gradient_background"
        style={{}}
      >
        <div
          className="fw-bold text-center"
          style={{
            fontSize: "30px",
          }}
        >
          Connecting Brands and Influencers Effortlessly.
        </div>
      </div>
    </>
  );
}

export default HeroSection;

