import React, { useEffect, useState } from "react";
import { getPublicList, createProfile } from "../../services/api/api-service";
import { Button, Col, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

export default function CreateProfile(props) {
  const navigate = useNavigate();
  const [userdata, setUserDate] = useState(props.userData);
  const [selectUsertype, setUserType] = useState([]);
  const [categoryList, setCategory] = useState([]);
  const [IdCategory, setsetIdCategory] = useState([]);

  const initialFormData = {
    category: "",
    businessNumber: "",
    businessEmail: "",
    bio: "",
    about: "",
    location: "",
    idProofType: "",
    idProofNo: "",
    checked: false,
  };

  const initialErrors = {
    category: "",
    businessNumber: "",
    businessEmail: "",
    bio: "",
    about: "",
    location: "",
    idProofType: "",
    idProofNo: "",
    checked: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    // Clear the error for the field when it's changed
    setErrors({
      ...errors,
      [name]: "",
    });
    // Set privacy-related conditions
    if (name === "checked" && !checked) {
      // If the privacy checkbox is unchecked, show an error message for privacy-related fields
      setErrors({
        ...errors,
        userType: "You must agree to the terms.",
        idProofType: "You must agree to the terms.",
      });
    }
    // Update form data
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const listarray = [];
    const newErrors = {};
    selectUsertype.map((list) => {
      listarray.push({
        label: list.label,
        value: list.value,
      });
    });

    if (!formData.businessNumber) {
      newErrors.businessNumber = "Business contact number is required.";
    }
    if (!formData.businessEmail) {
      newErrors.businessEmail = "Business Email is required.";
    }
    if (!formData.checked) {
      newErrors.checked = "You must agree to the terms.";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      formData.category = listarray;
      formData.regName = userdata.registerName;
      formData.mtUserId = userdata.id;
      formData.fullName = userdata.contactName;
      console.log("Form data submitted:", formData);
      createProfile(formData).then((result) => {
        console.log("submitprofiledata", result);
        if (result) {
          Swal.fire(
            "Congratulations " + formData.fullName.trim(),
            "Your Profile is successfully submited.upload your cover photo next step",
            "success"
          );
          navigate(`/UploadImage?id=${result.id}`, {
            replace: true,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Somthing wrong please resubmit your details..",
          });
        }
      });
      setFormData(initialFormData); // Clear the form after submission
    }
  };
  useEffect(() => {
    getPublicList("Category").then((result) => {
      setCategory(result);
    });
    getPublicList("Document").then((result) => {
      setsetIdCategory(result);
    });
  }, []);

  return (
    <div>
      <div className="p-3 text-center bg-body-tertiary hero">
        <div className="container ">
          <h1 className="fw-bold text-white mb-3">Make Your Profile </h1>
          <Row className="justify-content-md-center ">
            <Col xs lg="6" style={{ textAlign: "left" }}>
              <Form onSubmit={handleSubmit} id="myForm">
                <Form.Group as={Col} controlId="formUserType">
                  <Select
                    defaultValue={formData.category}
                    isMulti
                    name="category"
                    id="category"
                    options={categoryList}
                    onChange={(e) => setUserType(e)}
                    className="basic-multi-select  mb-3"
                    classNamePrefix="select"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.category}
                  </Form.Control.Feedback>
                </Form.Group>

                <Row>
                  <Form.Group className="col-md-6 mb-3" controlId="formNumber">
                    <Form.Control
                      type="text"
                      name="businessNumber"
                      id="businessNumber"
                      className="dark-bg"
                      placeholder="Business contact number"
                      value={formData.businessNumber}
                      onChange={handleChange}
                      isInvalid={!!errors.businessNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.businessNumber}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    className="col-md-6 mb-3"
                    controlId="businessEmail"
                  >
                    <Form.Control
                      type="text"
                      name="businessEmail"
                      id="businessEmail"
                      placeholder="Business Email"
                      className="dark-bg"
                      value={formData.businessEmail}
                      onChange={handleChange}
                      isInvalid={!!errors.businessEmail}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.businessEmail}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="location">
                  <Form.Control
                    type="text"
                    name="location"
                    id="location"
                    className="dark-bg"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    isInvalid={!!errors.location}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.location}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formbio">
                  <Form.Control
                    as="textarea"
                    name="bio"
                    id="bio"
                    placeholder="Bio"
                    className="dark-bg"
                    value={formData.bio}
                    onChange={handleChange}
                    isInvalid={!!errors.bio}
                    rows={3}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.bio}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAbout">
                  <Form.Control
                    as="textarea"
                    name="about"
                    id="about"
                    placeholder="A  bout"
                    className="dark-bg"
                    value={formData.about}
                    onChange={handleChange}
                    isInvalid={!!errors.about}
                    rows={5}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.about}
                  </Form.Control.Feedback>
                </Form.Group>

                <Row>
                  <Form.Group
                    as={Col}
                    className="col-md-6 mb-3"
                    controlId="formGridState"
                  >
                    <Form.Select
                      name="idProofType"
                      className="dark-bg"
                      defaultValue={formData.idProofType}
                      onChange={handleChange}
                      isInvalid={!!errors.idProofType}
                    >
                      <option disabled>Select</option>
                      {IdCategory.map((list) => (
                        <option key={list.label}>{list.label}</option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.idProofType}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="col-md-6 mb-3" controlId="formNumber">
                    <Form.Control
                      type="text"
                      name="idProofNo"
                      id="idProofNo"
                      placeholder="ID Proof Number"
                      className="dark-bg"
                      value={formData.idProofNo}
                      onChange={handleChange}
                      isInvalid={!!errors.idProofNo}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.idProofNo}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3 mt-3" id="formGridCheckbox7">
                  <Form.Check
                    type="checkbox"
                    name="checked"
                    label="Check me out"
                    style={{ color: "white" }}
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
                  className="srch-btn fs-6 w-100"
                  type="submit"
                >
                  Create Profile
                </Button>
              </Form>
              <p style={{ textAlign: "center", color: "#fff" }}>
                By signing up, you agree to our Terms and Privacy Policy.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
