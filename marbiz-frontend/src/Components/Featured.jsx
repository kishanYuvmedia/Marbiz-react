import React, { useEffect, useState } from "react";
import CelebCard from "./CelebCard";
import { getInfluencersList } from "../services/api/api-service";

// Placeholder data (example)
const placeholderData = [
  {
    id: 1,
    fullName: "Kiku Sharda",
    coverImage: "https://ik.imagekit.io/j83rchiauw/tr:w-200,h-300,fo-auto/tring/202208161306_zZXQp5Fugove8q8U.png",
    userType: [{ label: "Influencer" }],
  },
  {
    id: 2,
    fullName: "Mohit Malhotra",
    coverImage: "https://ik.imagekit.io/j83rchiauw/tring/tr:w-350,h-350,fo-auto,q-100/RT4rfplg008IPj89.jpeg",
    userType: [{ label: "Influencer" }],
  },
  {
    id: 3,
    fullName: "Salim Merchant",
    coverImage: "https://ik.imagekit.io/j83rchiauw/tring/tr:w-350,h-350,fo-auto,q-100/202208181923_LDNA4pou48pkmtXD.jpeg",
    userType: [{ label: "Influencer" }],
  },
  {
    id: 4,
    fullName: "Mohit Malhotra",
    coverImage: "https://ik.imagekit.io/j83rchiauw/tring/tr:w-350,h-350,fo-auto,q-100/RT4rfplg008IPj89.jpeg",
    userType: [{ label: "Influencer" }],
  },
  {
    id: 5,
    fullName: "Mohit Malhotra",
    coverImage: "https://ik.imagekit.io/j83rchiauw/tring/tr:w-350,h-350,fo-auto,q-100/RT4rfplg008IPj89.jpeg",
    userType: [{ label: "Influencer" }],
  },
  {
    id: 6,
    fullName: "Mohit Malhotra",
    coverImage: "https://ik.imagekit.io/j83rchiauw/tring/tr:w-350,h-350,fo-auto,q-100/RT4rfplg008IPj89.jpeg",
    userType: [{ label: "Influencer" }],
  },
  {
    id: 7,
    fullName: "Mohit Malhotra",
    coverImage: "https://ik.imagekit.io/j83rchiauw/tring/tr:w-350,h-350,fo-auto,q-100/RT4rfplg008IPj89.jpeg",
    userType: [{ label: "Influencer" }],
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
        {list.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-12 col-sm-12 mb-4 ">
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
