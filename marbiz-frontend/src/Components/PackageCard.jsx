import React from 'react'


const PackageCard = ({title, cost, icon}) => {
    return (
        <div>
            <div className="border border-danger rounded-3 p-4">
                <div className="d-flex text-white justify-content-between">
                    <h3>{title}</h3>
                    <h3>$ {cost}</h3>
                </div>
                <div>
                    <p className="text-secondary"> Top creators have completed multiple orders and have a high rating from brands Top creators have completed multiple orders and have a high rating fromTop creators have completed multiple orders and have a high rating from</p>
                </div>
                <div className="d-flex text-white justify-content-between">
                    <div className="fs-3">
                        {icon}
                    </div>
                    <button className="btn-hover color-4">Start</button>
                </div>
            </div>
        </div>
    )
}

export default PackageCard