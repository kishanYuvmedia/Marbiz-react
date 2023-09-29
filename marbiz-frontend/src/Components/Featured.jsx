import React, { useEffect, useState } from "react";
import CelebCard from "./CelebCard";
import { getInfluencersList } from "../services/api/api-service";
import placeholderData from "./dummyData";

const Featured = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    getInfluencersList(4)
      .then((result) => {

        console.log("API Response:", result);
        if (Array.isArray(result) && result.length > 0) {

          setTimeout(() => {
            setList(result);
          }, 1000);

        } else {
          console.error("API response is empty or invalid:", result);
          setTimeout(() => {
            setList(placeholderData);
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);

      });
  }, []);

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
        {list.map((item) => (
          <div key={item.id} className="col-lg-2 col-md-12 col-sm-12 mb-4 ">
            <CelebCard
              fullName={item.fullName}
              image={item.coverImage}
              category={item.userType}
              regName={item.regName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;

