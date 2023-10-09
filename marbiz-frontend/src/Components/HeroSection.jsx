import React, { useEffect, useState } from "react";

import manBGImage from "../Images/man-bg-image.webp";
import womenBGImage from "../Images/woman-bg-image.webp";

import Typewriter from "typewriter-effect";
import { getPublicList } from "../services/api/api-service";

import CelebCard from "./CelebCard";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const categories = [
  { name: "Celebrity", color: "danger" },
  { name: "Influencer", color: "info" },
  { name: "Instagram", color: "success" },
  { name: "Youtube", color: "primary" },
  { name: "TV Star", color: "secondary" },
  { name: "Stand Up", color: "warning" },
  { name: "Celeb", color: "info" },
];
const HeroSection = (props) => {
  const { list } = props;
  const cardHeight = 400;

  const [categoryList, setCategory] = useState([]);

  useEffect(() => {

    getPublicList("Influencers")
      .then((result) => {

        if (Array.isArray(result) && result.length > 0) {
          setTimeout(() => {
            setCategory(result);
          }, 1000);
        } else {

          console.error("API response is empty or invalid:", result);
          setTimeout(() => {
            setCategory(categories);
          }, 1000);

        }
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);

      });
  }, []);

  // Determine the number of cards to display based on the device width
  const getNumVisibleCards = () => {
    if (window.innerWidth <= 768) {
      // For mobile devices, display 1 card at a time
      return 2;
    } else {
      // For desktop, display 6 cards at a time
      return 6;
    }
  };

  return (
    <>
      <div className="home-body container-fluid position-relative"
        style={{
          // backgroundImage: `url(${bgImage})`,
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          // display: "flex",
          // justifyContent: "center",
          paddingTop: "100px",
          minHeight: "800px",
        }}
      >

        <div className="position-absolute" style={{
          width: "500px",
          height: "800px",
        }}>
          <div
            className=" "
            style={{
              background: "radial-gradient(circle, rgba(252, 110, 144, 0.49) 0%, rgba(254, 96, 173, 0) 51%, rgba(0, 0, 0, 0) 100%)",

              width: "100%",
              height: "100%",
              top: "0%",
              // opacity: "0.7",
            }}
          ></div>
        </div>
        <div className="position-absolute top-50 end-0" style={{
          width: "500px",
          height: "500px",
        }}>
          <div
            className=" "
            style={{
              background: "radial-gradient(circle, rgba(252, 110, 144, 0.49) 0%, rgba(254, 96, 173, 0) 51%, rgba(0, 0, 0, 0) 100%)",

              width: "100%",
              height: "100%",
              top: "0%",
              // opacity: "0.7",
            }}
          ></div>
        </div>

        <img src={manBGImage} alt="man-bg-img" className="position-absolute top-0 start-0 h-100" />
        <img src={womenBGImage} alt="women-bg-img" className="position-absolute top-0 end-0 h-100" />

        <div className="container text-center"
          style={{
            zIndex: 10,
          }}
        >
          <div className="d-flex justify-content-center flex-column align-items-center">
            <Typewriter
              options={{
                strings: ["Influencer", "Celebrity", "Models", "Publisher"],
                autoStart: true,
                loop: true,
                wrapperClassName: "typeWriterTextMove",
              }}
              style={{
                zIndex: 10,
              }}
            />
            <div className="typeWriterText" style={{
              zIndex: 10,
            }}>Marketing Made Easy</div>
          </div>
          <h3 className="mt-3 text-white" style={{
            zIndex: 10,
          }}>
            Find and hire top Instagram,Facebook, YouTube, and UGC <br />influencer to
            create unique content for your brand.
          </h3>



          {/* <div className="mt-3 d-flex justify-content-center">
            <form className="d-flex input-group " style={{ maxWidth: "750px" }}>
              <input
                type="search"
                className="form-control "
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                style={{
                  padding: "25px",
                  borderRadius: "20px 0 0 20px",
                }}
              />
              <span className="srch-btn" id="search-addon">
                <i className="fas fa-search"></i> Search
              </span>
            </form>
          </div> */}

          {/* <div className="mt-3">
            {categoryList.length > 0 && categoryList.map((list) => (
              <span key={list.label} className="badge badge-primary me-2">
                {list.label}
              </span>
            ))}
          </div> */}

        </div>

        {/* featued slider */}
        <div className="container-fluid py-5" style={{
          zIndex: 10,
        }}>

          <Carousel style={{ padding: "20px 20px", }}
            showThumbs={false}
            showStatus={false}
            centerMode={true}
            // centerSlidePercentage={20}
            infiniteLoop={true}
            showArrows={false}
            showIndicators={false}

            swipeable={true}
            emulateTouch={true}
            interval={3000}
            autoPlay={true}
            stopOnHover={true}
            dynamicHeight={false}
            renderThumbs={() => { }}
            selectedItem={0}
            axis="horizontal"
            useKeyboardArrows={true}
            transitionTime={500}
            swipeScrollTolerance={1}
            width="100%"
            centerSlidePercentage={100 / getNumVisibleCards()}
            itemsToShow={getNumVisibleCards()}
          >
            {list.map((item, index) => (
              <CelebCard
                key={item.id}
                fullName={item.fullName}
                image={item.coverImage}
                category={item.category}
                regName={item.regName}
                isEven={index % 2 !== 0}
                cardHeight={cardHeight}
                cardGap={20}
              />
            ))}
          </Carousel>
        </div>
      </div>


    </>
  );
};

export default HeroSection;
