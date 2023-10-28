import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import Swal from "sweetalert2";
import HeroBgGradient from "../../Components/HeroBgGradient";
import config from "../../constants/config";
import { getPublicList, createMtUsers,findUserbyemail } from "../../services/api/api-service";
import { result } from "lodash";
const BrandSignup = () => {
  const navigate = useNavigate();
  document.title = "Create Account | Marbiz";
  const responseGoogle = (response) => {
    console.log(response);
  };
  const [validated, setValidated] = useState(false);
  const [category, setCategory] = useState([]);
  const [platform, setPlatform] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    brandName: "",
    businessEmail: "",
    password: "",
    howDidYouHear: "",
    interestedCategories: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCategoryChange = (selectedOptions) => {
    const categoryValues = selectedOptions.map((option) => option.value);
    setFormData({
      ...formData,
      interestedCategories: categoryValues,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if(checkemail(formData.businessEmail)){
      if (form.checkValidity() === false) {
      } else {
        // Access the form data here
        console.log(formData);
        const data = [];
        data.push({
          phoneVerified: false,
          isTermsAgreed: false,
          contactName: formData.fullName,
          userType: "Business",
          country: "IN",
          status: "A",
          realm: formData.fullName,
          username: formData.businessEmail,
          password: formData.password,
          email: formData.businessEmail,
          howDidYouHear: formData.howDidYouHear,
          interestedCategories: formData.interestedCategories,
          emailVerified: true,
        });
        createMtUsers(data)
          .then((result) => {
            if (result) {
              Swal.fire(
                "Congratulations",
                "Your Marbiz account is created",
                "success"
              );
              setValidated(true);
              navigate(`/login`, {
                replace: true,
              });
            }
          })
          .catch((error) => {
            console.error("Error creating Marbiz account", error);
            Swal.fire(
              "Error",
              "There was an error creating your Marbiz account. Please try again.",
              "error"
            );
          });
      }
    }
    else{
      Swal.fire(
        "Already Register",
        "Email already register on marbiz",
        "error"
      );
    }
   
  };
  function checkemail(email){
    findUserbyemail(email).then(result=>{
      return result.count;
    })
  }
  useEffect(() => {
    getPublicList("Category").then((result) => {
      setCategory(result);
    });
    getPublicList("Platform").then((result) => {
      setPlatform(result);
    });
  }, []);
  return (
    <div>
      <Container
        className="py-5 d-grid align-content-center"
        style={{ minHeight: "100vh" }}
      >
        {/* BG Gradient */}
        <HeroBgGradient />

        <Row className="justify-content-center">
          <Col lg="6" md="8">
            <div className="text-center mb-3 text-white fw-bold">
              <h2>Create Your Account</h2>
            </div>
            {/* <div className="d-grid p-2 justify-content-center">
              <GoogleLogin
                clientId={config.googleAuthclientKey}
                buttonText="Sign Up With Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                style={{
                  backgroundColor: "black",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="py-2 d-grid align-content-center">
              <h2 className="text-divider">
                <span className="">or</span>
              </h2>
            </div> */}

            {/* signup form */}
            <div className="inquiry-form signupForm rounded-3 p-3">
              <form
                className="m-3 pb-3"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <Form.Group className="mb-3" controlId="fullName">
                  <Form.Control
                    required
                    className="dark-bg"
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {/* ... (Feedback and validation message) ... */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="brandName">
                  <Form.Control
                    required
                    className="dark-bg"
                    type="text"
                    placeholder="Brand Name"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleChange}
                  />
                  {/* ... (Feedback and validation message) ... */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="businessEmail">
                  <Form.Control
                    required
                    className="dark-bg"
                    type="email"
                    placeholder="Business Email"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleChange}
                  />
                  {/* ... (Feedback and validation message) ... */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Control
                    required
                    className="dark-bg"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {/* ... (Feedback and validation message) ... */}
                </Form.Group>

                <Form.Select
                  className="dark-bg mb-3"
                  aria-label="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                >
                  <option disabled value="">
                    How did you hear about us?
                  </option>
                  {platform.map((item) => (
                    <option key={item.id} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </Form.Select>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="interestedCategories"
                >
                  <Form.Label htmlFor="category" className="text-muted">
                    Select Interested Categories
                  </Form.Label>
                  <Select
                    options={category}
                    isMulti
                    name="category" // Set a name for the select
                    id="category"
                    className="basic-multi-select mb-3"
                    classNamePrefix="select a category"
                    value={category.filter((option) =>
                      formData.interestedCategories.includes(option.value)
                    )}
                    onChange={handleCategoryChange} // Use the handler for changes
                  />
                </Form.Group>

                <div className="mt-3 d-grid justify-content-center">
                  <Button type="submit" className="btn-global brand-btn py-2">
                    Sign up
                  </Button>
                </div>
              </form>
              <div className="text-center my-2">
                <small className="text-secondary">
                  By signing up, you agree to our
                  <Link to={`/#`} className="mx-1">
                    Terms & conditions
                  </Link>
                  and
                  <Link to={`/#`} className="ms-1">
                    Privacy Policy.
                  </Link>
                </small>
                <div className="text-center text-white my-2">
                  Already have an account?
                  <Link to={`/login`} className="ms-1 fw-bold">
                    Login.
                  </Link>
                </div>
              </div>
            </div>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BrandSignup;
