import React, { useEffect, useState } from "react";
import PackagesTabs from "../Components/PackagesTabs";
import { useParams, Link } from "react-router-dom";
import { getInfluencersProfile, getInfluencersList } from "../services/api/api-service";
import _ from "lodash";
import SliderList from "../Components/SliderList";
import Portfolio from "../Components/Portfolio";

const CelebProfile = () => {

  let { regName } = useParams();
  const [profileData, setprofile] = useState(null);
  const [list, setList] = useState([]);
  const [type, settype] = useState("");

  function getlist(type, valueSetter) {
    getInfluencersList(6, type)
      .then((result) => {
        if (Array.isArray(result) && result.length > 0) {
          setTimeout(() => {
            valueSetter(result);
          }, 1000);
        } else {
          console.error("API response is empty or invalid:", result);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  }
  useEffect(() => {
    getInfluencersProfile(regName)
      .then((result) => {
        setprofile(result);
        getlist(result.categoryType, setList);
        settype(result.categoryType);
      })
      .catch((err) => {
        console.error("Error fetching profile data:", err);
      });
  }, [regName]);

  // Render nothing if profileData is still null
  if (profileData === null) {
    return null;
  }

  return (
    <>
      {profileData && (
        <>
          {/* profile section */}
          <div className="container main-body">
            <div className="row my-3">
              <div className=" col-md-2 col-4 d-flex justify-content-center align-items-center">
                <div className="profile-image-container">
                  <img
                    src={profileData.coverImage}
                    alt="Generic placeholder"
                    className="img-fluid rounded-circle border border-danger border-3"
                  />
                </div>
              </div>
              <div className="col-md-4 col-8 d-grid justify-content-between ">
                <div className="">
                  <h1 className="text-white text-capitalize">{profileData.fullName}</h1>
                </div>
                <div>
                  <h4 className="text-white fs-6">
                    {profileData.category.map((list, index) => (
                      <span key={index}>{list}, </span>
                    ))}
                  </h4>
                  <h6 className="text-secondary">
                    {_.get(profileData, "location")
                      ? profileData.location
                      : "India"}
                  </h6>
                </div>
              </div>
              <div className="col-12 col-md-4 d-grid justify-content-center align-content-center">
                <Link to={`/inquiryform/${profileData.regName}`}>
                  <button className="btn-global px-3 my-3">See Price and Book</button>
                </Link>
              </div>
            </div>
          </div>

          {/* gallery section */}
          <div className="container my-5">
            <div className="row align-items-center">
              <div className="col-md-6 d-none d-md-block">
                {/* Large image for medium and larger screens */}
                <div className="text-center gallery-container-one  ">
                  <img
                    src={profileData.image1 || profileData.coverImage}
                    alt=""
                    className="rounded-3"
                  />
                </div>
              </div>
              <div className="col-12 d-md-none">
                {/* Large image for mobile devices (hidden on medium and larger screens) */}
                <div className="text-center gallery-container-one  ">
                  <img
                    src={profileData.image1 || profileData.coverImage}
                    alt=""
                    className="rounded-3"
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6">
                <div className="row py-2">
                  <div className="col-6 col-md-6">
                    {/* Small images for all screen sizes */}
                    <div className="text-center gallery-container-two  ">
                      <img
                        src={profileData.image2 || profileData.coverImage}
                        alt=""
                        className="rounded-3"
                      />
                    </div>
                  </div>
                  <div className="col-6 col-md-6">
                    {/* Small images for all screen sizes */}
                    <div className="text-center gallery-container-two  ">
                      <img
                        src={profileData.image3 || profileData.coverImage}
                        alt=""
                        className="rounded-3"
                      />
                    </div>
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-12">
                    {/* Small image for all screen sizes */}
                    <div className="text-center gallery-container-three  ">
                      <img
                        src={profileData.image4 || profileData.coverImage}
                        alt=""
                        className="rounded-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* about section */}
          <div className="container my-5">
            <div className="row">
              <div className="col">
                {/* <NavTabs images={images} /> */}
                <div className="">
                  <h4 className="text-white text-capitalize">
                    {profileData.fullName} is a top creator
                  </h4>
                  <p className="text-secondary">

                    Top creators have completed multiple orders and have a high
                    rating from brands
                  </p>
                </div>
                <hr className="text-secondary" />
                <p className="text-white">{profileData.bio}</p>
              </div>
            </div>
            <div className="d-flex justify-content-start">
              <Link to={`/inquiryform/${profileData.regName}`}>
                <button className="btn-global px-3 my-3">See Price and Book</button>
              </Link>
            </div>
          </div>

          {/* Packages section */}
          <div className="container">
            <div className="row">
              <div className="my-2">
                <h2 className=" me-3">Packages</h2>
                {/* <span className="text-secondary fs-6">How does it work?</span> */}
              </div>
              <PackagesTabs userId={profileData.mtUserId} regName={profileData.regName} />
              <div className="my-3">
                <Link to="/#" >
                  <span className="text-secondary fs-6">
                    Have a different request?
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Portfolio section */}
          <div className="container">
            <div className="row">
              <div className="my-3">
                <h2 className=" me-3">Portfolio</h2>
                {/* <span className="text-secondary fs-6">How does it work</span> */}
              </div>
              <Portfolio userId={profileData.id} />

            </div>
          </div>
        </>
      )}
      {regName && (

        <div className="text-center bg-body-tertiary hero">
          <div className="container py-3">
            <SliderList
              title={type}
              subtitle="Hire top Celebrities & Influencer all platforms see All"
              list={list}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default CelebProfile;
