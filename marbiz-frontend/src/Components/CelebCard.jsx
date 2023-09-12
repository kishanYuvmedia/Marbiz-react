import React from "react";
const CelebCard = () => {
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
          <div className="card-footer p-0">
            <div className="media">
              {/* <img className="mr-3 rounded-circle" src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80" alt="Generic placeholder " style={{ maxWidth: '50px' }} /> */}
              <div className="media-body">
                <h3 className="my-0 fw-bold text-2xl text-white d-block">
                  Celebrity Name
                </h3>
                <small className="text-white">Active Platform</small>
                <div className="d-flex justify-content-start mt-2">
                  <span className="badge badge-danger me-2">
                    #New
                  </span>
                  <span className="badge badge-success me-2">
                    #New
                  </span>
                  <span className="badge badge-warning me-2">
                    #New
                  </span>
                  
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
