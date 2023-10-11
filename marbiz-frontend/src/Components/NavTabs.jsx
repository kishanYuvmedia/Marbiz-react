import React from "react";
import { VideoGallery } from "./Gallery";
import LightBoxGallery from "./LightBoxGallery";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import PackageCard from "./PackageCard";



const NavTabs = (props) => {
    console.log("final", props.images);
    return (
        <div>
            {/* <!-- Tabs navs --> */}
            <ul className="nav nav-tabs mb-3" id="ex-with-icons" role="tablist">
                <li
                    className="nav-item"
                    role="presentation"
                >
                    <a
                        className="nav-link tab-btn text-white active"
                        id="all-package"
                        data-mdb-toggle="tab"
                        href="#all-packages"
                        role="tab"
                        aria-controls="all-packages"
                        aria-selected="true"

                    >
                        All
                    </a>
                </li>
                <li
                    className="nav-item mx-3"
                    role="presentation"
                    style={{
                        backgroundColor: "matteblack", // Change to your dark background color
                        borderColor: "purple", // Purple border
                        color: "orange", // Orange text color
                        borderRadius: "5px",
                    }}
                >
                    <a
                        className="nav-link fw-bold"
                        id="instagram-package"
                        data-mdb-toggle="tab"
                        href="#instagram-packages"
                        role="tab"
                        aria-controls="instagram-packages"
                        aria-selected="false"
                        style={{ color: "black", backgroundColor: "#fff" }}
                    >
                        <i className="fas fa-chart-line fa-fw me-2"></i>Intagram
                    </a>
                </li>
                <li
                    className="nav-item mx-3"
                    role="presentation"
                    style={{
                        backgroundColor: "matteblack", // Change to your dark background color
                        borderColor: "purple", // Purple border
                        color: "orange", // Orange text color
                        borderRadius: "5px",
                    }}
                >
                    <a
                        className="nav-link fw-bold"
                        id="youtube-package"
                        data-mdb-toggle="tab"
                        href="#youtube-packages"
                        role="tab"
                        aria-controls="youtube-packages"
                        aria-selected="false"
                        style={{ color: "black", backgroundColor: "#fff" }}
                    >
                        <i className="fas fa-chart-line fa-fw me-2"></i>Youtube
                    </a>
                </li>
                <li
                    className="nav-item mx-3"
                    role="presentation"
                    style={{
                        backgroundColor: "matteblack", // Change to your dark background color
                        borderColor: "purple", // Purple border
                        color: "orange", // Orange text color
                        borderRadius: "5px",
                    }}
                >
                    <a
                        className="nav-link fw-bold"
                        id="ugc-packages"
                        data-mdb-toggle="tab"
                        href="#ugc-package"
                        role="tab"
                        aria-controls="ugc-packages"
                        aria-selected="false"
                        style={{ color: "black", backgroundColor: "#fff" }}
                    >
                        <i className="fas fa-chart-line fa-fw me-2"></i>UGC
                    </a>
                </li>
            </ul>


            <div className="tab-content" id="ex-with-icons-content">
                <div
                    className="tab-pane fade show active"
                    id="all-packages"
                    role="tabpanel"
                    aria-labelledby="all-package"
                >
                    {/* <LightBoxGallery images={props.images} /> */}

                    <div className="container ">
                        <div className="row py-3">
                            <div className="col-md-6 ">
                                <PackageCard title={"3 Instagram Video"} cost={"100"} icon={<BsInstagram />} />

                            </div>
                            <div className="col-md-6 ">
                                <PackageCard title={"3 Instagram Video"} cost={"100"} icon={<BsInstagram />} />

                            </div>
                        </div>


                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="instagram-packages"
                    role="tabpanel"
                    aria-labelledby="instagram-package"
                >
                    {/* <VideoGallery vedio={[]} /> */}
                    <div className="container ">
                        <div className="row py-3">
                            <div className="col-md-6 ">

                                <PackageCard title={"3 Instagram Video"} cost={"100"} icon={<BsInstagram />} />

                            </div>
                            <div className="col-md-6 ">
                                <PackageCard title={"3 Instagram Reel"} cost={"200"} icon={<BsInstagram />} />

                            </div>
                        </div>


                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="youtube-packages"
                    role="tabpanel"
                    aria-labelledby="youtube-package"
                >
                    {/* <VideoGallery vedio={[]} /> */}
                    <div className="container ">
                        <div className="row py-3">
                            <div className="col-md-6 ">

                                <PackageCard title={"3 Youtube Video"} cost={"500"} icon={<BsYoutube />} />

                            </div>
                            <div className="col-md-6 ">
                                <PackageCard title={"3 Youtube Shots"} cost={"400"} icon={<BsYoutube />} />

                            </div>
                        </div>


                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="ugc-package"
                    role="tabpanel"
                    aria-labelledby="ugc-packages"
                >
                    {/* <VideoGallery vedio={[]} /> */}
                    <div className="container ">
                        <div className="row py-3">
                            <div className="col-md-6 ">

                                <PackageCard title={"3 UGC Video"} cost={"300"} />

                            </div>
                            <div className="col-md-6 ">
                                <PackageCard title={"3 UGC Reel"} cost={"200"} />

                            </div>
                        </div>


                    </div>
                </div>
            </div>
            {/* <!-- Tabs content --> */}
        </div>
    );
};

export default NavTabs;
