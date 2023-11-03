import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { findRegisterProfile } from "../../services/api/api-service";
import CreateProfile from "./CreateProfile";
export default function Verify() {
  const searchParams = new URLSearchParams(document.location.search);
  const [verifystatus, setverifyStatus] = useState(1);
  const [addprofile, setAddprofile] = useState(false);
  const [data, setdata] = useState([]);
  useEffect(() => {
    if (searchParams.get("email")) {
      findRegisterProfile(searchParams.get("email")).then((result) => {
        console.log("verify account", result[0]);
        setdata(result[0]);
        if (result[0]) {
          setverifyStatus(2);
          setAddprofile(true);
        } else {
          setverifyStatus(0);
        }
      });
    } else {
      setverifyStatus(0);
    }
  }, []);
  return (
    <div>
      {addprofile && (
        <div className="p-3 text-center bg-body-tertiary hero">
          <div className="container py-5">
            <CreateProfile userData={data} />
          </div>
        </div>
      )}
      {verifystatus == 0 && (
        <div className="p-5 text-center bg-body-tertiary hero">
          <div className="container py-5">
            <h1>User Not Valid</h1>
          </div>
        </div>
      )}
      {verifystatus == 1 && (
        <div className="p-5 text-center bg-body-tertiary hero">
          <div className="container py-5">
            <h1>
              Don't refresh 
              <strong style={{ color: "#9a73ff" }}>
                {searchParams.get("email")} 
              </strong> 
              page wait for verify your account
            </h1>
            <Spinner animation="border" variant="primary" />
          </div>
        </div>
      )}
    </div>
  );
}
