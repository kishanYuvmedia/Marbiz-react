import React, { useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import Select from "react-select";
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Swal from "sweetalert2";
import HeroBgGradient from '../../Components/HeroBgGradient';



const BrandSignup = () => {
    const responseGoogle = (response) => {
        console.log(response);
    };

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div>
            <Container className="py-5 d-grid align-content-center" style={{ minHeight: "100vh" }}>
                {/* BG Gradient */}
                <HeroBgGradient />

                <Row className="justify-content-center">
                    <Col lg="6" md="8">
                        <div className="text-center mb-3 text-white fw-bold">
                            <h2>Create Your Account</h2>
                        </div>
                        <div className="d-grid p-2 justify-content-center">
                            <GoogleLogin
                                clientId="YOUR_CLIENT_ID"
                                buttonText="Sign Up With Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
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
                        </div>

                        {/* signup form */}
                        <div className="inquiry-form signupForm rounded-3 p-3">
                            <Form className="m-3 pb-3" noValidate validated={validated} onSubmit={handleSubmit} >
                                {/* Full Name */}
                                <Form.Group className="mb-3" controlId="fullName">
                                    <Form.Control required className="dark-bg" type="text" placeholder="Full Name" />
                                </Form.Group>

                                {/* Brand Name */}
                                <Form.Group className="mb-3" controlId="brandName">
                                    <Form.Control required className="dark-bg" type="text" placeholder="Brand Name" />
                                </Form.Group>

                                {/* Business Email */}
                                <Form.Group className="mb-3" controlId="businessEmail">
                                    <Form.Control required className="dark-bg" type="email" placeholder="Business Email" />
                                </Form.Group>

                                {/* Password */}
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Control required className="dark-bg" type="password" placeholder="Password" />
                                </Form.Group>

                                {/* How did you hear about us? Dropdown */}
                                <Form.Select className="dark-bg mb-3" aria-label="howDidYouHear">
                                    <option disabled>How did you hear about us?</option>
                                    <option value="1">Youtube</option>
                                    <option value="2">Instagram</option>
                                    <option value="3">News Portal</option>
                                </Form.Select>

                                {/* Select Interested Categories */}
                                <Form.Group as={Col} className="mb-3" controlId="interestedCategories">
                                    <Form.Label htmlFor="category" className="text-muted">
                                        Select Interested Categories
                                    </Form.Label>
                                    <Select
                                        isMulti
                                        name="category"
                                        id="category"
                                        className="basic-multi-select  mb-3"
                                        classNamePrefix="select a category"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {/* {errors.category} */}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="mt-3 d-grid justify-content-center">
                                    <button type="submit" className="btn-global brand-btn py-2 " >
                                        Sign up
                                    </button>
                                </div>
                            </Form>
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
                                    <Link to={`/#`} className="ms-1 fw-bold">
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
