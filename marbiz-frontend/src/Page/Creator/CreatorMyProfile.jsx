import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2"
import { Col, Row, Input } from "reactstrap"
import { getInfluencersProfilebyId, UpdateProfile } from "../../services/api/api-service";
import _, { isEmpty } from "lodash"
import defaultImage from '../../Images/default-image.jpg'
import { Link } from "react-router-dom";



const CreatorMyProfile = ({ pagetitle }) => {

  const [profileId, setprofileId] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImagesfile, setConverImagesfile] = useState(null);

  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [selectedImage4, setSelectedImage4] = useState(null);

  const [selectedfile1, setSelectedfile1] = useState(null);
  const [selectedfile2, setSelectedfile2] = useState(null);
  const [selectedfile3, setSelectedfile3] = useState(null);
  const [selectedfile4, setSelectedfile4] = useState(null);

  const [user, setUser] = useState(null);
  const [profileData, setprofile] = useState(null);
  const [type, settype] = useState("");

  const [bio, setBio] = useState(null);



  useEffect(() => {

    if (localStorage.getItem("authUser")) {


      const obj = JSON.parse(localStorage.getItem("authUser"));
      setUser(obj); // fetch logged in user data and store in user variable

      // Fetch user profile data from DB of logged in user
      getInfluencersProfilebyId(obj.id).then((result) => {
        console.log("get the influencers profile", result)

        setprofile(result); //store all profile data in profile state 
        setprofileId(result.id) // store user id id in profileID state 
        setBio(result.bio) // store profile id in profileID state 
        settype(result.categoryType); // store category Type in type state 

        setProfileImage(_.get(result, "coverImage") ? result.coverImage : defaultImage) // set profile Images to default image

        setSelectedImage1(
          _.get(result, "image1") ? result.image1 : defaultImage
        )
        setSelectedImage2(
          _.get(result, "image2") ? result.image2 : defaultImage
        )
        setSelectedImage3(
          _.get(result, "image3") ? result.image3 : defaultImage
        )
        setSelectedImage4(
          _.get(result, "image4") ? result.image4 : defaultImage
        )
      })
        .catch((err) => {
          console.error("Error fetching profile data:", err);
        });
    }

  }, []);


  // profile image section
  const handleProfileImage = e => {
    const file = e.target.files[0] // check if the user has selected an image 
    if (file) {
      const reader = new FileReader()
      reader.onload = e => {
        setProfileImage(e.target.result)
        setConverImagesfile(file)
      }
      reader.readAsDataURL(file)
    } else {
      setProfileImage(_.get(profileData, "coverImage") ? profileData.coverImage : defaultImage)
      setConverImagesfile(null)
    }
  }

  const handleUploadProfileImage = async () => {
    const promises = [
      uploadfile(coverImagesfile, setProfileImage),
    ]
    const results = await Promise.all(promises)
    // console.log("results", results)

    if (results.every(result => result === true)) {
      const data = {
        ...profileData,
        coverImage: profileImage,
      }
      // console.log("images data", data)
      UpdateProfile(data).then(result => {
        if (!isEmpty(result)) {
          Swal.fire(
            "Upload successfully",
            "Profile Image updated successfully",
            "success"
          )
          // window.location.reload(true);
          // Update the profile image in the state
          setProfileImage(profileImage);
        }
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please retry uploading Profile image.",
      })
    }
  }

  // gallery section
  const handleImageChange1 = e => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = e => {
        setSelectedImage1(e.target.result)
        setSelectedfile1(file)
      }
      reader.readAsDataURL(file)
    } else {
      setSelectedImage1(null)
      setSelectedfile1(null)
    }
  }

  const handleImageChange2 = e => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = e => {
        setSelectedImage2(e.target.result)
        setSelectedfile2(file)
      }
      reader.readAsDataURL(file)
    } else {
      setSelectedImage2(null)
      setSelectedfile2(null)
    }
  }

  const handleImageChange3 = e => {
    const file = e.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.onload = e => {
        setSelectedImage3(e.target.result)
        setSelectedfile3(file)
      }
      reader.readAsDataURL(file)
    } else {
      setSelectedImage3(null)
      setSelectedfile3(null)
    }
  }

  const handleImageChange4 = e => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = e => {
        setSelectedfile4(file)
        setSelectedImage4(e.target.result)
      }
      reader.readAsDataURL(file)
    } else {
      setSelectedImage4(null)
      setSelectedfile4(null)
    }
  }

  const uploadfile = async (file, setSelectedImage) => {
    if (file) {
      const formDataImage = new FormData()
      formDataImage.append("image", file, "compressed-image.jpg")
      try {
        const response = await fetch("https://marbizimages.yuvmedia.in/upload.php", {
          method: "POST",
          body: formDataImage,
        })
        const data = await response.json()
        if (data) {
          // console.log(data)
          setSelectedImage(data.imageUrl)
          return true
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong please Retry uploading Image",
          })
          return false
        }
      } catch (error) {
        // Handle any errors
        console.error(error)
        return false
      }
    }
    return false // Return false if there's no file to upload
  }

  const handleUploadGalleryImages = async () => {
    const promises = [
      uploadfile(selectedfile1, setSelectedImage1),
      uploadfile(selectedfile2, setSelectedImage2),
      uploadfile(selectedfile3, setSelectedImage3),
      uploadfile(selectedfile4, setSelectedImage4),
    ]
    const results = await Promise.all(promises)
    console.log("results", results)

    if (results.every(result => result === true)) {
      const data = {
        ...profileData,
        image1: selectedImage1,
        image2: selectedImage2,
        image3: selectedImage3,
        image4: selectedImage4,
      }
      // console.log("images data", data)
      UpdateProfile(data).then(result => {
        if (!isEmpty(result)) {
          Swal.fire(
            "Upload successfully",
            "Gallery Image added successfully",
            "success"
          )
          window.location.reload(true);

        }
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please retry uploading Gallery Images.",
      })
    }
  }

  // description section
  const handleBioChange = (event) => {
    setBio(event.target.value);
    // console.log("updated bio", bio)
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // console.log('Form submitted successfully');

    const bioData = {
      ...profileData,
      bio: bio,
    };
    // console.log('New Bio Data to update:', bioData);

    try {
      const result = await UpdateProfile(bioData);

      if (!isEmpty(result)) {
        Swal.fire(
          "Congratulations",
          "Your Description is successfully updated!",
          "success"
        );
        // window.location.reload(true);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Bio changes failed!",
        });
      }
    } catch (error) {
      // Handle any errors that occur during the submission
      console.error("Error updating bio:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred while updating your bio.",
      });
    }
  };


  return (
    <>
      {/* profile section */}

      <div className="container main-body">
        <div className="row my-3">
          <h1 className="text-center">Edit {pagetitle}</h1>
          <hr className="hr hr-blurry border-danger border border-2" />
          {profileData &&
            <>
              <div className=" col-md-2 col-4 d-flex justify-content-center align-items-center">
                {/* Profile picture */}
                <div className="profile-image-container">
                  <label
                    htmlFor="icon-coverImage-file"
                    style={{ height: "100%", width: '100%' }}
                  >
                    <div className="image-overlay"
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={profileImage}
                        alt="Generic placeholder"
                        className="img-fluid profile-pic rounded-circle border border-danger border-3"
                      />
                      <div className="overlay">
                        <span>Change Profile</span>
                      </div>
                    </div>
                  </label>
                  <input
                    accept="image/*"
                    id="icon-coverImage-file"
                    type="file"
                    name="coverimage"
                    style={{ display: "none" }}
                    onChange={handleProfileImage}
                  />
                </div>
              </div>

              <div className="col-md-4 col-8 d-grid justify-content-between ">
                {/* Creator title */}
                <div>
                  <h1 className="text-white text-capitalize">{_.get(profileData, "fullName") ? profileData.fullName : "User"}</h1>
                </div>
                {/* Creator categories */}
                <div>
                  <h4 className="text-white fs-6">
                    {profileData.category.map((list, index) => (
                      <span key={index}>{list}, </span>
                    ))}
                  </h4>
                  <h6 className="text-secondary">
                    {_.get(profileData, "location")
                      ? profileData.location
                      : "India"}
                  </h6>
                </div>
              </div>
              <div className='col d-grid justify-content-center justify-content-md-end align-content-center'>
                <Link to={`/${profileData.regName}`}>
                  <button

                    className="btn-global fs-6 mt-2 px-3 w-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye me-1" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                    Public Profile
                  </button>
                </Link>

                <button type="submit"
                  onClick={handleUploadProfileImage}
                  className="btn-global fs-6 mt-2 px-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-floppy me-1" viewBox="0 0 16 16">
                    <path d="M11 2H9v3h2V2Z" />
                    <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0ZM1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5Zm3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4v4.5ZM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V15Z" />
                  </svg>
                  Update Profile
                </button>
              </div>

            </>
          }

        </div>
      </div>

      {/* gallery section */}
      <div className="container gallery-container my-3">

        <Row className=''>
          <div className='text-secondary mb-2'>Edit Gallery</div>
          {/* 1st gallery img container */}
          <Col md="6" className=''>
            <div className="text-center gallery-container-one">
              <input
                accept="image/*"
                id="icon-image-1-file"
                type="file"
                name="image-1"
                style={{ display: "none" }}
                onChange={handleImageChange1}
              />
              <label htmlFor="icon-image-1-file" >
                <img
                  src={
                    isEmpty(selectedImage1)
                      ? defaultImage
                      : selectedImage1
                  }
                  alt={_.get(profileData, "fullName") ? profileData.fullName : "User"}
                  className="rounded-3 img-fluid"
                />
              </label>
              <div className="gallery-overlay fs-6">
                <span>Change Gallery Image</span>
              </div>
            </div>
          </Col>

          <Col sm="6">
            {/* 2rd gallery img container */}
            <Row>
              <Col md="6">
                <div className="text-center gallery-container-two">
                  <input
                    accept="image/*"
                    id="icon-image-2-file"
                    type="file"
                    name="image-2"
                    style={{ display: "none" }}
                    onChange={handleImageChange2}
                  />
                  <label
                    htmlFor="icon-image-2-file"
                    style={{ height: "100%" }}
                  >
                    <img
                      src={
                        isEmpty(selectedImage2)
                          ? defaultImage
                          : selectedImage2
                      }
                      alt=""
                      className="rounded-3"
                    />
                    <div className="gallery-overlay fs-6">
                      <span>Change Gallery Image</span>
                    </div>
                  </label>
                </div>
              </Col>

              <Col md="6">
                <div className="text-center gallery-container-two">
                  <input
                    accept="image/*"
                    id="icon-image-3-file"
                    type="file"
                    name="image-3"
                    style={{ display: "none" }}
                    onChange={handleImageChange3}
                  />
                  <label
                    htmlFor="icon-image-3-file"
                    style={{ height: "100%" }}
                  >

                    <img
                      src={
                        isEmpty(selectedImage3)
                          ? defaultImage
                          : selectedImage3
                      }
                      className="rounded-3"
                      alt=""
                    />
                    <div className="gallery-overlay fs-6">
                      <span>Change Gallery Image</span>
                    </div>
                  </label>
                </div>
              </Col>

            </Row>

            {/* 3rd  gallery img container */}
            <Row className='mt-3'>
              <Col sm="12">
                <div className="text-center gallery-container-three">
                  <input
                    accept="image/*"
                    id="icon-image-4-file"
                    type="file"
                    name="image-4"
                    style={{ display: "none" }}
                    onChange={handleImageChange4}
                  />
                  <label
                    htmlFor="icon-image-4-file"
                    style={{ height: "100%" }}
                  >

                    <img
                      src={
                        isEmpty(selectedImage4)
                          ? defaultImage
                          : selectedImage4
                      }
                      alt=""
                      className="rounded-3"
                    />
                    <div className="gallery-overlay fs-6">
                      <span>Change Gallery Image</span>
                    </div>
                  </label>
                </div>
              </Col>

            </Row>
          </Col>
        </Row>
        <button
          type="submit"
          onClick={handleUploadGalleryImages}
          className='btn-global fs-6 px-3 mt-3 text-center'
        >
          Update Gallery
        </button>
      </div>

      {/* about section */}
      <div className="container my-3" >
        <div className="row">
          <div className="col">

            <div>
              <h4 className="text-white text-capitalize">
                {_.get(profileData, "fullName") ? profileData.fullName : "User"} is a top creator
              </h4>
              <p className="text-secondary">
                Top creators have completed multiple orders and have a high
                rating from brands
              </p>
            </div>
            <hr className="text-secondary" />
            {/* <p className="text-white">{_.get(profileData, "bio") ? profileData.bio : "..."}</p> */}

            <div className='bio-container'>
              <form onSubmit={handleFormSubmit} >
                <label htmlFor="description" className='mb-2 text-secondary'>Edit Description</label>
                <div>

                  <textarea className='dark-bg form-control p-3 w-100'
                    name="bio"
                    id="bio"
                    rows="5"
                    value={bio || 'Write something about you...'}
                    onChange={handleBioChange}
                  />

                </div>

                <div>

                  <button className="btn-global fs-6 px-3 mt-3" type="submit">
                    Update
                  </button>
                </div>
              </form>

            </div>

          </div>


        </div>
      </div>
    </>
  )
}
export default CreatorMyProfile;