import React, { useEffect, useState } from "react";
import {
  getPublicList,
  getInfluencersProfile,
  createEnquiry,
} from "../services/api/api-service";
import { useParams, Link } from "react-router-dom";
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
    console.log("Handler", formData);
    const newErrors = {};
    // Validation according to data types
    if (formData.occasion === "Choose...") {
      newErrors.occasion = "Please select an occasion.";
    }
    if (!formData.eventDate) {
      newErrors.eventDate = "Please select an event date.";
    }
    if (!formData.venueCity) {
      newErrors.venueCity = "Please enter the venue city.";
    }
    if (
      isNaN(parseFloat(formData.budget)) ||
      parseFloat(formData.budget) <= 0
    ) {
      newErrors.budget = "Please enter a valid budget.";
    }
    if (isNaN(parseInt(formData.people)) || parseInt(formData.people) <= 0) {
      newErrors.people = "Please enter a valid number of people.";
    }
    if (!formData.name) {
      newErrors.name = "Please enter your full name.";
    }
    if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!isValidMobileNumber(formData.mobile)) {
      newErrors.mobile = "Please enter a valid mobile number.";
    }

    // Check if there are any errors, and if so, update the state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      createEnquiry(formData).then((result) => {
        console.log("submit", result);
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
      setOccasionCategory(result);
      console.log("occasionCategory", occasionCategory);
    });
  }, []);
  useEffect(() => {
    getInfluencersProfile(regName || null)
      .then((result) => {
        setprofile(result);
        console.log(result);
      })
      .catch((err) => {
        console.error("Error fetching profile data:", err);
      });
  }, []);
  if (profileData === null) {
    return null;
  }
  return (
    <div>
      <div className="container main-body my-5">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img
              src={profileData.coverImage}
              className="img-fluid celeb-img"
              alt="Sanam Image1"
            />
            <h3 className="mt-3 text-white "> {profileData.fullName}</h3>
          </div>
          <div className="col-md-6 col-sm-12 mx-auto my-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="form-label text-white" for="occasion">
                  What's the occasion?*
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
                  {occasionCategory.map((item, key) => {
                    <option key={key} value={item.value}>
                      {item.label}
                    </option>;
                  })}
                </select>
                <div className="mb-4">
                  {errors.occasion && (
                    <div className="invalid-feedback text-white">
                      {errors.occasion}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label text-white" for="eventDate">
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
                <div className="mb-4">
                  {errors.eventDate && (
                    <div className="invalid-feedback text-white">
                      {errors.eventDate}
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label text-white" for="venueCity">
                  Venue City*
                </label>
                <input
                  type="text"
                  id="venueCity"
                  name="venueCity"
                  className="form-control dark-bg"
                  value={formData.venueCity}
                  onChange={handleInputChange}
                />
                <div className="mb-4">
                  {errors.venueCity && (
                    <div className="invalid-feedback text-white">
                      {errors.venueCity}
                    </div>
                  )}
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <label className="form-label text-white" for="budget">
                    Budget*
                  </label>
                  <input
                    type="number"
                    id="budget"
                    name="budget"
                    className="form-control dark-bg"
                    value={formData.budget}
                    onChange={handleInputChange}
                  />
                  <div className="mb-4">
                    {errors.budget && (
                      <div className="invalid-feedback text-white">
                        {errors.budget}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label text-white" for="people">
                    How many people will attend?*
                  </label>
                  <input
                    type="number"
                    id="people"
                    name="people"
                    className="form-control dark-bg"
                    value={formData.people}
                    onChange={handleInputChange}
                  />
                  <div className="mb-4">
                    {errors.people && (
                      <div className="invalid-feedback text-white">
                        {errors.people}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label text-white" for="name">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control dark-bg"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <div className="mb-4">
                  {errors.name && (
                    <div className="invalid-feedback text-white">
                      {errors.name}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label text-white" for="email">
                  Email Address (No Spam!)*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control dark-bg"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <div className="mb-4">
                  {errors.email && (
                    <div className="invalid-feedback text-white">
                      {errors.email}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label text-white" for="mobile">
                  Mobile Number*
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="form-control dark-bg"
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
                <div className="mb-4">
                  {errors.mobile && (
                    <div className="invalid-feedback text-white">
                      {errors.mobile}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label text-white" for="message">
                  Tell us more (we love to listen)
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control dark-bg"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                <div className="mb-4">
                  {errors.message && (
                    <div className="invalid-feedback text-white">
                      {errors.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label text-white" for="options">
                  Send more options in my budget
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
                <div className="mb-4">
                  {errors.options && (
                    <div className="invalid-feedback text-white">
                      {errors.options}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="whatsappCheck"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <label
                    className="form-check-label text-white"
                    for="whatsappCheck"
                  >
                    Send Quotes on Whatsapp
                  </label>
                </div>
              </div>

              <div className="d-grid justify-content-center">
                <button type="submit" className="button-87 btn-block mb-4">
                  Send Request
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
