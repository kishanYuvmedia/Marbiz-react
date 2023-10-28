import React, { useEffect, useState } from 'react'
import Portfolio from '../../Components/Portfolio'
import { Link } from 'react-router-dom'
import { getInfluencersProfilebyId } from '../../services/api/api-service'
const PortfolioList = ({ pagetitle }) => {
    const [userId,setUserId]=useState(null)
    useEffect(()=>{
        if (localStorage.getItem("authUser")) {
            const obj = JSON.parse(localStorage.getItem("authUser"));
            getInfluencersProfilebyId(obj.id)
                .then((result) => {
                    setUserId(result.id)
                })
                .catch((err) => {
                    console.error("Error fetching profile data:", err);
                });
        }
    },[])
    return (
        <>
            {/* Packages section */}
            <div className="container-fluid">
                <div className="row">
                    <div className='d-inline-flex justify-content-between my-2'>
                        <h1 className="text-center">{pagetitle}</h1>
                        <Link to="/creatorDashboard/PortfolioList">
                            <button className="btn-global px-3" type="button">Add Portfolio</button>
                        </Link>
                    </div>
                    <hr className="hr hr-blurry border border-danger border-2" />
                    <Portfolio userId={userId} />
                </div>
            </div>
        </>
    )
}
export default PortfolioList