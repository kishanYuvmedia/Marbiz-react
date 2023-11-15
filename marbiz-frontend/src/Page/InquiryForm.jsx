import React, { useEffect, useState } from "react";
import { getPublicList, getInfluencersProfile, createEnquiry } from "../services/api/api-service";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash";

const InquiryForm = () => {

  let { regName } = useParams();
  const [profileData, setprofile] = useState(null);
  const [occasionCategory, setOccasionCategory] = useState([]);
  const initialFormData = {
    occasion: "Choose...",
    eventDate: "",
    venueCity: "",
    budget: "",
    people: "",
    name: "",
    email: "",
    mobile: "",
    message: "",
    options: "Choose...",
    whatsappCheck: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setErrors({
      ...errors,
      [name]: "",
    });
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    // Validation according to data types
    if (formData.occasion === "Choose...") {
      newErrors.occasion = "Please select an occasion.";
      // console.log("Handler1");
    }
    if (!formData.venueCity) {
      newErrors.venueCity = "Please enter the venue city.";
      // console.log("Handler2");
    }
    if (
      isNaN(parseFloat(formData.budget)) ||
      parseFloat(formData.budget) <= 0
    ) {
      // console.log("Handler3");
      newErrors.budget = "Please enter a valid budget.";
    }
    if (isNaN(parseInt(formData.people)) || parseInt(formData.people) <= 0) {
      // console.log("Handler4");
      newErrors.people = "Please enter a valid number of people.";
    }
    if (!formData.name) {
      // console.log("Handler5");
      newErrors.name = "Please enter your full name.";
    }
    if (!isValidEmail(formData.email)) {
      // console.log("Handler6");
      newErrors.email = "Please enter a valid email address.";
    }
    if (!isValidMobileNumber(formData.mobile)) {
      // console.log("Handler7");
      newErrors.mobile = "Please enter a valid mobile number.";
    }
    console.log(Object.keys(newErrors).length);
    // Check if there are any errors, and if so, update the state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // console.log("Handler 2");
      const data = { ...formData, ...{ profileId: profileData.id, mtUserId: profileData.mtUserId } };
      // console.log("final", data);
      createEnquiry(data).then((result) => {
        if (!isEmpty(result)) {
          Swal.fire({
            title: "Enquiry Successfuly Submit",
            width: 600,
            padding: "3em",
            color: "#fff",
            border: "1px solid red",
            background: "#dc4c64",
          });
        }
      });
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidMobileNumber = (mobile) => {
    const mobileRegex = /^\d{10}$/; // Assumes a 10-digit mobile number
    return mobileRegex.test(mobile);
  };

  useEffect(() => {
    getPublicList("occasion").then((result) => {
      setTimeout(() => {
        setOccasionCategory(result);
      }, 1000);
    });
    // console.log("Occasion", occasionCategory);
    getInfluencersProfile(regName || null)
      .then((result) => {
        setprofile(result);
        // console.log(result);
      })
      .catch((err) => {
        console.error("Error fetching profile data:", err);
      });
  }, [regName]);

  if (profileData === null) {
    return null;
  }

  return (
    <div>
      <div className="container main-body my-5">
        <div className="row">

          <div className="col-md-4 col-sm-12">
            <div className="celeb-container">
              <img
                src={profileData.coverImage}
                className="img-fluid celeb-img"
                alt="Celeb Images"
              />
              <h3 className="mt-3 text-white text-capitalize">{profileData.fullName}</h3>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 mx-auto my-3 form-container">
            <form>

              <div className="mb-3">
                <label className="form-label text-white" htmlFor="occasion">
                  What's the occasion? <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select dark-bg"
                  id="occasion"
                  name="occasion"
                  aria-label="Select an occasion"
                  value={formData.occasion}
                  onChange={handleInputChange}
                >
                  <option defaultValue>Choose...</option>
                  {occasionCategory.map((item, key) => (
                    <option key={key} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
                {errors.occasion && (
                  <small className="text-danger mb-3">{errors.occasion}</small>
                )}
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label text-white" htmlFor="eventDate">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    className="form-control dark-bg"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                  />
                  {errors.eventDate && (
                    <small className="text-danger">{errors.eventDate}</small>
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label text-white" htmlFor="venueCity">
                    Venue City <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="venueCity"
                    name="venueCity"
                    className="form-control dark-bg"
                    value={formData.venueCity}
                    onChange={handleInputChange}
                  />
                  {errors.venueCity && (
                    <small className="text-danger ">{errors.venueCity}</small>
                  )}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label text-white" htmlFor="budget">
                    Budget <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    id="budget"
                    name="budget"
                    className="form-control dark-bg"
                    value={formData.budget}
                    onChange={handleInputChange}
                  />
                  {errors.budget && (
                    <small className="text-danger">{errors.budget}</small>
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label text-white" htmlFor="people">
                    How many people will attend? <span className="text-danger">*</span>
                  </label>
                  <input
                    type="number"
                    id="people"
                    name="people"
                    className="form-control dark-bg"
                    value={formData.people}
                    onChange={handleInputChange}
                  />
                  {errors.people && (
                    <small className="text-danger">{errors.people}</small>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label text-white" htmlFor="name">
                  Full Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control dark-bg"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label text-white" htmlFor="email">
                    Business Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control dark-bg"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label text-white" htmlFor="mobile">
                    Mobile Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    className="form-control dark-bg"
                    value={formData.mobile}
                    onChange={handleInputChange}
                  />
                  {errors.mobile && (
                    <small className="text-danger">{errors.mobile}</small>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label text-white" htmlFor="message">
                  Tell us more (We'll love to listen)
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control dark-bg"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                {errors.message && (
                  <small className="text-danger">{errors.message}</small>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label text-white" htmlFor="options">
                  You want more options in your budget?
                </label>
                <select
                  className="form-select dark-bg"
                  id="options"
                  name="options"
                  aria-label="Select an option"
                  value={formData.options}
                  onChange={handleInputChange}
                >
                  <option defaultValue>Choose...</option>
                  <option value="1">Yes</option>
                  <option value="2">Don't</option>
                </select>
                {errors.options && (
                  <small className="text-danger">{errors.options}</small>
                )}
              </div>

              <div className="mb-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    name="whatsappCheck"
                    id="whatsappCheck"
                    value={formData.whatsappCheck}
                    onChange={handleInputChange}
                  />
                  <label
                    className="form-check-label text-white"
                    htmlFor="whatsappCheck"
                  >
                    Send Quotes on Whatsapp
                  </label>
                </div>
              </div>

              <div className="d-grid justify-content-center">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn-global px-3 mb-3"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
