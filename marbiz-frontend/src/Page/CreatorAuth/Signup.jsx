import React, { useState } from "react";
import "./style.css";
import Swal from "sweetalert2";
import EmailVerify from "./EmailVerify";
import { checkPublicName } from "../../services/api/api-service";
import { json } from "react-router-dom";



export default function Signin() {
  const [claimtext, setclaimtext] = useState("");
  const [value, setvalue] = useState("");
  const [status, setstatus] = useState(false);

  const headlerclaim = () => {
    if (claimtext) {
      setvalue(claimtext.target.value);
      if (claimtext.target.value != null) {
        checkPublicName(claimtext.target.value)
          .then((result) => {
            console.log("API Response:", result); // Log the response for debugging
            if (result && result.count !== undefined) {
              if (result.count > 0) {
                Swal.fire("Try again", "Claim name already taken", "warning");
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
            Swal.fire("Error", "An error occurred while checking the claim name", "error");
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
          <div className="my-5 p-5 text-center bg-body-tertiary hero">
            <div className="container ">
              <div className="d-grid justify-content-center">
                <dotlottie-player src="https://lottie.host/8fe8b914-6e21-4220-8886-c9e23e757b91/ypmqaQjU2U.json" background="transparent" speed="1" style={{ width: "300px", height: "300px" }} loop autoplay></dotlottie-player>
              </div>
              <h1 className="text-body-emphasis text-white fw-bold">Make Money as a Creator</h1>
              <p className="col-lg-8 mx-auto lead text-white">
                The simple way to sell, manage, and get paid for your Instagram,
                TikTok, YouTube, and UGC brand deals
              </p>
              <div className="username-holder  my-3 bg-dark">
                <div className="d-inline-flex   ">
                  <div className="username-domain ps-3">www.marbiz.in/@</div>
                  <div className="username-input-holder">
                    <input
                      type="text"
                      className="username-text  text-white"
                      onChange={(e) => setclaimtext(e)}
                      placeholder="Your Username"
                      style={{
                        border: "none",
                        outline: "none",
                        boxShadow: "none",

                      }}
                    />
                  </div>
                </div>
                <div className="username-btn" onClick={headlerclaim}>
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
    </>
  );
}

