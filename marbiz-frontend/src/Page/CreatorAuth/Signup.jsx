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
        checkPublicName(claimtext.target.value).then((result) => {
          if (result.count > 0) {
            Swal.fire("Try again", "Claim name already taken", "warning");
          } else {
            Swal.fire("Congratulations", "Claim name available", "success");
            setstatus(true);
          }
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
            <div className="container my-5 py-5">
              <h1 className="text-body-emphasis">Make Money as a Creator</h1>
              <p className="col-lg-8 mx-auto lead">
                The simple way to sell, manage, and get paid for your Instagram,
                TikTok, YouTube, and UGC brand deals
              </p>
              <div className="username-holder">
                <div className="username-domain ps-3">www.marbiz.com</div>
                <div className="username-input-holder">
                  <input
                    type="text"
                    className="username-text"
                    onChange={(e) => setclaimtext(e)}
                    placeholder="Your Name"
                  />
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
