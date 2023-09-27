import React, { useEffect, useState } from "react";
import CelebCard from "../Components/CelebCard";
import NavTabs from "../Components/NavTabs";
import Accordion from "../Components/Accordion";
import { useParams, Link } from "react-router-dom";
import {
  getInfluencersProfile,
  getImagesList,
} from "../services/api/api-service";
import _ from "lodash";
const CelebProfile = () => {
  let { regName } = useParams();
  const [profileData, setprofile] = useState(null);
  const [images, setImages] = useState([]);
  useEffect(() => {

    // setTimeout(() => {
    //   setProfileData(placeholderData);
    // }, 1000);

    getInfluencersProfile(regName)
      .then((result) => {
        setprofile(result);
        getImagesList(result.id)
          .then((resultdb) => {
            setTimeout(() => {
              setImages(resultdb); // Use placeholder data
            }, 1000);
            console.log("images", images);
          })
          .catch((err) => {
            console.error("Error fetching profile data:", err);
          });
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
      {regName && (
        <>
          <div className="container main-body">
            <div className="row my-3">
              <div className="mx-3">
                <nav aria-label="breadcrumb " className="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item ">
                      <Link to="/" className="breadcrumb-tag">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/" className="breadcrumb-tag">
                        Celebrity
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-item active text-white"
                      aria-current="page"
                    >
                      {profileData.fullName}
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-md-4 col-sm-12">
                <img
                  src={profileData.coverImage}
                  className="img-fluid celeb-img"
                  alt="Sanam Image1"
                />
              </div>
              <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center mx-2 my-3">
                <div className="fs-1 fw-bold">
                  <h1 className="text-white bold">
                    Name:{profileData.fullName}
                  </h1>
                </div>
                <h4 className="text-white">
                  (
                  {profileData.category.map((list, index) => (
                    <span key={index}>
                      {list.label}
                      {index !== profileData.category.length - 1 && "/ "}
                    </span>
                  ))}
                  )
                </h4>
                <h6 className="text-white">
                  {_.get(profileData, "location")
                    ? profileData.location
                    : "India"}
                </h6>
                <Link to="/inquiryform">
                  <button className="button-87 my-3">See Price and Book</button>
                </Link>
                <p className="text-white">{profileData.bio}</p>
              </div>
            </div>
          </div>

          <div className="container my-5">
            <div className="row">
              <div className="col">
                <NavTabs images={images} />
              </div>
            </div>
            <div className="d-flex justify-content-center my-3">
              <Link to="/inquiryform">
                <button className="button-87 my-3">See Price and Book</button>
              </Link>
            </div>
          </div>

          <div className="container my-5">
            <div className="row">
              <div className="col">
                <Accordion about={profileData.about} />
              </div>
            </div>
          </div>
        </>
      )}
      {regName && (
        <div className="p-5 text-center bg-body-tertiary hero">
          <div className="container py-5">
            <h1 className="text-white">Similar</h1>
            {/* <Featured /> */}
          </div>
        </div>
      )}
    </>
  );
};
export default CelebProfile;
