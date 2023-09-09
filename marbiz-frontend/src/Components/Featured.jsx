import React from 'react'
import CardSlider from './CardSlider'

const Featured = () => {
  return (
    <div>
        <div className='d-grid justify-content-start' style={{
            margin: '20px 200px'
        }}>
            <h1 className='fw-bold'>Featured</h1>
            <p>Hire top influencers across all platforms see All</p>
        <CardSlider />
        </div>
    </div>
  )
}

export default Featured