import React, { useEffect, useState } from "react";
import CelebCard from "./CelebCard";
const SliderList = (props) => {
  return (
    <div className="container">
      <div className="d-grid justify-content-Start mt-5">
        <h3 className="fw-bold section-heading display-6 text-uppercase">
          {props.title}
        </h3>
        <p className="text-secondary">{props.subtitle}</p>
      </div>
      <hr className="hr hr-blurry" />
      <div className="row d-flex">
        {props.list.map((item) => (
          <div key={item.id} className="col-lg-2 col-md-12 col-sm-12 mb-4 ">
            <CelebCard
              fullName={item.fullName}
              image={item.coverImage}
              category={item.category}
              regName={item.regName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderList;
