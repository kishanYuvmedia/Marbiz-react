import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { loginUser } from "../../services/api/api-service";
import { useNavigate, Link } from "react-router-dom";

import { BsEye, BsEyeSlash } from "react-icons/bs";

const GlobalLogin = () => {
  const navigate = useNavigate();
  document.title = "Login | MARBIZ ";
  const [validated, setValidated] = useState(false);
  const initialFormData = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(<BsEyeSlash />);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Validation passed, check if the username is a valid email
      if (isEmailValid(formData.username)) {
        console.log(formData);
        loginUser(formData.username, formData.password)
          .then((result) => {
            console.log(result);
            Swal.fire({
              title: "Wellcome Marbiz",
              width: 600,
              padding: "3em",
              color: "#fff",
              border: "1px solid red",
              background: "#dc4c64",
            });
            navigate(`/home`, {
              replace: true,
            });
            window.location.reload(false);
          })
          .catch((e) => {
            Swal.fire({
              title: "User Not Valid",
              width: 600,
              padding: "3em",
              color: "#fff",
              border: "1px solid red",
              background: "#6824b4",
            });
          });
      } else {
        Swal.fire({
          title: "User Not Valid",
          width: 600,
          padding: "3em",
          color: "#fff",
          border: "1px solid #6824b4",
          background: "#6824b4",
        });
      }
    }

    setValidated(true);
  };
  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(<BsEye />);
      setType('text')
    } else {
      setIcon(<BsEyeSlash />)
      setType('password')
    }
  }


  return (
    <div>
      <Container className="p-3 p-md-5">
        <Row className="justify-content-center align-items-center">
          <Col lg="6" md="8">
            <div className="text-white fs-1 text-center mb-3">Welcome Back</div>
            <div className="inquiry-form rounded-3 p-4 ">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="text-white">Email address</Form.Label>
                  <Form.Control
                    required
                    className="dark-bg"
                    type="email"
                    name="username"
                    placeholder="Enter Email"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 position-relative" controlId="formPassword">
                  <Form.Label className="text-white">Password</Form.Label>
                  <Form.Control
                    required
                    className="dark-bg"
                    type={type}
                    name="password"
                    minLength={6}
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <span className='text-white fs-4' onClick={handleToggle} style={{
                    position: "absolute",
                    top: "40px",
                    right: "20px",
                  }}>
                    {icon}
                  </span>
                </Form.Group>
                <div className="d-flex align-items-center justify-content-between">
                  <button type="submit" className="btn-global px-5 w-100">
                    Login
                  </button>
                </div>
                <div className="mt-3 mb-2">
                  <Link to="/forgetpassword">
                    <div className="text-secondary text-center">
                      Forgot Password?
                    </div>
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GlobalLogin;
