import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2"
import {
  Col,
  Row,
  Button
} from "reactstrap"
import {
  getInfluencersProfilebyId,
  UpdateProfile,
} from "../../services/api/api-service";
import _, { isEmpty } from "lodash"
import defaultImage from '../../Images/default-image.jpg'
const CreatorMyProfile = ({ pagetitle }) => {
  const [profileId, setprofileId] = useState(null);
  const [coverImages, setConverImages] = useState(null);
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
  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"));
      setUser(obj);
      getInfluencersProfilebyId(obj.id)
        .then((result) => {
          console.log("get the influencers profile", result)
          setprofile(result);
          setprofileId(result.id)
          setConverImages(_.get(result, "coverImage") ? result.coverImage : defaultImage)
          settype(result.categoryType);
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
  const handleCoverImage = e => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = e => {
        setConverImages(e.target.result)
        setConverImagesfile(file)
      }
      reader.readAsDataURL(file)
    } else {
      setConverImages(_.get(profileData, "coverImage") ? profileData.coverImage : defaultImage)
      setConverImagesfile(null)
    }
  }
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
          console.log(data)
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
  const handleUploadCoverPage = async () => {
    const promises = [
      uploadfile(coverImagesfile, setConverImages),
    ]
    const results = await Promise.all(promises)
    console.log("results", results)

    if (results.every(result => result === true)) {
      const data = {
        ...profileData,
        coverImage: coverImages,
      }
      console.log("images data", data)
      UpdateProfile(data).then(result => {
        if (!isEmpty(result)) {
          Swal.fire(
            "Upload successfully",
            "profile Page Images added successfully",
            "success"
          )
          window.location.reload(true);
        }
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please retry uploading images.",
      })
    }
  }
  const handleUpload = async () => {
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
      console.log("images data", data)
      UpdateProfile(data).then(result => {
        if (!isEmpty(result)) {
          Swal.fire(
            "Upload successfully",
            "Cover Page Images added successfully",
            "success"
          )
          window.location.reload(true);
        }
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please retry uploading images.",
      })
    }
  }
  return (
    <>
      {/* profile section */}

      <div className="container main-body">
        <div className="row my-3">
          <h1 className="text-center">{pagetitle}</h1>
          <hr className="hr hr-blurry border-danger border border-2" />
          {profileData &&
            <>
              <div className=" col-md-2 col-4 d-flex justify-content-center align-items-center">
                <div className="profile-image-container">
                  <label
                    htmlFor="icon-coverImge-file"
                    style={{ height: "100%", width: '100%' }}
                  >
                    <img
                      src={coverImages}
                      alt="Generic placeholder"
                      className="img-fluid rounded-circle border border-danger border-3"
                    />
                  </label>
                  <input
                    accept="image/*"
                    id="icon-coverImge-file"
                    type="file"
                    name="coverimage"
                    style={{ display: "none" }}
                    onChange={handleCoverImage}
                  />
                </div>
              </div>
              <div className="col-md-4 col-8 d-grid justify-content-between ">
                <div className="">
                  <h1 className="text-white text-capitalize">{_.get(profileData, "fullName") ? profileData.fullName : "User"}</h1>
                </div>
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
                      
            </>
          }
          <div className='row'> 
          <div className='col-md-2'>
          <Button
          type="submit"
          onClick={handleUploadCoverPage}
          className="btn-global px-3 py-1 mt-2 w-100"
        >
          Update Images
        </Button>
          </div>
          </div>
        </div>
      </div>

      {/* gallery section */}
      <div className="container my-5">
       
        <Row>
          <Col
            sm="6"
            style={{
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            {" "}
            <input
              accept="image/*"
              id="icon-image-1-file"
              type="file"
              name="image-1"
              style={{ display: "none" }}
              onChange={handleImageChange1}
            />
            <label
              htmlFor="icon-image-1-file"
              style={{ height: "100%" }}
            >
              <div className="text-center gallery-container-one">
                <img
                  src={
                    isEmpty(selectedImage1)
                      ? defaultImage
                      : selectedImage1
                  }
                  alt=""
                  className="rounded-3"
                />
              </div>
            </label>
          </Col>
          <Col sm="6">
            <Row>
              <Col sm="12">
                <Row>
                  <Col
                    sm="6"
                    lg="6"
                    style={{

                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                  >
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

                    ><div className="text-center gallery-container-two">
                        <img
                          src={
                            isEmpty(selectedImage2)
                              ? defaultImage
                              : selectedImage2
                          }
                          alt=""
                          className="rounded-3"
                        />
                      </div>
                    </label>
                  </Col>
                  <Col
                    sm="6"
                    lg="6"
                    style={{

                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                  >
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
                    ><div className="text-center gallery-container-two">
                        <img
                          src={
                            isEmpty(selectedImage3)
                              ? defaultImage
                              : selectedImage3
                          }
                          className="rounded-3"
                          alt=""
                        /></div>
                    </label>
                  </Col>
                </Row>
              </Col>
              <Col
                sm="12"
                style={{

                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
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
                  <div className="text-center gallery-container-three">
                    <img
                      src={
                        isEmpty(selectedImage4)
                          ? defaultImage
                          : selectedImage4
                      }
                      alt=""
                      className="rounded-3"
                    /></div>
                </label>
              </Col>
            </Row>
          </Col>
        </Row>
        <Button
          type="submit"
          onClick={handleUpload}
          style={{ marginBottom: 10 }}
        >
          Upload cover Images
        </Button>
      </div>

      {/* about section */}
      <div className="container my-5">
        <div className="row">
          <div className="col">
            {/* <NavTabs images={images} /> */}
            <div className="">
              <h4 className="text-white text-capitalize">
                {_.get(profileData, "fullName") ? profileData.fullName : "User"} is a top creator
              </h4>
              <p className="text-secondary">
                {" "}
                Top creators have completed multiple orders and have a high
                rating from brands
              </p>
            </div>
            <hr className="text-secondary" />
            <p className="text-white">{_.get(profileData, "bio") ? profileData.bio : "..."}</p>
            <hr className="text-secondary" />
            <p className="text-white">{_.get(profileData, "about") ? profileData.about : "..."}</p>
          </div>
        </div>

      </div>
    </>
  )
}
export default CreatorMyProfile