import React from 'react'
import logo from "../Images/marbiz-logo.png";

const Footer = () => {
  return (
    <div>
        <div className="row bg-black p-5 mt-5" style={{
            borderRadius: "50px 50px 0 0"
        }}>
            <div className="col">
                <img src={logo} alt="" />
                <p className='text-white mt-3'>
                Influencer marketing can be an effective strategy 
                for many brands, but it's not without its challenges
                and potential pitfalls. Here are some common shortcomings 
                or challenges associated with influencer marketing:
                </p>
            </div>
            <div className="col text-white">
                <h3>category</h3>
                <ul>
                    <li>Celebrities & Influencers</li>
                    <li>Celebrities & Influencers</li>
                    <li>Celebrities & Influencers</li>
                    <li>Celebrities & Influencers</li>
                </ul>
            </div>
            <div className="col text-white">
                <h3>Discover</h3>
                <ul>
                    <li>Celebrities & Influencers</li>
                    <li>Celebrities & Influencers</li>
                    <li>Celebrities & Influencers</li>
                    <li>Celebrities & Influencers</li>
                </ul>
            </div>
            <div className="col text-white">
                <h3>Discover</h3>
                <ul>
                    <li>Celebrities & Influencers</li>
                    <li>Celebrities & Influencers</li>
                    <li>Celebrities & Influencers</li>
                    <li>Celebrities & Influencers</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer