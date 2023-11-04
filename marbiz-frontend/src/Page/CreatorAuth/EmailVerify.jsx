import React, { useEffect, useState } from "react";
import "./style.css";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { Button, Col, Form, Row } from "react-bootstrap";
import { createMtUsers, getPublicList } from "../../services/api/api-service";

export default function EmailVerify(props) {
  const [otpStatus, setotpstatus] = useState(false);
  const [categoryList, setCategory] = useState([]);
  const [userCreateData, setUserCreate] = useState([]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    userType: "Choose...",
    registerName: "",
    checked: false,
  });

  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    if (formData.userType === "Choose...") {
      newErrors.userType = "Please select an option";
    }
    if (!formData.checked) {
      newErrors.checked = "You must check the box";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form data submitted:", formData);
      const dataJson = [];
      dataJson.push({
        contactName: formData.fullName,
        userType: formData.userType,
        realm: formData.fullName,
        username: formData.email,
        password: formData.password,
        email: formData.email,
        registerName: props.userClaim,
        emailVerified: true,
      });

      createMtUsers(dataJson[0]).then((result) => {
        console.log("save", result);
        if (result) {
          emailjs
            .send(
              "service_e7w1ogc",
              "template_xh1ijhr",
              {
                fullname: formData.fullName.trim(),
                email: formData.email.trim(),
              },
              "wTvfm3MUc4AuPgXl1"
            )
            .then(
              (result) => {
                Swal.fire(
                  "Thank You for Registration " + formData.fullName.trim(),
                  "Check you email for verification link",
                  "success"
                );
                setotpstatus(true);
                //console.log("Email sent successfully:", result.text);
              },
              (error) => {
                //console.error("Error sending email:", error.text);
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Getting issue with send email for verification",
                  footer:
                    '<Link to="/creator">Create your profile with different email account</Link>',
                });
              }
            );
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email Address already register",
            footer:
              '<Link to="/creator">Create your profile with different email account</Link>',
          });
        }
      });
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    getPublicList("Platform").then((result) => {
      setCategory(result);
    });
  }, []);

  return (
    <>
      <div>
        {otpStatus === false && (
          <div className="p-3 text-center bg-body-tertiary hero">
            <div className="container py-5">
              <h1 className="text-body-emphasis text-white">
                 
                Hello <strong className="gtext">@{props.userClaim} </strong>
                Create Your Own Profile
              </h1>

              <Row className="justify-content-md-center mt-4">
                <Col
                  xs
                  lg="6"
                  style={{ textAlign: "left" }}
                  className="inquiry-form  p-5 rounded-3"
                >
                  <Form onSubmit={handleSubmit} id="myForm">
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Control
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="dark-bg"
                        value={formData.fullName}
                        onChange={handleChange}
                        isInvalid={!!errors.fullName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.fullName}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="dark-bg"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="dark-bg"
                        value={formData.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                    <label htmlFor="formGridState" className="text-secondary">Select a platform!</label>
                      <Form.Select
                        name="userType"
                        className="dark-bg"
                        defaultValue={formData.userType}
                        onChange={handleChange}
                        isInvalid={!!errors.userType}
                      >
                        <option default disabled>Select a platform!</option>
                        {categoryList.map((list) => (
                          <option key={list.label}>{list.label}</option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.userType}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 mt-3" id="formGridCheckbox">
                      <Form.Check
                        type="checkbox"
                        name="checked"
                        className="text-white"
                        label="Check me out"
                        checked={formData.checked}
                        onChange={handleChange}
                        isInvalid={!!errors.checked}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.checked}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Button
                      variant="primary"
                      className="btn-global w-100 py-2"
                      type="submit"
                    >
                      Sign Up
                    </Button>
                  </Form>
                  <p className="text-center text-secondary mt-2" >
                    By signing up, you agree to our Terms and Privacy Policy.
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        )}
        {otpStatus === true && (
          <>
            <div className="p-5 text-center bg-body-tertiary hero">
              <div className="container py-5">
                <i
                  className="fa fa-mail-bulk text-white mb-5"
                  style={{ fontSize: "30px" }}
                ></i>
                <h1 className="text-body-emphasis text-white mb-5">
                  Check you email for verification link
                </h1>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
