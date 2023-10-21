import React from 'react'
import PackagesTabs from '../../Components/PackagesTabs'


const CreatorPackages = ({ pagetitle }) => {
    return (
        <>
            {/* Packages section */}
            <div className="container-fluid">
                <div className="row">
                    <h1 className="text-center">{pagetitle}</h1>
                    <hr className="hr hr-blurry border border-danger border-2" />


                    <PackagesTabs />

                </div>
            </div>
        </>
    )
}

export default CreatorPackages