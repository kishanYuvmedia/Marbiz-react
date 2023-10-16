import React from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import Select from "react-select";
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Swal from "sweetalert2";

const BrandSignup = () => {
    const responseGoogle = (response) => {
        console.log(response);
    };

    return (
        <div>
            <Container className="py-5 d-grid align-content-center" style={{ minHeight: "100vh" }}>
                {/* BG Gradient */}
                <div className="position-absolute start-0 top-0 desktop-view" style={{ width: "500px", height: "800px" }}>
                    <div
                        className=" "
                        style={{
                            background: "radial-gradient(circle, rgb(252 110 144 / 32%) 0%, rgba(254, 96, 173, 0) 51%, rgba(0, 0, 0, 0) 100%)",
                            width: "100%",
                            height: "100%",
                            top: "0%",
                        }}
                    ></div>
                </div>
                <div className="position-absolute top-50 end-0 desktop-view" style={{ width: "500px", height: "500px" }}>
                    <div
                        className=" "
                        style={{
                            background: "radial-gradient(circle, rgb(252 110 144 / 32%) 0%, rgba(254, 96, 173, 0) 51%, rgba(0, 0, 0, 0) 100%)",
                            width: "100%",
                            height: "100%",
                            top: "0%",
                        }}
                    ></div>
                </div>

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
                        <div className="inquiry-form rounded-3 p-3">
                            <Form className="m-3 pb-3">
                                {/* Full Name */}
                                <Form.Group className="mb-3" controlId="fullName">
                                    <Form.Control className="dark-bg" type="text" placeholder="Full Name" />
                                </Form.Group>

                                {/* Brand Name */}
                                <Form.Group className="mb-3" controlId="brandName">
                                    <Form.Control className="dark-bg" type="text" placeholder="Brand Name" />
                                </Form.Group>

                                {/* Business Email */}
                                <Form.Group className="mb-3" controlId="businessEmail">
                                    <Form.Control className="dark-bg" type="email" placeholder="Business Email" />
                                </Form.Group>

                                {/* Password */}
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Control className="dark-bg" type="password" placeholder="Password" />
                                </Form.Group>

                                {/* How did you hear about us? Dropdown */}
                                <Form.Select className="dark-bg mb-3" aria-label="howDidYouHear">
                                    <option>How did you hear about us?</option>
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
                                        className="basic-multi-select mb-3"
                                        classNamePrefix="select"
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
                                    <Link to={`/#`} className="ms-1">
                                        Terms & conditions
                                    </Link>
                                    and
                                    <Link to={`/#`} className="ms-1">
                                        Privacy Policy.
                                    </Link>
                                </small>
                                <div className="text-center text-white my-2">
                                    Already have an account?
                                    <Link to={`/#`} className="ms-1">
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
