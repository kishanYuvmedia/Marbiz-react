import React from 'react'

const PackageCard = ({ title, cost, icon,details }) => {
    return (
        <div className='mb-3'>
            <div className="border border-danger package-card p-4">
                <div className="d-flex text-white justify-content-between">
                    <h3>{title}</h3>
                    <h3>₹ {cost}</h3>
                </div>
                <div>
                    <p className="text-secondary">{details} </p>
                </div>
                <div className="d-flex text-white justify-content-between align-items-center">
                    <div className="">
                        <img src={icon} alt="icon"  style={{
                            height: "32px",
                            width: "32px",
                        }}/>
                    </div>
                    <div>
                        <button className="btn-global px-3 ">Start</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackageCard