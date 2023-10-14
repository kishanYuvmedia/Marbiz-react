import React, { useState } from "react";

import Swal from "sweetalert2";
import EmailVerify from "./EmailVerify";
import { checkPublicName, getInfluencersList, } from "../../services/api/api-service";
import { json } from "react-router-dom";
import PopularCategories from "../../Components/PopularCategories";
import SliderList from "../../Components/SliderList";

// images
import artist_1 from "../../Images/artist_1.webp"
import artist_2 from "../../Images/artist_2.webp"
import artist_3 from "../../Images/artist_3.webp"



export default function Creator() {
  const [claimtext, setclaimtext] = useState("");
  const [value, setvalue] = useState("");
  const [status, setstatus] = useState(false);
  const [Influencerlist, setInfluencerlist] = useState([]);



  getInfluencersList(6, "LinkedIn")
    .then((result) => {

      if (Array.isArray(result) && result.length > 0) {
        setTimeout(() => {
          setInfluencerlist(result);
        }, 1000);
      } else {

        console.error("API response is empty or invalid:", result);


      }
    })
    .catch((error) => {
      console.error("Error fetching data from the API:", error);

    });

  const headlerclaim = () => {
    if (claimtext) {
      setvalue(claimtext.target.value);
      if (claimtext.target.value != null) {
        checkPublicName(claimtext.target.value)
          .then((result) => {
            console.log("API Response:", result); // Log the response for debugging
            if (result && result.count !== undefined) {
              if (result.count > 0) {
                Swal.fire("Try again", "This Username is already taken", "warning");
              } else {
                Swal.fire("Congratulations", "Claim name available", "success");
                setstatus(true);
              }
            } else {
              Swal.fire("Error", "Invalid API response", "error");
            }
          })
          .catch((error) => {
            console.error("API Error:", error); // Log any API errors
            Swal.fire(
              "Error",
              "An error occurred while checking the claim name",
              "error"
            );
          });
      }
    } else {
      Swal.fire("Try again", "Claim name not entered", "warning");
    }
  };

  return (
    <>
      {status === false && (
        <div>
          <div className="my-5 p-2 text-center bg-body-tertiary hero">
            <div className="container ">
              <div className="d-grid justify-content-center">


                <h1 className="text-body-emphasis section-heading">
                  Make Money as a Creator
                </h1>
                <p className="text-secondary" style={{
                  fontSize: "26px",
                }}>
                  The simple way to sell, manage, and get paid for your Instagram,
                  TikTok, YouTube, and UGC brand deals
                </p>
              </div>
              <div className="username-holder p-2 my-3">
                <div className="d-inline-flex ms-3 align-items-center">
                  <div className="username-domain">www.marbiz.in/@</div>
                  <div className="username-input-holder">
                    <input
                      type="text"
                      className="username-text"
                      onChange={(e) => setclaimtext(e)}
                      placeholder="Your Username"

                    />
                  </div>
                </div>
                <div className="btn-global" onClick={headlerclaim} style={{
                  width: "70px",
                }}>
                  Claim
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {status && (
        <>
          <EmailVerify userClaim={value} />
        </>
      )}


      <div className="container">
        <div className="row">
          <PopularCategories title={"Loved by 100,000+ Creators"} />

        </div>
      </div>

      <div className="container">
        <div className="row">
          <SliderList
            list={Influencerlist}
            displayHeading={"none"}
          />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h3 className="section-heading">
              How Marbiz Works
            </h3>
            <p className="text-secondary">Everything you need to run your business as an influencer, and more.</p>
          </div>
          <hr className="border border-danger border-1 opacity-50 my-3" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="text-center p-3">
              <img src={artist_1} alt="artist_1" className="rounded-3 img-fluid" />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="text-center p-3">
              <img src={artist_2} alt="artist_2" className="rounded-3 img-fluid" />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="text-center p-3">
              <img src={artist_3} alt="artist_3" className="rounded-3 img-fluid" />
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row my-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mt-3 p-3 rounded-3 info-box">
              <div className="info-heading">Get Brand Deals</div>
              <div className="info-paragraph">Get discovered by thousands of brands on our marketplace looking to work with you.</div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mt-3 p-3 rounded-3 info-box">
              <div className="info-heading">Manage Collabs</div>
              <div className="info-paragraph">Easily keep track of brand deals and deadlines. Submit deliverables directly through the platform.</div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mt-3 p-3 rounded-3 info-box">
              <div className="info-heading">Always Get Paid</div>
              <div className="info-paragraph">Funds are collected upfront and paid out to you when you complete the collaboration.</div>
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mt-3 p-3 rounded-3 info-box">
              <div className="info-heading">Custom Link</div>
              <div className="info-paragraph">Share your custom URL in your link in bio and with brands. Drive traffic to your page and get more brand deals.</div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mt-3 p-3 rounded-3 info-box">
              <div className="info-heading">Instant Chat</div>
              <div className="info-paragraph">Receive messages from brands and communicate instantly throughout the whole collaboration.</div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mt-3 p-3 rounded-3 info-box">
              <div className="info-heading">Taxes Made Simple</div>
              <div className="info-paragraph">We handle the filing of your 1099 forms. No more worrying about tax season.</div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
