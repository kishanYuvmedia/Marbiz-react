import React from "react";
import { Link } from "react-router-dom";

const InquiryForm = () => {
  return (
    <div>
      <div className="container main-body my-5">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img
              src="https://unsplash.it/600.jpg?image=251"
              className="img-fluid celeb-img"
              alt="Sanam Image1"
            />

            <h3 className="mt-3 text-white ">Celeb Name</h3>
          </div>

          <div className="col-md-6 col-sm-12 mx-auto my-3 inquiry-form  p-4 rounded-3 ">
            <form>
              <div className="mb-3">
                <label className="form-label text-white" for="occasion">
                  What's the occasion?*
                </label>
                <select
                  className="form-select dark-bg"
                  id="occasion"
                  aria-label="Select an occasion"
                >
                  <option defaultValue>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <label className="form-label text-white" for="eventDate">
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  className="form-control dark-bg"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label text-white" for="venueCity">
                  Venue City*
                </label>
                <input
                  type="text"
                  id="venueCity"
                  className="form-control dark-bg"
                />
              </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label text-white" for="budget">
                    Budget*
                  </label>
                  <input
                    type="number"
                    id="budget"
                    className="form-control dark-bg"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label text-white" for="people">
                    How many people will attend?*
                  </label>
                  <input
                    type="number"
                    id="people"
                    className="form-control dark-bg"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label text-white" for="name">
                  Full Name*
                </label>
                <input type="text" id="name" className="form-control dark-bg" />
              </div>

              <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <label className="form-label text-white" for="email">
                  Email Address (No Spam!)*
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control dark-bg"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label text-white" for="mobile">
                  Mobile Number*
                </label>
                <input
                  type="tel"
                  id="mobile"
                  className="form-control dark-bg"
                />
              </div>
              </div>

              <div className="mb-3">
                <label className="form-label text-white" for="message">
                  Tell us more (we love to listen)
                </label>
                <textarea
                  id="message"
                  className="form-control dark-bg"
                  rows="3"
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label text-white" for="options">
                  Send more options in my budget
                </label>
                <select
                  className="form-select dark-bg"
                  id="options"
                  aria-label="Select an option"
                >
                  <option defaultValue>Choose...</option>
                  <option value="1">Yes</option>
                  <option value="2">Don't</option>
                </select>
              </div>

              <div className="mb-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="whatsappCheck"
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
                <button type="submit" className="button-87 btn-block mb-3">
                  Place order
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
