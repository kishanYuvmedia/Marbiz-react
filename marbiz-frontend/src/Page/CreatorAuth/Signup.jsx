import React, { useState } from "react";
import "./style.css";
import Swal from "sweetalert2";
import EmailVerify from "./EmailVerify";
export default function Signin() {
  const [claimtext, setclaimtext] = useState("");
  const [value, setvalue] = useState("");
  const [status, setstatus] = useState(false);
  const headlerclaim = () => {
    if (claimtext) {
      setvalue(claimtext.target.value);
      Swal.fire("Congratulations", "Claim name avilable", "success");
      setstatus(true);
    } else {
      Swal.fire("Try again", "Claim name not intered", "warning");
    }
  };
  return (
    <>
      {status === false && (
        <div>
          <div className="p-5 text-center bg-body-tertiary hero">
            <div className="container py-5">
              <h1 className="text-body-emphasis">Make Money as a Creator</h1>
              <p className="col-lg-8 mx-auto lead">
                The simple way to sell, manage, and get paid for your Instagram,
                TikTok, YouTube, and UGC brand deals
              </p>
              <div className="username-holder">
                <div className="username-domain">www.marbiz.com/</div>
                <div className="username-input-holder">
                  <input
                    type="text"
                    className="username-text"
                    onChange={(e) => setclaimtext(e)}
                    placeholder="yourname"
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
