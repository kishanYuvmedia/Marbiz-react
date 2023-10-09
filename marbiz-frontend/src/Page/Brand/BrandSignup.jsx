import React from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import Select from "react-select";
import { Link } from 'react-router-dom';

import Swal from "sweetalert2";

const BrandSignup = () => {
    return (
        <div>
            <Container className='py-5'>
                <Row className='justify-content-center'>
                    <Col lg="6" md="8">
                        <div className='text-center mb-3 text-white fw-bold'>
                            <h2>Create Your Account</h2>
                        </div>
                        <div className='inquiry-form rounded-3 p-3'>
                            <Form className='m-3'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control className="dark-bg" type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text className="dark-bg" id="basic-addon1">@</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        className="dark-bg"
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text className="dark-bg" id="basic-email">Email</InputGroup.Text>
                                    <Form.Control type="email" className="dark-bg" placeholder="name@example.com" />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text className="dark-bg" id="basic-password">Password</InputGroup.Text>
                                    <Form.Control
                                        type="password"
                                        id="inputPassword5"
                                        aria-describedby="passwordHelpBlock"
                                        className="dark-bg"
                                    />
                                </InputGroup>
                                <Form.Select className="dark-bg mb-3" aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Group as={Col} className="mb-3" controlId="formUserType">
                                    <Form.Label htmlFor="category" className='text-muted'>Select Interested Categories</Form.Label>
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
                                <div className='mt-3 d-grid justify-content-center'>
                                    <Button type="submit" className='srch-btn'>Submit form</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BrandSignup;
