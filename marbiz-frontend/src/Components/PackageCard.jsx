import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PackageCard = ({ title, cost, icon, details, regName, packageId }) => {

    const navigate = useNavigate();

    const handleEditClick = () => {
        if (packageId) {
            navigate(`/creatorDashboard/EditPackage?packageId=${packageId}`);
        }
    };

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
                        <img src={icon} alt="icon" style={{
                            height: "32px",
                            width: "32px",
                        }} />
                    </div>

                    {/* inquiry form */}
                    <div>
                        {regName !== "self" &&
                            <Link to={`/inquiryform/${regName}`} >
                                <button className="btn-global px-3 ">
                                    Start
                                </button>
                            </Link>
                        }
                    </div>

                    {/* edit packages */}
                    {regName === "self" &&
                        <div>
                            {/* <Link to={`/creatorDashboard/EditPackage/`} > */}
                                <button className="btn-global fs-6 px-3 "
                                onClick={handleEditClick}
                                >
                                    Edit
                                </button>
                            {/* </Link> */}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default PackageCard