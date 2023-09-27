import React, { useEffect, useState } from "react";
import CelebCard from "../Components/CelebCard";
import NavTabs from "../Components/NavTabs";
import Accordion from "../Components/Accordion";
import { Link, useParams } from "react-router-dom";
import { Badge, Stack } from "react-bootstrap";
import { _ } from "lodash";
import { getInfluencersProfile } from "../services/api/api-service";
import placeholderData from "../Components/dummyData";
import Featured from "../Components/Featured";



const CelebProfile = () => {
  let { regName } = useParams();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {

    setTimeout(() => {
      setProfileData(placeholderData); 
    }, 1000);

    getInfluencersProfile(regName)
      .then((result) => {

        if (Array.isArray(result) && result.length > 0) {

          setProfileData(result);
          console.log(profileData);
        }
        else {
          console.error("API response is empty or invalid:", result);
        }
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
                      <Link to="/" className="breadcrumb-tag">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/" className="breadcrumb-tag">Celebrity</Link>
                    </li>
                    <li className="breadcrumb-item active text-white" aria-current="page">
                      {profileData.fullName}
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
                  <h2 className="text-white">Name:{profileData.fullName}</h2>
                </div>
                <h3>(Live Band)</h3>
                <Stack direction="horizontal" gap={5}>
                  {profileData.userType.map((item) => {
                    <Badge pill bg="info">
                      {item.label}
                    </Badge>;
                  })}
                </Stack>
                <button className="button-87 my-3" role="button">
                  See Price and Book
                </button>
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
        <div className="p-5 text-center bg-body-tertiary hero">
          <div className="container py-5">
            <h1 className="text-white">Similar</h1>
            <Featured />
          </div>
        </div>
      )}
    </>
  );
};
export default CelebProfile;
