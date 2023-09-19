import React, { useEffect, useState } from "react";
import CelebCard from "../Components/CelebCard";
import NavTabs from "../Components/NavTabs";
import Accordion from "../Components/Accordion";
import { useParams } from "react-router-dom";
import { getInfluencersProfile } from "../services/api/api-service";
const CelebProfile = () => {
  const { regName } = useParams();
  const [profileData, setprofile] = useState([]);
  console.log(regName);
  useEffect(() => {
    getInfluencersProfile(regName)
      .then((result) => {
        setprofile(result);
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
                      <a className="breadcrumb-tag" href="#">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a className="breadcrumb-tag" href="#">
                        Library
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Data
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-md-4 col-sm-12">
                <a
                  href={"https://unsplash.it/1200/768.jpg?image=251"}
                  data-toggle="lightbox"
                  data-gallery="example-gallery"
                >
                  <img
                    src={"https://unsplash.it/600.jpg?image=251"}
                    className="img-fluid celeb-img"
                    alt="Sanam Image1"
                  />
                </a>
              </div>
              <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center mx-2 my-3">
                <div className="fs-1 fw-bold">
                  <h2>Name:</h2>
                </div>
                <h3>(Live Band)</h3>
                <h6>Mumbai, Maharashtra</h6>

                <a href="/inquiryform">
                  <button className="button-87 my-3" role="button">
                    See Price and Book
                  </button>
                </a>

                <p>
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

              <a href="/inquiryform">

              <button className="button-87 " role="button">
                See Price and Book
              </button>
              </a>
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
            <h1>Not found List</h1>
          </div>
        </div>
      )}
    </>
  );
};
export default CelebProfile;
