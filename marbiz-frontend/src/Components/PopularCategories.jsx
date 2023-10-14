import React, { useEffect, useState } from "react";
import { getPublicList } from "../services/api/api-service";


const PopularCategories = ({title}) => {
  const [categoryList, setCategory] = useState([]);

  useEffect(() => {
    getPublicList("Category").then((result) => {
      // setCategory(result);
      setTimeout(() => {
        setCategory(result); // Use placeholder data
      }, 1000);
      console.log("API Response:", categoryList)

    });
  }, []);


  return (
    <div className="container-fluid ">
      <div className="row justify-content-center">
        <div className=" text-center text-capitalize section-heading">
          {title}
        </div>
        <div className="horizontal-scroll-container justify-content-center"
          style={{
            display: "flex",
            overflowX: "auto",
            width: "100%", // Adjust the width as needed
            padding: "20px 0",
            WebkitOverflowScrolling: "touch", // Enable touch scrolling for iOS
            "-ms-overflow-style": "none", // Hide scrollbar on Internet Explorer
            scrollbarWidth: "none", // Hide scrollbar on Firefox
            // whiteSpace: "nowrap", // Allow the content to be displayed in a single line
            "-webkit-scroll-snap-type": "x mandatory", // Optional for better iOS scrolling
              scrollSnapType: "x mandatory", // Optional for better scrolling in other browsers
          }}
        >
          {categoryList.map((category, index) => (
            <div className=" mx-3" key={index}>
              <div className="btn-global d-grid align-items-center overflow-x-auto px-3 py-2 fs-6" style={{
                // height: "70px",
                width: "180px",
              }}>
                {category.label}
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default PopularCategories;
