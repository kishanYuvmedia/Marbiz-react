import React from 'react'
import CelebCard from './CelebCard'

const Featured = () => {
  return (
    <div className='container'>

      <div className='d-grid justify-content-Start mt-5 '>
        <h1 className='fw-bold'>Featured</h1>
        <p>Hire top influencer across all platforms see All</p>
      </div>
    
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
  )
}

export default Featured