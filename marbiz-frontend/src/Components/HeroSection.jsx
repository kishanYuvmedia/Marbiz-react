import React, { useEffect, useState } from "react";
import bgImage from "../Images/influ-2.webp";
import Typewriter from "typewriter-effect"; 
import { getPublicList } from "../services/api/api-service";
const categories = [
  { name: "Celebrity", color: "danger" },
  { name: "Influencer", color: "info" },
  { name: "Instagram", color: "success" },
  { name: "Youtube", color: "primary" },
  { name: "TV Star", color: "secondary" },
  { name: "Stand Up", color: "warning" },
  { name: "Celeb", color: "info" },
];
const HeroSection = () => {
  const [categoryList, setCategory] = useState([]);
  useEffect(() => {
    getPublicList("Influencers")
      .then((result) => {
        // Check if the result is an array and not empty
        if (Array.isArray(result) && result.length > 0) {
          setTimeout(() => {
            setCategory(result); // Use placeholder data
          }, 1000);
        } else {
          // Handle the case where the API call returns an empty or invalid response
          console.error("API response is empty or invalid:", result);
          setTimeout(() => {
            setCategory(categories); // Use placeholder data
          }, 1000);
          // You can set a default state here if needed
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
        // Handle the error state here if needed
        // You can set a default state here if needed
      });
  }, []);
  return (
    <>
      <div
        className="home-body d-flex justify-content-center align-items-center position-relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

          minHeight: "700px",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            //backgroundColor: "rgba(0, 0, 0, 0.6)",
            background:
              "linear-gradient(45deg, #00000094 0%, #fe60ad40 51%, #2930211f 100%)",
          }}
        ></div>

        <div
          className="container text-center"
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
            />
            <div className="typeWriterText">Marketing Made Easy</div>
          </div>
          <h3 className="mt-3 text-white">
            Find and hire top Instagram,Facebook, YouTube, and UGC influencer to
            create unique content for your brand.
          </h3>

          <div className="mt-3 d-flex justify-content-center">
            <form className="d-flex input-group " style={{ maxWidth: "750px" }}>
              <input
                type="search"
                className="form-control "
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                style={{
                  padding: "25px",
                  borderRadius: "20px 0 0 20px",
                }}
              />
              <span className="srch-btn" id="search-addon">
                <i className="fas fa-search"></i> Search
              </span>
            </form>
          </div>
          <div className="mt-3">
            {categoryList.length > 0 && categoryList.map((list) => (
              <span key={list.label} className="badge badge-primary me-2">
                {list.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mb-3 d-flex justify-content-center align-items-center py-3 text-white gradient_background"
        style={{}}
      >
        <div
          className="fw-bold text-center"
          style={{
            fontSize: "30px",
          }}
        >
          Connecting Brands and Influencer Effortlessly.
        </div>
      </div>
    </>
  );
};

export default HeroSection;
