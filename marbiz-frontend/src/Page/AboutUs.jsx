import React from "react";
import Howitworks from "../Components/Howitworks";
import image_user from "../Images/image-bg-popup.png";

const AboutUs = () => {
  return (
    <>
      <div className="container p-3 p-md-5">
        <div className="row">
          <h1 className="text-center text-danger text-capitalize mb-5">
            All in one Marketing platform for smart segmentation, <br />
            targeting and engagement.
          </h1>
          <div className="col-md-6 d-grid align-items-center">
            <div className="text-start text-white fs-6">
              We believe that your brand is a reflection of you. And we know
              that the best way to show who you really are is through the eyes
              of others.
            </div>
            <div className="text-start text-white fs-6">
              That's why Marbiz provides a platform for you to advertise your
              business or brand through influencers and celebrities of your
              choice. We are disrupting the marketing agency model by
              facilitating data-driven influencer marketing, making it easy for
              anyone to run a successful influencer marketing campaign. What
              separates us is our commitment to transparency in everything we do.
            </div>
            <div className="text-start text-white fs-6">
              We're proud to be an integral part of the Marbiz ecosystem and
              proud to help you with your marketing needs.
            </div>
          </div>
          <div className="col-md-6 my-3">
            <div className="d-flex justify-content-center">
              <img src={image_user} alt="img123" className="img-fluid rounded-3" />
            </div>
          </div>
        </div>
      </div>
      <Howitworks />
    </>
  );
};

export default AboutUs;
