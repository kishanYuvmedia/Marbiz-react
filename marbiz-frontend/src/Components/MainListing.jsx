import React from 'react'
import CelebCard from './CelebCard'

const MainListing = () => {
  return (
    <div>
      <div className='d-grid jjustify-content-Start mt-5 mx-3' >
        <h1 className='fw-bold'>Celebrities & Influencer</h1>
        <p>Hire top Celebrities & Influencer all platforms see All</p>

        <div className="row d-flex mx-3">
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

const ModalListing = () => {
  return (
    <div>
      <div className='d-grid justify-content-Start mt-5 mx-3' >
        <h1 className='fw-bold'>Spokesperson & Models</h1>
        <p>Hire top Spokesperson & Models all platforms see All</p>

        <div className="row d-flex mx-3">
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