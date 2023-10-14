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
          // background: "linear-gradient(145deg, #8725fe, #FE66AB)",
          backgroundColor: "black",
          // borderRadius: "15px",
          // padding: "2px",
          transform: `translateY(${props.index === 0 ? 10 : (props.index % 2 !== 0 ? -10 : 10)}px)`,
          // marginRight: `${props.cardGap}px`,
        }}
      >
        {/* <div
          className="card card-img  "
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
            <div className="card-body">*/}
              {/* <h4 className="card-title mt-0"></h4> */}
            {/* </div>
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

        </div> */}
        <div
          className="card card-img"
          style={{
            backgroundImage: `url("${props.image}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            
            height: `${props.cardHeight}px`,
            
          }}
        >
          <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
              {/* Any content you want inside the card body */}
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

      </div>
      <div className="mt-2 p-2" style={{
        zIndex: "5",
      }}>
        <div className="d-flex justify-content-start  " >
          {listcategory &&
            listcategory.map((value) => (
              <span
                key={value.label}
                className="badge badge-danger me-2"
              >
                {value.label}
              </span>
            ))}
        </div>
        <div className="mt-2 text-secondary text-start">Platform</div>
      </div>
    </>

  );
};

export default CelebCard;
