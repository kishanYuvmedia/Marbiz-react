import React, { useState } from "react";
import { Link } from "react-router-dom";

const CelebCard = (props) => {
  const [listcategory, setCategory] = useState(
    Array.isArray(props.category) ? props.category : []
  );

  return (
    <>
      <div
        className="card card-bg mx-2 card-has-bg click-col"
        style={{
          background: "linear-gradient(145deg, #8725fe, #FE66AB)",
          // borderRadius: "15px",
          padding: "2px",
        }}
      >
        <div
          className="card card-img text-dark "
          style={{
            backgroundImage: `url("${props.image}")`,
            // borderRadius: "15px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            border: "0",
            height: `${props.cardHeight}px`,

          }}
        >
          <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
              {/* <h4 className="card-title mt-0"></h4> */}
            </div>
            <div className="card-footer p-0">
              <div className="media">
                <div className="media-body" style={{ textAlign: "start" }}>
                  <Link to={`/profile/${props.regName}`}>
                    <h3 className="my-0 fs-5 fw-bold text-2xl text-white d-block">
                      {props.fullName}
                    </h3>

                  </Link>


                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="d-flex justify-content-start mt-2 p-2 " style={{
          zIndex: "5",
        }}>
          {listcategory &&
            listcategory.map((value) => (
              <span
                key={value.label}
                className="badge badge-danger me-2"
              >
                {value.label}
              </span>
            ))}
          <small className="text-white">Active Platform</small>
        </div>
      </div>
    </>

  );
};

export default CelebCard;
