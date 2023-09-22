import React, { useState } from "react";

const CelebCard = (props) => {
  const [listcategory, setCategory] = useState(Array.isArray(props.category) ? props.category : []);

  return (
    <>
      <div
        className="card text-dark card-has-bg click-col"
        style={{
          backgroundImage: `url("${props.image}")`,
          borderRadius: "15px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          border: "1px solid cyan"
        }}
      >
      <div className="card-img-overlay d-flex flex-column">
        <div className="card-body">
          {/* <h4 className="card-title mt-0"></h4> */}
        </div>
        <div className="card-footer p-0">
          <div className="media">
            <div className="media-body">
              <a href={`/profile/${props.fullName}`}>
                <div className="my-0 fs-5 fw-bold text-2xl text-white d-block">
                  {props.fullName}
                </div>
              </a>
              <div className="d-flex justify-content-start mt-2">
                {listcategory.map((value) => (
                  <span key={value.label} className="badge badge-danger me-2">
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
