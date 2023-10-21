import React from 'react'
import NavTabs from '../../Components/NavTabs'
import { Link } from 'react-router-dom'



const CreatorPackages = ({ pagetitle }) => {
    return (
        <>
            {/* Packages section */}
            <div className="container">
                <div className="row">
                    <h1 className="text-center">{pagetitle}</h1>
                    <hr className="hr hr-blurry border border-danger border-2" />


                    <NavTabs />

                </div>
            </div>
        </>
    )
}

export default CreatorPackages