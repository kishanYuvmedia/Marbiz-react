import React from 'react'


const CelebBox = ({ artist_img }) => {
  return (
    <>
      <div className='col-xl-2 col-lg-2 col-md-4 col-2 mb-3 pl-2 pr-2'>
        <div className="celeb-profile">
          <img src={artist_img} alt="artist_3" className="rounded-3 img-fluid" />
        </div>
      </div>
    </>
  )
}

export default CelebBox