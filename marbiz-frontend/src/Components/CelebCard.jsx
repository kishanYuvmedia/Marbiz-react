import React from "react";
import { Button, Card } from "react-bootstrap";
import celeb from "../Images/celeb.png";

const   CelebCard = () => {
  return (
    < >

        <div className="card text-dark card-has-bg click-col" 
          style={{ backgroundImage: `url('https://source.unsplash.com/600x900/?tech,street')`,
            borderRadius: '15px',
          }} >

          <img className="card-img d-none" src={'https://source.unsplash.com/600x900/?tech,street'} alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" />
          <div className="card-img-overlay d-flex flex-column">
            <div className="card-body">
              {/* <small className="card-meta mb-2">Thought Leadership</small> */}
              <h4 className="card-title mt-0 ">
                {/* <a className="text-dark" herf=""> Web Developmet Lorem Ipsum Sit Amet Consectetur dipisi?
                </a> */}
              </h4>
              {/* <small><i className="far fa-clock"></i> October 15, 2020</small> */}
            </div>
            <div className="card-footer">
              <div className="media">
                {/* <img className="mr-3 rounded-circle" src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80" alt="Generic placeholder " style={{ maxWidth: '50px' }} /> */}
                <div className="media-body">
                  <h6 className="my-0 fw-bold text-2xl text-white d-block">Celebrity Name</h6>
                  <small className="text-white">Active Platform</small>
                  <div className="d-flex justify-content-start mt-2">
                  <span class="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">#New</span>
                  <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">#New</span>
                  <span class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">#New</span>
                  
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          </div>

    </>
  );
};

export default CelebCard;
