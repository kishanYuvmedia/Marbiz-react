import React from "react";
import CelebCard from "./CelebCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Row } from "react-bootstrap";
import Flicking from '@egjs/react-flicking';


const CelebGallery = (props) => {
  const { title, subtitle, list } = props;

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
    <div className="container">
      <div className="d-grid  justify-content-center mt-5">
        <h3 className=" section-heading  text-center display-6 ">
          {title}
        </h3>
        <span className="text-secondary text-center">{subtitle}</span>
      </div>
      <hr className="border border-danger border-1 opacity-50" />

      <Row>
        {/* <Flicking

          bound={true}
          deceleration={0.0005}
          renderOnlyVisible={true}
        > */}

          {list.map((item) => (
            <div className="col-6 col-md-3 mb-4">

              <CelebCard
                key={item.id}
                fullName={item.fullName}
                image={item.coverImage}
                category={item.category}
                regName={item.regName}
              />
            </div>
          ))}


        {/* </Flicking> */}


      </Row>
    </div>
  );
};

export default CelebGallery;
