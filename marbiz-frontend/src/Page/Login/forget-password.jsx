import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { loginUser } from "../../services/api/api-service";
import OtpInput from 'react-otp-input';
import { useNavigate, Link } from "react-router-dom";
const ForgetPassword = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    document.title = "Login | MARBIZ ";
    const [validated, setValidated] = useState(false);
    const initialFormData = {
        username: "",
    };
    const [formData, setFormData] = useState(initialFormData);
    const isEmailValid = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const sendOtp = (event) => {
        event.preventDefault();
        if (isEmailValid(formData.username)) {
            setValidated(true);

        }
    }
    const VerifyOtp = () => {
        console.log(otp)
        navigate(`/ChangePassword/${formData.username}`, {
            replace: true,
        });
    }
    return (
        <div>
            <Container className="p-3 p-md-5">
                {!validated &&
                    <Row className="justify-content-center align-items-center">
                        <Col lg="6" md="8">
                            <div className="text-white fs-1 text-center mb-3">Forget Password</div>
                            <div className="inquiry-form rounded-3 p-4 ">
                                <Form noValidate validated={validated} onSubmit={sendOtp}>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label className="text-white">Email address</Form.Label>
                                        <Form.Control
                                            required
                                            className="dark-bg"
                                            type="email"
                                            name="username"
                                            placeholder="Enter Registered Email Address"
                                            value={formData.username}
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
                }
                {validated &&
                    <Row className="justify-content-center align-items-center">
                        <Col lg="6" md="8">
                            <div className="text-white fs-1 text-center mb-3">Verify OTP</div>
                            <div className="inquiry-form rounded-3 p-4 ">

                                <Form.Group className="mb-3 text-center" controlId="formEmail">
                                    <Form.Label className="text-white">Enter OTP</Form.Label>
                                    <OtpInput
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={4}
                                        renderSeparator={<span>-</span>}
                                        renderInput={(props) => <input {...props} style={{ width: '100%' }} />}
                                    />
                                </Form.Group>
                                <div className="d-flex align-items-center justify-content-between">
                                    <button type="submit" onClick={VerifyOtp} className="btn-global px-5 w-100">
                                        Verify Otp
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                }
            </Container>
        </div>
    );
};

export default ForgetPassword;
