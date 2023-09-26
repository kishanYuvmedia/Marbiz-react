import React, { useState } from "react";
import Swal from "sweetalert2";
import { updateProfile } from "../../services/api/api-service";
import { useNavigate } from "react-router-dom";
export default function UploadImage() {
  const searchParams = new URLSearchParams(document.location.search);
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (allowedTypes.includes(file.type)) {
        setSelectedFile(file);
        setErrorMessage("");
      } else {
        setSelectedFile(null);
        setErrorMessage(
          "Please select a valid image file (jpg, jpeg, or png)."
        );
      }
    }
  };
  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile, "compressed-image.jpg"); // You can set the filename here
      fetch("https://portfolio.yuvmedia.in/upload.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json()) // Parse the JSON response
        .then((data) => {
          if (data) {
            const dataImage = [];
            dataImage.push({
              id: searchParams.get("id"),
              coverImage: data.imageUrl,
            });
            updateProfile(dataImage).then((result) => {
              if (result) {
                Swal.fire(
                  "Cover Image",
                  "Your cover page update successfully",
                  "success"
                );
                navigate(`/`, {
                  replace: true,
                });
              }
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Somthing wrong please Reupload Image",
            });
          }
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });
    }
  };
  return (
    <div>
      <div className="p-5 text-center bg-body-tertiary hero">
        <div className="container py-5">
          <h1>Upload your Cover profile</h1>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                className="form-control"
                onChange={handleFileChange}
              />
              <p>{errorMessage}</p>
              <button className="btn btn-info" onClick={handleUpload}>
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
