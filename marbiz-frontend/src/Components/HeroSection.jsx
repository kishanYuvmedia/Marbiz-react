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
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          minHeight: "700px",
          border: "2px solid rgb(168, 85, 247)",
        }}
      >
        <div className="container text-center">
          <div className="d-flex justify-content-center">

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
            Find and hire top Instagram, TikTok, YouTube, and UGC influencers to
            create unique content for your brand.
          </p>
          {/* <div className="mt-3">
            <form className="form-inline">
              <div className="input-group">
                <input
                  type="search"
                  id="search"
                  className="form-control "
                  placeholder="Search"
                  required
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="btn btn-primary px-4 py-2.5 text-center"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div> */}

          <div id="cover" className="my-3">

            <form method="get" action="">
              <div class="tb">
                <div class="td">
                  <input type="text" placeholder="Search" required />
                </div>
                <div class="td" id="s-cover">
                  <button type="submit">
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

