import React, { useEffect, useState } from "react";
import { getPublicList } from "../services/api/api-service";
import Flicking from "@egjs/react-flicking";

const PopularCategories = ({ title }) => {
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

        <div className="my-2">
          <Flicking moveType="freeScroll" bound={true} >

            {categoryList.map((category, index) => (
              <span key={index} className="btn-global px-4 m-2" style={{
                fontSize: "18px",
              }}>
                {category.label}
              </span>
            ))}

          </Flicking>

        </div>
      </div>


    </div>
  );
};

export default PopularCategories;
