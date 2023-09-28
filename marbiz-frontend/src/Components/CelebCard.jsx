import React, { useState } from "react";
import { Link } from "react-router-dom";

const CelebCard = (props) => {
  const [listcategory, setCategory] = useState(
    Array.isArray(props.category) ? props.category : []
  );

  return (
    <>
      <div
        className="card mx-2 text-dark card-has-bg click-col"
        style={{
          backgroundImage: `url("${props.image}")`,
          borderRadius: "15px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          border: "1px solid #9644fd",
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
                {/* <small className="text-white">Active Platform</small> */}
                <div className="d-flex justify-content-start mt-2">
                  {listcategory &&
                    listcategory.map((value) => (
                      <span
                        key={value.label}
                        className="badge badge-danger me-2"
                      >
                        #{value.label}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CelebCard;
