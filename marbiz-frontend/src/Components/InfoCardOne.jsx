import React from 'react'

const InfoCardOne = ({ title, infoboxHeadingOne, infoboxSubtitleOne, image, infoboxHeadingThree, infoboxHeadingTwo, infoboxSubtitleThree, infoboxSubtitleTwo }) => {
    return (
        <div>
            <div className="container pb-md-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="text-white infoCardHeading" style={{ fontSize: "36px" }}>
                            {title}
                        </div>
                        <div className="mt-3">
                            <div className="p-3 rounded-3 info-box">
                                <h2 className="info-heading h3">{infoboxHeadingOne}</h2>
                                <p className="info-paragraph lead">
                                    {infoboxSubtitleOne}
                                </p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="p-3 rounded-3 info-box">
                                <h2 className="info-heading h3">{infoboxHeadingTwo}</h2>
                                <p className="info-paragraph lead">
                                    {infoboxSubtitleTwo}
                                </p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="p-3 rounded-3 info-box">
                                <h2 className="info-heading h3">{infoboxHeadingThree}</h2>
                                <p className="info-paragraph lead">
                                    {infoboxSubtitleThree}
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="text-center p-3">
                            <img src={image} alt="artist_3" className="rounded-3 img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InfoCardOne