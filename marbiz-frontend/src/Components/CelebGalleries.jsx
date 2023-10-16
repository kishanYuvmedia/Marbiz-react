import React from "react";
import CelebCard from "./CelebCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Row, Col } from "react-bootstrap";

const CelebGallery = (props) => {
  const { title, subtitle, list } = props;
  return (
    <div className="container">
      <div className="d-grid  justify-content-center mt-5">
        <h3 className="fw-bold section-heading  text-center display-6 text-uppercase">
          {title}
        </h3>
        <span className="text-secondary text-center">{subtitle}</span>
      </div>
      <hr className="hr hr-blurry" />

      <Row>
        {list.map((item) => (
          <div className="col-6 col-md-3 mb-4" key={item.id}>
            <CelebCard
              fullName={item.fullName}
              image={item.coverImage}
              category={item.category}
              regName={item.regName}
            />
          </div>
        ))}
      </Row>
    </div>
  );
};

export default CelebGallery;
