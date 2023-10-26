import React from "react";
import CelebCard from "./CelebCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Flicking from "@egjs/react-flicking";
import { isEmpty } from "lodash";

const SliderList = (props) => {
  const { title, subtitle, list, displayHeading } = props;
  
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
          <span className="text-secondary text-center">{subtitle}</span>
        </div>
        <hr className="border border-danger border-1 opacity-50" />
      </div>

      <div className="container">
        <div className="row">
          {!isEmpty(list) && (
            <Flicking
              // defaultIndex={1}
              // bound={false}
              deceleration={0.0005}
              // circular={true}
              align={"prev"}
              renderOnlyVisible={true}
              duration={500}
              inputType={["touch", "mouse", "pointer"]}
              // moveType={["strict", { count: 4 }]}
            // panelsPerView={4}
            // preventDefaultOnDrag={true}
            >
              {list.map((item, index) => (
                <div key={index}>
                  <CelebCard
                    fullName={item.fullName}
                    image={item.coverImage}
                    category={item.category}
                    regName={item.regName}
                    cardGap={20}
                    platform={item.categoryType}
                  />
                </div>
              ))}
            </Flicking>
          )}
        </div>
      </div>
    </>
  );
};

export default SliderList;
