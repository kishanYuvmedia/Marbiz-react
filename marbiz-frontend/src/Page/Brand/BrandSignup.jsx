import React from 'react'
import { Button, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'




const BrandSignup = () => {
    return (
        <div>

            <Container className='py-5' style={{
                height: "60vh",
            }}>
                <Row className='d-grid align-content-center justify-content-center' >
                    <div className='text-center mb-3 text-white fw-bold'>

                        <h2>Create Your Account</h2>
                    </div>
                    <div className='bg-dark p-3 rounded'>

                        <Form className='m-3'>

                            {/* full name */}
                            <Form.Group className=" mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control className="dark-bg" type="email" placeholder="name@example.com" />
                            </Form.Group>

                            {/* Brand name */}

                            <InputGroup className="mb-3">
                                <InputGroup.Text className="dark-bg" id="basic-addon1">@</InputGroup.Text>
                                <Form.Control
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    className="dark-bg"
                                />
                            </InputGroup>

                            {/* Email name */}
                            <InputGroup className="mb-3">

                                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"> */}
                                {/* <Form.Label>Email address</Form.Label> */}
                                <InputGroup.Text className="dark-bg" id="basic-email">Email</InputGroup.Text>

                                <Form.Control type="email" className="dark-bg" placeholder="name@example.com" />
                                {/* </Form.Group> */}
                            </InputGroup>

                            {/* Password */}
                            {/* <Form.Label className="dark-bg" htmlFor="inputPassword5">Password</Form.Label> */}
                            <InputGroup className="mb-3">

                                <InputGroup.Text className="dark-bg" id="basic-password">Password</InputGroup.Text>

                                <Form.Control
                                    type="password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    className="dark-bg"
                                />
                            </InputGroup>

                            {/* Selct dropdown */}
                            <Form.Select className="dark-bg" aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>

                            <div className='mt-3 d-grid justify-content-center'>

                                <Button type="submit" className='srch-btn'>Submit form</Button>
                            </div>
                        </Form>
                    </div>

                </Row>
            </Container>
        </div>
    )
}

export default BrandSignup