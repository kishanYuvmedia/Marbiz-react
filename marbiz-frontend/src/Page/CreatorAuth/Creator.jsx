import React, { useEffect, useState } from "react";

import Swal from "sweetalert2";
import EmailVerify from "./EmailVerify";
import {
  checkPublicName,
  getInfluencersFetured,
} from "../../services/api/api-service";
import PopularCategories from "../../Components/PopularCategories";
import SliderList from "../../Components/SliderList";

import HeroBgGradient from "../../Components/HeroBgGradient";
import Howitworks from "../../Components/Howitworks";
import { Link } from "react-router-dom";



export default function Creator() {
  const [claimtext, setclaimtext] = useState("");
  const [value, setvalue] = useState("");
  const [status, setstatus] = useState(false);
  const [Influencerlist, setInfluencerlist] = useState([]);

  const headlerclaim = () => {
    if (claimtext) {
      setvalue(claimtext.target.value);
      if (claimtext.target.value != null) {
        checkPublicName(claimtext.target.value)
          .then((result) => {
            console.log("API Response:", result); // Log the response for debugging
            if (result && result.count !== undefined) {
              if (result.count > 0) {
                Swal.fire(
                  "Try again",
                  "This Username is already taken",
                  "warning"
                );
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
  useEffect(() => {
    getInfluencersFetured(6)
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
  }, []);
  return (
    <>
      <HeroBgGradient />

      {status === false && (
        <div>
          <div className="my-5 p-2 text-center bg-body-tertiary hero">
            <div className="container ">
              <div className="d-grid justify-content-center">
                <h1 className="text-body-emphasis section-heading">
                  Make Money as a Creator
                </h1>
                <p
                  className="text-secondary"
                  style={{
                    fontSize: "26px",
                  }}
                >
                  The simple way to sell, manage, and get paid for your
                  Instagram, TikTok, YouTube, and UGC brand deals
                </p>
              </div>
              <div className="username-holder flex-wrap justify-content-lg-between justify-content-sm-center p-2 my-3">
                <div className="d-inline-flex ms-3 align-items-center">
                  <div className="username-domain">marbiz.in/</div>
                  <div className="username-input-holder">
                    <input
                      type="text"
                      className="username-text"
                      onChange={(e) => setclaimtext(e)}
                      placeholder="Your Username"
                    />
                  </div>
                </div>
                <div
                  type="button"
                  className="btn-global mx-auto mx-md-0 mt-2 mt-lg-0 "
                  onClick={headlerclaim}
                  style={{
                    width: "90px",
                  }}
                >
                  Claim
                </div>
              </div>
              <div>
                <Link to="/creatorDashboard/CreatorMyProfile">
                  <button className="btn-global px-4 py-2">Creator Dashboard</button>
                </Link>
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
          <SliderList list={Influencerlist} displayHeading={"none"} />
        </div>
      </div>

      <Howitworks />

    </>
  );
}
