import React from 'react'
import CelebCard from './CelebCard'

const MainListing = () => {
  return (
    <div className='container'>

      <div className='d-grid justify-content-Start mt-5 ' >
        <h3 className='fw-bold section-heading display-6 text-uppercase'>Celebrities & Influencer</h3>
        <p className='text-secondary'>Hire top Celebrities & Influencer all platforms see All</p>
      </div>
      <hr class="hr hr-blurry" />
      <div className="row d-flex">
        <div className="col-lg-3 col-md-12 col-sm-12 mb-4 ">
          <CelebCard />
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 mb-4 ">
          <CelebCard />
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 mb-4 ">
          <CelebCard />
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 mb-4 ">
          <CelebCard />
        </div>
      </div>

    </div>
  )
}

const ModalListing = () => {
  return (
    <div className='container'>
      <div className='d-grid justify-content-Start mt-5 ' >
        <h3 className='fw-bold section-heading display-6 text-uppercase'>Spokesperson & Models</h3>
        <p className='text-secondary'>Hire top Spokesperson & Models all platforms see All</p>
        <hr class="hr hr-blurry" />
        <div className="row d-flex ">
          <div className="col-lg-3 col-md-12 col-sm-12 mb-4 ">
            <CelebCard />
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 mb-4 ">
            <CelebCard />
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 mb-4 ">
            <CelebCard />
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 mb-4 ">
            <CelebCard />
          </div>

        </div>
      </div>


    </div>
  )
}

export { ModalListing, MainListing }