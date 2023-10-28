import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { loginUser } from "../../services/api/api-service";
import OtpInput from 'react-otp-input';
import { useNavigate, Link } from "react-router-dom";
const ChangePassword = () => {
    document.title = "Login | MARBIZ ";
    const [validated, setValidated] = useState(false);
    const initialFormData = {
        password: "",
        confirmPassword: "",
    };
    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const ChangePassword = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const result = chechPasswordValication(formData.password, formData.confirmPassword)
        if (result) {
            setValidated(true);
            Swal.fire({
                title: "Password Chagne Successfully",
                width: 600,
                padding: "3em",
                color: "#fff",
                border: "1px solid red",
                background: "green",
            });
        }
    }
    function chechPasswordValication(password, newpassword) {
        if (password != newpassword) {
            Swal.fire({
                title: "Password Not Match",
                width: 600,
                padding: "3em",
                color: "#fff",
                border: "1px solid red",
                background: "red",
            });
            return false;
        }
        // Check if the password is a string
        if (typeof password !== 'string') {
            Swal.fire({
                title: "password Must be string and number combination",
                width: 600,
                padding: "3em",
                color: "#fff",
                border: "1px solid red",
                background: "red",
            });
            return false;
        }
        if (password.length<8) {
            Swal.fire({
                title: "Password must be 8 and grater then string",
                width: 600,
                padding: "3em",
                color: "#fff",
                border: "1px solid red",
                background: "red",
            });
            return false;
        }
        if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
            Swal.fire({
                title: "password Must be string and number combination",
                width: 600,
                padding: "3em",
                color: "#fff",
                border: "1px solid red",
                background: "red",
            });
            return false;
          }
        return true;
    }
    return (
        <div>
            <Container className="p-3 p-md-5">
                <Row className="justify-content-center align-items-center">
                    <Col lg="6" md="8">
                        <div className="text-white fs-1 text-center mb-3">Forget Password</div>
                        <div className="inquiry-form rounded-3 p-4 ">
                            <Form noValidate validated={validated} onSubmit={ChangePassword}>
                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label className="text-white">New Password</Form.Label>
                                    <Form.Control
                                        required
                                        className="dark-bg"
                                        type="text"
                                        name="password"
                                        placeholder="Enter New Password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formConfimPassword">
                                    <Form.Label className="text-white">Confirm Password</Form.Label>
                                    <Form.Control
                                        required
                                        className="dark-bg"
                                        type="text"
                                        name="confirmPassword"
                                        placeholder="Enter Confirm Password"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                                <div className="d-flex align-items-center justify-content-between">
                                    <button type="submit" className="btn-global px-5 w-100">
                                        Send OTP
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ChangePassword;
