import React from 'react'

const HeroBgGradient = () => {
    return (
        <div>
            {/* BG Gradient */}
            <div className="position-absolute start-0 top-0 desktop-view" style={{
                width: "500px",
                height: "800px",
            }}>
                <div
                    className=" "
                    style={{
                        background: "radial-gradient(circle, rgb(252 110 144 / 32%) 0%, rgba(254, 96, 173, 0) 51%, rgba(0, 0, 0, 0) 100%)",

                        width: "100%",
                        height: "100%",
                        top: "0%",
                        // opacity: "0.7",
                    }}
                ></div>
            </div>
            <div className="position-absolute top-50 end-0 desktop-view" style={{
                width: "500px",
                height: "500px",
            }}>
                <div
                    className=" "
                    style={{
                        background: "radial-gradient(circle, rgb(252 110 144 / 32%) 0%, rgba(254, 96, 173, 0) 51%, rgba(0, 0, 0, 0) 100%)",

                        width: "100%",
                        height: "100%",
                        top: "0%",
                        // opacity: "0.7",
                    }}
                ></div>
            </div>
        </div>
    )
}

export default HeroBgGradient