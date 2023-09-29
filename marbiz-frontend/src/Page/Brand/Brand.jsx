import React from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";

const Brand = () => {
    return (
        <div>
            <Container className='py-5'>
                <Row className='d-grid align-content-center justify-content-center' style={{
                    height: "60vh",
                }}>
                    <div className="d-flex justify-content-center flex-column align-items-center">
                        <div className="typeWriterText mb-2">The Easy Way to Generate</div>
                        <Typewriter
                            options={{
                                strings: ["Video Ads", "Sponsored photo", "Testimonials", "Product Photos"],
                                autoStart: true,
                                loop: true,
                                wrapperClassName: "typeWriterTextMove",
                            }}

                        />

                        <p className='text-white fs-4 text-capitalize my-3'>Find influencers, run campaigns, and get unique content for your brand in seconds</p>
                    </div>


                    <div className="d-grid justify-content-center">
                        <Link to="/brand-signup">
                            <Button className='srch-btn fs-6 px-5'>
                                Start For Free
                            </Button>
                        </Link>
                    </div>


                </Row>
            </Container>
        </div>
    )
}

export default Brand