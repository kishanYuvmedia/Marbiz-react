import React, { useEffect, useState } from "react";

import manBGImage from "../Images/man-bg-image.webp";
import womenBGImage from "../Images/woman-bg-image.webp";

import Typewriter from "typewriter-effect";
import { getPublicList } from "../services/api/api-service";

import CelebCard from "./CelebCard";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Flicking from "@egjs/react-flicking";
import HeroBgGradient from "./HeroBgGradient";


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

    getPublicList("Platform")
      .then((result) => {

        if (result.length > 0) {
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



  return (
    <>
      <div className="home-body container-fluid position-relative"
        style={{
          paddingTop: "100px",
          minHeight: "800px",
        }}
      >
        <HeroBgGradient />


        <img src={manBGImage} alt="man-bg-img" className="position-absolute top-0 start-0 h-100 desktop-view" />
        <img src={womenBGImage} alt="women-bg-img" className="position-absolute top-0 end-0 h-100 desktop-view" />

        <div className="container text-center position-relative"
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
            fontSize: "1.2rem",
          }}>
            Find and hire top Instagram,Facebook, YouTube, and UGC <br />influencer to
            create unique content for your brand.
          </h3>

        </div>

        {/* featued slider */}
        <div className="container-fluid py-5" style={{
          zIndex: 10,
          padding: "0 5px",

        }}>

          <Flicking

            bound={true}
            deceleration={0.0005}
            renderOnlyVisible={true}
          >
            {list.map((item, index) => (
              <div>
                <CelebCard
                  key={item.id}
                  fullName={item.fullName}
                  image={item.coverImage}
                  // category={item.category}
                  regName={item.regName}
                  cardHeight={cardHeight}
                  cardGap={20}
                  index={index}
                />
              </div>
            ))}

          </Flicking>
        </div>
      </div>


    </>
  );
};

export default HeroSection;
