import React, { useEffect, useState } from "react";
import { getPublicList } from "../services/api/api-service";


const PopularCategories = () => {
  const [categoryList, setCategory] = useState([]);

  useEffect(() => {
    getPublicList("Platform").then((result) => {
      // setCategory(result);
      setTimeout(() => {
        setCategory(result); // Use placeholder data
      }, 1000);
      console.log("API Response:", categoryList)

    });
  }, []);

  // useEffect(() => {

  //   async function fetchCategoryList() {
  //     try {
  //       const result = await getPublicList("Instagram");
  //       setTimeout(() => {
  //         console.log("API Response:", result); // Log the API response
  //         setCategory(result); // Use placeholder data
  //       }, 1000);
  //     } catch (error) {
  //       console.error("Error fetching data from the API:", error);
  //     }
  //   }

  //   fetchCategoryList();
  // }, []);



  // Conditional rendering when categoryList is not yet defined
  // if (!categoryList || categoryList.length === 0) {
  //   return <div className="text-white text-center">Loading categories...</div>; // You can customize this loading message
  // }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className=" text-center text-capitalize section-heading">
          Popular Categories to explore
        </div>
        <div className="horizontal-scroll-container justify-content-center"
          style={{
            display: "flex",
            overflowX: "auto",
            width: "100%", // Adjust the width as needed
            padding: "20px 0"
          }}
        >
          {categoryList.map((category, index) => (
            <div className=" m-2" key={index}>
              <div className=" btn-hover color-4 overflow-x-auto px-3 py-2 fs-6 fw-light">
                <i className="bi bi-star"></i>
                {" "}
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
