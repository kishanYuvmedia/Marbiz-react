import React from "react";
import CelebCard from "./CelebCard";

const Featured = () => {
  return (
    <div className="container ">
      <div className="d-grid justify-content-Start mt-5">
        <h3 className="fw-bold section-featured display-6 text-uppercase ">Featured</h3>
        <p className="text-secondary">Hire top influencer across all platforms - See All</p>
      </div>

      <div className="row d-flex">
        <div className="col-lg-3 col-md-12 col-sm-12 mb-4 ">
          <CelebCard />
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 mb-4">
          <CelebCard />
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 mb-4">
          <CelebCard />
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 mb-4">
          <CelebCard />
        </div>
        
      </div>
    </div>
  );
};

export default Featured;
