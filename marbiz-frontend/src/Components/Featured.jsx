import React, { useEffect, useState } from "react";
import CelebCard from "./CelebCard";
import { getInfluencersList } from "../services/api/api-service";

// Placeholder data (example)
const placeholderData = [
  {
    id: 1,
    fullName: "John Doe",
    coverImage: "placeholder-image-1.jpg",
    userType: "Influencer",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    coverImage: "placeholder-image-2.jpg",
    userType: "Influencer",
  },
  
];

const Featured = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Simulate a 1-second delay before updating with placeholder data
    setTimeout(() => {
      setList(placeholderData); // Use placeholder data
    }, 1000); // Simulate a 1-second delay (adjust as needed)

    // Fetch data from the API
    getInfluencersList(4).then((result) => {
      setList(result);
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
        {list && list.length > 0 ? (
          list.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-12 col-sm-12 mb-4">
              <CelebCard
                fullName={item.fullName}
                image={item.coverImage}
                category={item.userType}
              />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Featured;
