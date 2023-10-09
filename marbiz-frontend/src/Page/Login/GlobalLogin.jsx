import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

document.title = "MARBIZ | Login";

const GlobalLogin = () => {
  return (
    <div>
      <Container className="p-3 p-md-5">
        <Row className='justify-content-center align-items-center'>
          <Col lg="6" md="4" className='text-center'>
            <div style={{ maxWidth: '450px', margin: '0 auto' }}>
              <dotlottie-player
                src="https://lottie.host/8c9bc03b-08c0-4646-85be-d1423d4e5a75/zp5jhRVTkZ.json"
                background="transparent"
                speed="1"
                style={{ width: '100%', height: 'auto' }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
          </Col>
          <Col lg="6" md="8">
            <div className='text-white fs-1 text-center mb-3'>Welcome Back</div>
            <div className='inquiry-form rounded-3 p-4 '>
              <Form className=''>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className='text-white'>Email address</Form.Label>
                  <Form.Control className='dark-bg' type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className='text-white'>Password</Form.Label>
                  <Form.Control className='dark-bg' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check className='text-muted' type="checkbox" label="Check me out" />
                </Form.Group>

                <div className='d-flex align-items-center justify-content-between'>

                  <Button variant="primary" type="submit" className='srch-btn px-5'>
                    Login
                  </Button>
                  <div className=''>
                    <Link to="/#">
                      <div className='text-muted'>Forgot Password?</div>
                    </Link>
                  </div>
                </div>
              </Form>

            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default GlobalLogin;
