import React, { useEffect, useState } from "react";
import CelebCard from "./CelebCard";
import { getInfluencersList } from "../services/api/api-service";
const Featured = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getInfluencersList(4).then((result) => {
      setList(result);
    });
  }, []);
  return (
    <div className="container ">
      <div className="d-grid justify-content-Start mt-5">
        <h3 className="fw-bold section-heading display-6 text-uppercase">
          {props.title}
        </h3>
        <p className="text-secondary">{props.subtitle}</p>
      </div>
      <hr class="hr hr-blurry" />
      <div className="row d-flex">
        {list.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-12 col-sm-12 mb-4 ">
            <CelebCard
              fullName={item.fullName}
              image={item.coverImage}
              category={item.userType}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
