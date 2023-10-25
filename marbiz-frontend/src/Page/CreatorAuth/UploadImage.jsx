import React, { useState } from "react";
import Swal from "sweetalert2";
import { UpdateProfile } from "../../services/api/api-service";
import { useNavigate } from "react-router-dom";

export default function UploadImage() {
  const searchParams = new URLSearchParams(document.location.search);
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
      ];
      if (allowedTypes.includes(file.type)) {
        setSelectedFile(file);
        setErrorMessage("");

        // Create a FileReader to read the selected file
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreview(e.target.result); // Set the imagePreview state with the data URL
        };
        reader.readAsDataURL(file);
      } else {
        setSelectedFile(null);
        setErrorMessage(
          "Please select a valid image file (jpg, jpeg, or png)."
        );
        setImagePreview(null); // Clear the image preview
      }
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile, "compressed-image.jpg"); // You can set the filename here
      fetch("https://marbiz.yuvmedia.in/upload.php", {
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
            UpdateProfile(dataImage).then((result) => {
              if (result) {
                Swal.fire(
                  "Cover Image",
                  "Your cover page updated successfully",
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
              text: "Something went wrong please Retry uploading Image",
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
      <div className="p-3 text-center bg-body-tertiary hero">
        <div className="container my-5 p-5 bg-dark rounded-3 upload-img-section">
          <div className="row mb-3 justify-content-center">
            <div className="col-md-6 d-grid justify-content-center align-content-center">
              <h1 className="text-white m-3">Upload Your Profile Image</h1>
              <label
                for="file-upload"
                className="custom-file-upload p-3 text-gray fw-bold text-uppercase align-content-center d-grid"
              >
                Upload your image
              </label>

              <input
                id="file-upload"
                type="file"
                accept=".jpg, .jpeg, .png"
                className="form-control dark-bg"
                onChange={handleFileChange}
              />

              <p className="">{errorMessage}</p>
              <button className="button-87 w-100" onClick={handleUpload}>
                Submit
              </button>
            </div>

            <div className="col-md-6 d-grid justify-content-center">
              {/* <h1 className="text-white mb-3">
                Preview
              </h1> */}
              {/* Display the image preview */}
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Img Preview"
                  className="img-preview mt-3 shadow-lg"
                />
              )}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
