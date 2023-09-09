import React from 'react'
import CelebCard from './CelebCard'

const Featured = () => {
  return (
    <div className="container">
      <div className="grid justify-start mt-5">
        <h1 className="font-bold">Featured</h1>
        <p>Hire top influencers across all platforms - See All</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="mb-4">
          <CelebCard />
        </div>
        <div className="mb-4">
          <CelebCard />
        </div>
        <div className="mb-4">
          <CelebCard />
        </div>
        <div className="mb-4">
          <CelebCard />
        </div>
      </div>
    </div>

  )
}

export default Featured