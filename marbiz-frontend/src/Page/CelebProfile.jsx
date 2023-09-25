import React, { useEffect, useState } from "react";
import CelebCard from "../Components/CelebCard";
import NavTabs from "../Components/NavTabs";
import Accordion from "../Components/Accordion";
import { useParams, Link } from "react-router-dom";
import { getInfluencersProfile } from "../services/api/api-service";

const CelebProfile = () => {
  let { regName } = useParams();
  const [profileData, setprofile] = useState([]);

  console.log(regName);
  useEffect(() => {
    getInfluencersProfile(regName)
      .then((result) => {
        setprofile(result);
        console.log(profileData);
      })
      .catch((err) => { });
  }, []);

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
                      <Link to="/" className="breadcrumb-tag">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/" className="breadcrumb-tag">Celebrity</Link>
                    </li>
                    <li className="breadcrumb-item active text-white" aria-current="page">
                      Celeb Name
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-md-4 col-sm-12">

                <img
                  src={"https://unsplash.it/600.jpg?image=251"}
                  className="img-fluid celeb-img"
                  alt="Sanam Image1"
                />

              </div>
              <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center mx-2 my-3">
                <div className="fs-1 fw-bold">
                  <h2>Name:{profileData.fullName}</h2>
                </div>
                <h3 className="text-white">(Live Band)</h3>
                <h6 className="text-white">Mumbai, Maharashtra</h6>

                <Link to="/inquiryform">
                  <button className="button-87 my-3" >
                    See Price and Book
                  </button>
                </Link>

                <p className="text-white">
                  Sanam became an instant hit among the Indian teenagers with
                  their 'Hawa Hawa' and 'Behka'!
                </p>

              </div>
            </div>
          </div>

          <div className="container my-5">
            <div className="row">
              <div className="col">
                <NavTabs />
              </div>
            </div>
            <div className="d-flex justify-content-center my-3">

              <Link to="/inquiryform">
                <button className="button-87 my-3" >
                  See Price and Book
                </button>
              </Link>
            </div>
          </div>

          <div className="container my-5">
            <div className="row">
              <div className="col">
                <Accordion />
              </div>
            </div>
          </div>
        </>
      )}
      {regName && (
        <div class="p-5 text-center bg-body-tertiary hero">
          <div class="container py-5">
            <h1 className="text-white">Not found List</h1>
          </div>
        </div>
      )}
    </>
  );
};
export default CelebProfile;
