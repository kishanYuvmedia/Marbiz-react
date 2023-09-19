import React from 'react';

const InquiryForm = () => {
  return (
    <div>
      <div className="container main-body">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <a
              href="/inquiryform"
              data-toggle="lightbox"
              data-gallery="example-gallery"
            >
              <img
                src="https://unsplash.it/600.jpg?image=251"
                className="img-fluid celeb-img"
                alt="Sanam Image1"
              />
            </a>
            <h3 className="mt-3">Celeb Name</h3>
          </div>
          
          <div className="col-md-6 col-sm-12 mx-auto my-3">
            <form>
              <div className="mb-4">
                <label className="form-label" htmlFor="occasion">
                  What's the occasion?*
                </label>
                <select
                  className="form-select"
                  id="occasion"
                  aria-label="Select an occasion"
                >
                  <option defaultValue>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label" htmlFor="eventDate">
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  className="form-control"
                />
              </div>

              <div className="mb-4">
                <label className="form-label" htmlFor="venueCity">
                  Venue City*
                </label>
                <input
                  type="text"
                  id="venueCity"
                  className="form-control"
                />
              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="budget">
                    Budget*
                  </label>
                  <input
                    type="number"
                    id="budget"
                    className="form-control"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="people">
                    How many people will attend?*
                  </label>
                  <input
                    type="number"
                    id="people"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label" htmlFor="name">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                />
              </div>

              <div className="mb-4">
                <label className="form-label" htmlFor="email">
                  Email Address (No Spam!)*
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                />
              </div>

              <div className="mb-4">
                <label className="form-label" htmlFor="mobile">
                  Mobile Number*
                </label>
                <input
                  type="tel"
                  id="mobile"
                  className="form-control"
                />
              </div>

              <div className="mb-4">
                <label className="form-label" htmlFor="message">
                  Tell us more (we love to listen)
                </label>
                <textarea
                  id="message"
                  className="form-control"
                  rows="4"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="form-label" htmlFor="options">
                  Send more options in my budget
                </label>
                <select
                  className="form-select"
                  id="options"
                  aria-label="Select an option"
                >
                  <option defaultValue>Choose...</option>
                  <option value="1">Yes</option>
                  <option value="2">Don't</option>
                </select>
              </div>

              <div className="mb-4">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="whatsappCheck"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="whatsappCheck"
                  >
                    Send Quotes on Whatsapp
                  </label>
                </div>
              </div>

              <div className="d-grid justify-content-center">
                <button
                  type="submit"
                  className="button-87 btn-block mb-4"
                >
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
