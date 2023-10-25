import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsStopwatch } from "react-icons/bs";
import { PiShootingStar, PiWallet } from "react-icons/pi";

// images
import artist_1 from "../Images/artist_1.webp";
import artist_2 from "../Images/artist_2.webp";
import artist_3 from "../Images/artist_3.webp";
import artist_4 from "../Images/artist_4.webp";

// components
import CelebBox from './Celebrity/CelebBox';
import CelebritySlider from './Celebrity/CelebritySlider';
import CelebFilterGallery from './Celebrity/CelebFilterGallery';
import CelebHoverSlider from './Celebrity/CelebHoverSlider';


const Celebrity = () => {

  return (
    <div className='new-brand-box' >

      {/* Search filters */}
      <section className='brand-banner position-relative' >

        <Container className='py-5'>
          <Row className=''>
            <div className="col-md-6 col-12 d-grid align-items-center">
              <div className='left-content-sec'>
                <h3 className='text-center text-md-start text-capitalize'>Are you ready to get your brand noticed?</h3>
                <h1 className='text-center text-md-start text-capitalize'>Work with a celebrity to grow your brand!</h1>
              </div>
              <div className="icon-box overflow-hidden my-3">
                <div className="d-flex flex-wrap">
                  <p>
                    <BsStopwatch className='me-2' />
                    Fastest turnaround time
                  </p>
                  <p className='ms-0 ms-md-3'>
                    <PiWallet className='me-2 mx-md-2' />
                    Lowest cost
                  </p>
                </div>
                <p>
                  <PiShootingStar className='me-2' />
                  The wildest range of celebrity
                </p>
              </div>
              <div className='text-center text-md-start'>
                <Link>
                  <button className='btn-global p-3'>Choose Celebrity</button>
                </Link>
              </div>

            </div>

            <div className="col-md-6 col-12">
              <div className="">

                <CelebritySlider />

              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section id="our-work" className='youtube_embed_videos_wrap our-latest-work'>
        <div className="container">
          <h1 className='text-white text-center'>Out Latest Work</h1>
          <CelebFilterGallery />
        </div>
      </section>

      <section className='celeb-list-section'>
        <div className="container pb-5 position-relative">
          <div className="row">
            <h2 className='text-danger text-center'>
              Choose From The Widest Range Of Celebrities
            </h2>
            <p className='text-secondary text-center'>With three easy steps</p>
            <div className='steps-box d-flex flex-wrap justify-content-center'>
              <div className='d-flex  px-2 align-items-center'>
                <h3>1</h3>
                <p>Fill in your details</p>
              </div>
              <div className='d-flex px-2 align-items-center'>
                <h3>2</h3>
                <p>Select Celebrity</p>
              </div>
              <div className='d-flex px-2 align-items-center'>
                <h3>3</h3>
                <p>Book</p>
              </div>
            </div>
          </div>

          <div className="row celeb-profile-list my-4">
            <CelebBox artist_img={artist_3} />
            <CelebBox artist_img={artist_1} />
            <CelebBox artist_img={artist_2} />
            <CelebBox artist_img={artist_4} />
            <CelebBox artist_img={artist_3} />
            <CelebBox artist_img={artist_1} />
            <CelebBox artist_img={artist_2} />
            <CelebBox artist_img={artist_4} />
            <CelebBox artist_img={artist_3} />
            <CelebBox artist_img={artist_1} />
            <CelebBox artist_img={artist_2} />
            <CelebBox artist_img={artist_4} />
            <CelebBox artist_img={artist_3} />
            <CelebBox artist_img={artist_1} />
            <CelebBox artist_img={artist_2} />
            <CelebBox artist_img={artist_4} />
            <CelebBox artist_img={artist_1} />
            <CelebBox artist_img={artist_2} />

          </div>


          <div className='unlock-door-popup d-grid align-items-center' id="unlock-door-popup">
            <div className='unlock-door-content'>
              <img src="https://ik.imagekit.io/j83rchiauw/brand-enquiry/home-lock.png?tr=q-80" alt="home-lock" />
              <p className="celeb-business-note">
                Your One-stop place for <br />  Celebrity Engagement
              </p>
              <p className="celeb-updates">
                <span>1000+</span>Brands
                <span>• 850 mn+</span> Reach
              </p>
              <Link>
                <button className="btn-global px-3">Explore Now</button>
              </Link>
              <p className="brands-mail">For users outside India, email us at <a href="mailto:support@marbiz.in">support@marbiz.in</a></p>
            </div>
          </div>
        </div>
      </section>

      <section className='hover-vd container py-5' id="hover-video-section">
        <h1 className='text-white text-center'>Celebrity Brand Shoutouts</h1>

        <CelebHoverSlider />
      </section>

      <div className="container">
        <div className="row py-5">
          <div className="col-md-6">
            <video className="video video-sec rounded-3" id="myvideo" width="100%" poster="https://ik.imagekit.io/j83rchiauw/brand-enquiry/video_b2b_thmbnail.png?tr=q-80" loop="">
            </video>
          </div>
          <div className="col-12 col-md-6">
            <div className='mordern-content position-relative'>
              <h2 className='morder-heading'>Perfect key to successful brand collaboration</h2>
              <p className='mordern-para'>Put your brand under the spotlight</p>

              <div>
                <Link>
                  <button className='btn-global px-3'>Start Now!</button>
                </Link>
              </div>
              <div className="modern-img">
                <img src="https://ik.imagekit.io/j83rchiauw/brand-enquiry/person-6.png?tr=q-80" alt="modern-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-md-6">
            <div className="get-touch-img">
              <img src="https://ik.imagekit.io/j83rchiauw/brand-enquiry/getintouch-web1.png?tr=q-80" alt="modern-img" />
            </div>
          </div>
          <div className="col-12 col-md-6 d-grid align-items-center">
            <div className='mordern-content position-relative '>
              <h2 className='morder-heading'>Didn't find who you're looking for?</h2>
              <p className='mordern-para'>Get in touch with us and we will share the best celebrities to help promote your brand.</p>

              <div>
                <Link>
                  <button className='btn-global px-3'>Start Now!</button>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Celebrity
