import React, { useEffect } from "react";
import CelebCard from "../Components/CelebCard";
import Gallery from "../Components/Gallery";

const CelebProfile = () => {

    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <nav aria-label="breadcrumb" className="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Library</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav>
                    <div className="col-4 ">
                        <a href={"https://unsplash.it/1200/768.jpg?image=251"} data-toggle="lightbox" data-gallery="example-gallery" >
                            <img src={"https://unsplash.it/600.jpg?image=251"} className="img-fluid celeb-img" />
                        </a>
                    </div>
                    <div className="col d-flex flex-column justify-content-center">

                        <h1>Sanam</h1>
                        <h3>(Live Band)</h3>
                        <h6> Mumbai, Maharashtra </h6>
                        <button className="button-87 col-5" role="button">See Price and Book</button>

                        <p>
                            Sanam became an instant hit among the Indian teenagers with
                            their 'Hawa Hawa' and 'Behka'!
                        </p>

                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        {/* <!-- Tabs navs --> */}
                        <ul className="nav nav-tabs my-5 mb-3" id="ex-with-icons" role="tablist">
                            <li className="nav-item" role="presentation" >
                                <a className="nav-link  active" id="ex-with-icons-tab-1" data-mdb-toggle="tab" href="#ex-with-icons-tabs-1" role="tab"
                                    aria-controls="ex-with-icons-tabs-1" aria-selected="true"><i className="fa-regular fa-images fa-fw me-2 "></i>Gallery</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="ex-with-icons-tab-2" data-mdb-toggle="tab" href="#ex-with-icons-tabs-2" role="tab"
                                    aria-controls="ex-with-icons-tabs-2" aria-selected="false"><i className="fa-regular fa-circle-play fa-fw me-2"></i>Video</a>
                            </li>

                        </ul>
                        {/* <!-- Tabs navs --> */}

                        {/* <!-- Tabs content --> */}
                        <div className="tab-content" id="ex-with-icons-content">
                            <div className="tab-pane fade show active" id="ex-with-icons-tabs-1" role="tabpanel" aria-labelledby="ex-with-icons-tab-1">
                                <div className="container gallery-container">

                                    <h1>Bootstrap 3 Gallery</h1>

                                    <p className="page-description text-center">Fluid Layout With Overlay Effect</p>

                                    <div className="tz-gallery">

                                        <div className="row">

                                            <div className="col-sm-12 col-md-4">
                                                <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg">
                                                    <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg" alt="Bridge" />
                                                </a>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg">
                                                    <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg" alt="Park" />
                                                </a>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg">
                                                    <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg" alt="Tunnel" />
                                                </a>
                                            </div>
                                            <div className="col-sm-12 col-md-8">
                                                <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg">
                                                    <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg" alt="Traffic" />
                                                </a>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg">
                                                    <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg" alt="Coast" />
                                                </a>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <a className="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg">
                                                    <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg" alt="Rails" />
                                                </a>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="tab-pane fade" id="ex-with-icons-tabs-2" role="tabpanel" aria-labelledby="ex-with-icons-tab-2">
                                Tab 2 content
                            </div>

                        </div>
                        {/* <!-- Tabs content --> */}
                    </div>

                </div>
            </div>

            <div className="container my-5">

                <div className="row">
                    <h1 className="">Gallery</h1>
                    <div className="row d-flex"></div>
                    <div className="col-lg-3 col-md-12 col-sm-12 mb-4 mx-3">
                        <Gallery />
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 mb-4 mx-3">
                        <Gallery />
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 mb-4 mx-3">
                        <Gallery />
                    </div>

                </div>
                <button className="button-87 col-5" role="button">See Price and Book</button>

            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <div className="accordion" id="accordionExampleY">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOneY">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#collapseOneY"
                                        aria-expanded="true"
                                        aria-controls="collapseOneY"
                                    >
                                        <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div
                                    id="collapseOneY"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOneY"
                                    data-mdb-parent="#accordionExampleY"
                                >
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It
                                        is hidden by default, until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any
                                        of this with custom CSS or overriding our default variables.
                                        It's also worth noting that just about any HTML can go
                                        within the <code>.accordion-body</code>, though the
                                        transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwoY">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#collapseTwoY"
                                        aria-expanded="false"
                                        aria-controls="collapseTwoY"
                                    >
                                        <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwoY"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwoY"
                                    data-mdb-parent="#accordionExampleY"
                                >
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong>{" "}
                                        It is hidden by default, until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any
                                        of this with custom CSS or overriding our default variables.
                                        It's also worth noting that just about any HTML can go
                                        within the <code>.accordion-body</code>, though the
                                        transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThreeY">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-mdb-toggle="collapse"
                                        data-mdb-target="#collapseThreeY"
                                        aria-expanded="false"
                                        aria-controls="collapseThreeY"
                                    >
                                        <i className="fas fa-question-circle fa-sm me-2 opacity-70"></i>
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div
                                    id="collapseThreeY"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThreeY"
                                    data-mdb-parent="#accordionExampleY"
                                >
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It
                                        is hidden by default, until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the
                                        showing and hiding via CSS transitions. You can modify any
                                        of this with custom CSS or overriding our default variables.
                                        It's also worth noting that just about any HTML can go
                                        within the <code>.accordion-body</code>, though the
                                        transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    <h1>Similar Artists you may like</h1>
                    <div className="col-lg-3 col-md-12 col-sm-12 mb-4">
                        <CelebCard />
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 mb-4">
                        <CelebCard />
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 mb-4">
                        <CelebCard />
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 mb-4">
                        <CelebCard />
                    </div>
                </div>
            </div>
        </>
    );
}
export default CelebProfile;


