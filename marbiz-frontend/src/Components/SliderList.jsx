import React from "react";
import CelebCard from "./CelebCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Flicking from "@egjs/react-flicking";

const SliderList = (props) => {
  const { title, subtitle, list, displayHeading } = props;

  // Determine the number of cards to display based on the device width
  const getNumVisibleCards = () => {
    if (window.innerWidth <= 768) {
      // For mobile devices, display 1 card at a time
      return 1;
    } else {
      // For desktop, display 6 cards at a time
      return 6;
    }
  };

  return (
    <>
      <div
        className="container"
        style={{
          display: `${displayHeading}`,
        }}
      >
        <div className="d-grid  justify-content-center mt-5">
          <h3 className="section-heading  text-center ">{title}</h3>
          <span className="text-secondary">{subtitle}</span>
        </div>
        <hr className="border border-danger border-1 opacity-50" />
      </div>

      <div className="container">
        <div className="row">
          <Flicking
            bound={true}
            deceleration={0.0005}
            circular={true}
            align={"prev"}
            renderOnlyVisible={true}
          >
            {list.map((item, index) => (
              <div>
                <CelebCard
                  key={item.id}
                  fullName={item.fullName}
                  image={item.coverImage}
                  category={item.category}
                  regName={item.regName}
                  // cardHeight={cardHeight}
                  cardGap={20}
                  // index={index}
                  platform={item.categoryType}
                />
              </div>
            ))}
          </Flicking>
        </div>
      </div>
    </>
  );
};

export default SliderList;
