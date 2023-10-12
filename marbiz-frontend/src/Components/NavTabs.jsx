import React from "react";

import { BsInstagram, BsYoutube } from "react-icons/bs";
import PackageCard from "./PackageCard";

import ugc_icon from "../Images/ugc_icon.png"
import youtube_icon from "../Images/youtube_icon.png"
import insta_icon from "../Images/insta_icon.png"



const NavTabs = (props) => {
    console.log("final", props.images);
    return (
        <div>
            {/* <!-- Tabs navs --> */}
            <ul className="nav package-navigation nav-tabs mb-3" id="ex-with-icons" role="tablist">
                <li
                    className="nav-item "
                    role="presentation"
                >
                    <a
                        className="nav-link active"
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
                    className="nav-item"
                    role="presentation"
                    
                >
                    <a
                        className="nav-link"
                        id="instagram-package"
                        data-mdb-toggle="tab"
                        href="#instagram-packages"
                        role="tab"
                        aria-controls="instagram-packages"
                        aria-selected="false"
                        
                    >
                        Intagram
                    </a>
                </li>
                <li
                    className="nav-item"
                    role="presentation"
                    
                >
                    <a
                        className="nav-link"
                        id="youtube-package"
                        data-mdb-toggle="tab"
                        href="#youtube-packages"
                        role="tab"
                        aria-controls="youtube-packages"
                        aria-selected="false"
                        
                    >
                        Youtube
                    </a>
                </li>
                <li
                    className="nav-item"
                    role="presentation"
                    
                >
                    <a
                        className="nav-link"
                        id="ugc-packages"
                        data-mdb-toggle="tab"
                        href="#ugc-package"
                        role="tab"
                        aria-controls="ugc-packages"
                        aria-selected="false"
                        
                    >
                        UGC
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
                                <PackageCard title={"3 Instagram Video"} cost={"100"} icon={insta_icon} />
                            </div>
                            <div className="col-md-6 ">
                                <PackageCard title={"3 UGC Video"} cost={"400"} icon={ugc_icon} />
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
                    
                    <div className="container ">
                        <div className="row py-3">
                            <div className="col-md-6 ">

                                <PackageCard title={"3 Instagram Video"} cost={"100"} icon={insta_icon} />

                            </div>
                            <div className="col-md-6 ">
                                <PackageCard title={"3 Instagram Reel"} cost={"200"} icon={insta_icon} />

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
                    
                    <div className="container ">
                        <div className="row py-3">
                            <div className="col-md-6 ">

                                <PackageCard title={"3 Youtube Video"} cost={"500"} icon={youtube_icon} />

                            </div>
                            <div className="col-md-6 ">
                                <PackageCard title={"3 Youtube Shots"} cost={"400"} icon={youtube_icon} />

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
                    
                    <div className="container ">
                        <div className="row py-3">
                            <div className="col-md-6 ">

                                <PackageCard title={"3 UGC Video"} cost={"300"} icon={ugc_icon} />

                            </div>
                            <div className="col-md-6 ">
                                <PackageCard title={"3 UGC Reel"} cost={"200"} icon={ugc_icon}/>

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
