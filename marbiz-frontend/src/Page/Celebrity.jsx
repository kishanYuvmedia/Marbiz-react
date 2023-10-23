import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsStopwatch } from "react-icons/bs";
import { PiShootingStar, PiWallet } from "react-icons/pi";
import artist_1 from "../Images/artist_1.webp";
import artist_2 from "../Images/artist_2.webp";
import artist_3 from "../Images/artist_3.webp";
import artist_4 from "../Images/artist_4.webp";
import CelebBox from '../Components/CelebBox';

const Celebrity = () => {


  return (
    <div className='new-brand-box'>

      {/* Search filters */}
      <section className='brand-banner position-relative'>

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
              <div className="text-center p-3">
                <img
                  src={artist_3}
                  alt="artist_3"
                  className="rounded-3 img-fluid"
                />
                {/* <div className="new-slider owl-carousel owl-loaded owl-drag">
                  <div className="owl-stage-outer owl-height" style={{ height: "419px" }}><div className="owl-stage" style={{ transition: "all 0.25s ease 0s", width: "2852px", transform: "translate3d(-1247px, 0px, 0px)" }}>
                    <div className="owl-item cloned" style={{"width: 316.5px; margin-right: 40px;"}}><div className="new-img owl-slide-img"> <video className="banner-video" id="video-3" width="100%" loop="" muted="" autoplay="autoplay" playsinline="" poster="https://ik.imagekit.io/j83rchiauw/brand-enquiry/shivaji_satam_b2b.png?tr=q-80" style={{objectFit: "fill"}}>
                      <source className="video-sec" src="https://cdn.tring.co.in/img/shivaji_satam_b2b.mp4" type="video/mp4" />
                    </video></div></div><div className="owl-item cloned" style={{ width: "316.5px", marginRight: "40px" }}><div className="new-img owl-slide-img"> <video className="banner-video" id="video-4" width="100%" loop="" muted="" autoplay="autoplay" playsinline="" poster="https://ik.imagekit.io/j83rchiauw/brand-enquiry/Sopphie_Chowdhary.jpg?tr=q-80" style="object-fit: fill">
                      <source className="video-sec" src="https://cdn.tring.co.in/img/sophie_choudhary_b2b.mp4" type="video/mp4" />
                    </video></div></div><div className="owl-item" style="width: 316.5px; margin-right: 40px;"><div className="new-img owl-slide-img"> <video className="banner-video" id="video-72" width="100%" loop="" muted="" autoplay="autoplay" playsinline="" poster="https://ik.imagekit.io/j83rchiauw/brand-enquiry/daisy_shah_b2b.png?tr=q-80" style="object-fit: fill">
                      <source className="video-sec" src="https://cdn.tring.co.in/img/daisy_shah_b2b.mp4" type="video/mp4" />
                    </video></div></div><div className="owl-item" style="width: 316.5px; margin-right: 40px;"><div className="new-img owl-slide-img"> <video className="banner-video" id="video-73" width="100%" loop="" muted="" autoplay="autoplay" playsinline="" poster="https://ik.imagekit.io/j83rchiauw/brand-enquiry/satyayani_b2b.png?tr=q-80" style="object-fit: fill">
                      <source className="video-sec" src="https://cdn.tring.co.in/img/shayantani_b2b.mp4" type="video/mp4" />
                    </video></div></div><div className="owl-item active center" style="width: 316.5px; margin-right: 40px;"><div className="new-img owl-slide-img"> <video className="banner-video" id="video-74" width="100%" loop="" muted="" autoplay="autoplay" playsinline="" poster="https://ik.imagekit.io/j83rchiauw/brand-enquiry/shivaji_satam_b2b.png?tr=q-80" style="object-fit: fill">
                      <source className="video-sec" src="https://cdn.tring.co.in/img/shivaji_satam_b2b.mp4" type="video/mp4" />
                    </video></div></div><div className="owl-item active" style="width: 316.5px; margin-right: 40px;"><div className="new-img owl-slide-img"> <video className="banner-video" id="video-71" width="100%" loop="" muted="" autoplay="autoplay" playsinline="" poster="https://ik.imagekit.io/j83rchiauw/brand-enquiry/Sopphie_Chowdhary.jpg?tr=q-80" style="object-fit: fill">
                      <source className="video-sec" src="https://cdn.tring.co.in/img/sophie_choudhary_b2b.mp4" type="video/mp4" />
                    </video></div></div><div className="owl-item cloned" style="width: 316.5px; margin-right: 40px;"><div className="new-img owl-slide-img"> <video className="banner-video" id="video-1" width="100%" loop="" muted="" autoplay="autoplay" playsinline="" poster="https://ik.imagekit.io/j83rchiauw/brand-enquiry/daisy_shah_b2b.png?tr=q-80" style="object-fit: fill">
                      <source className="video-sec" src="https://cdn.tring.co.in/img/daisy_shah_b2b.mp4" type="video/mp4" />
                    </video></div></div><div className="owl-item cloned" style="width: 316.5px; margin-right: 40px;"><div className="new-img owl-slide-img"> <video className="banner-video" id="video-2" width="100%" loop="" muted="" autoplay="autoplay" playsinline="" poster="https://ik.imagekit.io/j83rchiauw/brand-enquiry/satyayani_b2b.png?tr=q-80" style="object-fit: fill">
                      <source className="video-sec" src="https://cdn.tring.co.in/img/shayantani_b2b.mp4" type="video/mp4" />
                    </video></div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled"></div>
                    </div>*/}
              </div>
            </div>
          </Row>
        </Container>
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
