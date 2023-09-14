import React from "react";
import bgImage from "../Images/influ-2.webp";
import Typewriter from 'typewriter-effect';



const HeroSection = () => {



  return (
    <>
      <div
        className=" d-flex justify-content-center align-items-center position-relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

          minHeight: "700px",

        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        ></div>

        <div className="container text-center" style={{
          zIndex: 10,
        }}>
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
          <h3 className="mt-3 text-white">
            Find and hire top Instagram, TikTok, YouTube, and UGC influencer to create unique content for your brand.
          </h3>

          <div className="mt-3 d-flex justify-content-center" >

          <form class="d-flex input-group " style={{ maxWidth: "750px" }}>
            <input
              type="search"
              class="form-control "
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"

              style={{
                padding: "25px",
                borderRadius: "20px 0 0 20px",
              }}
            />
            <span class="srch-btn" id="search-addon">
              <i class="fas fa-search"></i> Search
            </span>
          </form>
        </div>

        

        <div className="mt-3">
        <a href="/">
          <span className="badge badge-primary me-2">Category 1</span>
        </a>
        <a href="/">
          <span className="badge badge-info me-2">Category 2</span>
        </a>
        <a href="/">
          <span className="badge badge-success me-2">Category 3</span>
        </a>
        <a href="/">
          <span className="badge badge-danger me-2">Category 4</span>
        </a>
        <a href="/">
          <span className="badge badge-warning me-2">Category 5</span>
        </a>
          
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

