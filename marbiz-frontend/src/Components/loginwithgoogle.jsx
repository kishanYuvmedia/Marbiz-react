import React, { useEffect } from "react";
import "./style.css";
import config from "../constants/config";
export default function Loginwithgoogle() {
  const handleSignIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    // Open the Google Sign-In popup
    auth2.signIn().then(
      (googleUser) => {
        // Sign-in was successful, handle the user data here
        const idToken = googleUser.getAuthResponse().id_token;
        console.log(idToken);
        // Send the ID token to your server for verification and authentication.
      },
      (error) => {
        // Handle the error, including the "popup_closed_by_user" error
        if (error.error === "popup_closed_by_user") {
          // User closed the sign-in popup
          console.log("User closed the sign-in popup");
        } else {
          console.error("Error during sign-in:", error);
        }
      }
    );
  };

  useEffect(() => {
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init({
        client_id: config.googleAuthclientKey,
      });
    });
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={handleSignIn}
        class="login-with-google-btn"
      >
        Sign in with Google
      </button>
    </div>
  );
}
