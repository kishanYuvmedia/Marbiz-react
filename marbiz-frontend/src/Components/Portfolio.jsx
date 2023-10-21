import React from 'react'
import Flicking from '@egjs/react-flicking'
import artist_1 from "../Images/artist_1.webp";
import artist_2 from "../Images/artist_2.webp";
import artist_3 from "../Images/artist_3.webp";
import artist_4 from "../Images/artist_4.webp";

const Portfolio = () => {
    return (
        <>

            {/* <!-- Tabs navs --> */}
            <ul className="nav package-navigation nav-tabs mb-3" id="ex-with-icons" role="tablist">
                <li
                    className="nav-item "
                    role="presentation"
                >
                    <a
                        className="nav-link active"
                        id="all-post"
                        data-mdb-toggle="tab"
                        href="#all-posts"
                        role="tab"
                        aria-controls="all-posts"
                        aria-selected="true"

                    >
                        Posts
                    </a>
                </li>
                <li
                    className="nav-item"
                    role="presentation"

                >
                    <a
                        className="nav-link"
                        id="all-video"
                        data-mdb-toggle="tab"
                        href="#all-videos"
                        role="tab"
                        aria-controls="all-videos"
                        aria-selected="false"

                    >
                        Videos
                    </a>
                </li>
                <li
                    className="nav-item"
                    role="presentation"

                >
                    <a
                        className="nav-link"
                        id="all-reel"
                        data-mdb-toggle="tab"
                        href="#all-reels"
                        role="tab"
                        aria-controls="all-reels"
                        aria-selected="false"

                    >
                        Reels
                    </a>
                </li>
                <li
                    className="nav-item"
                    role="presentation"

                >
                    <a
                        className="nav-link"
                        id="all-storie"
                        data-mdb-toggle="tab"
                        href="#all-stories"
                        role="tab"
                        aria-controls="all-stories"
                        aria-selected="false"

                    >
                        Stories
                    </a>
                </li>
            </ul>


            <div className="tab-content" id="ex-with-icons-content">
                <div
                    className="tab-pane fade show active"
                    id="all-posts"
                    role="tabpanel"
                    aria-labelledby="all-post"
                >
                    {/* <LightBoxGallery images={props.images} /> */}

                    <div className="container-fluid ">
                        <div className="row py-3">
                            <div className="col-md-12 ">
                                <h1>Posts</h1>
                                <Flicking
                                    // defaultIndex={1}
                                    // bound={true}
                                    // deceleration={0.0005}
                                    circular={true}
                                    align={"prev"}
                                // renderOnlyVisible={true}
                                // duration={500}
                                // inputType={["touch", "mouse"]}
                                // moveType={["strict", { count: 4 }]}
                                // panelsPerView={4}
                                >
                                    {/* {list.map((item, index) => ( */}
                                    <div className='p-3'>
                                        <img src={artist_1} alt="artist_2" className="rounded-3 img-fluid" />
                                    </div>
                                    <div className='p-3'>
                                        <img src={artist_2} alt="artist_2" className="rounded-3 img-fluid" />
                                    </div>
                                    <div className='p-3'>
                                        <img src={artist_3} alt="artist_2" className="rounded-3 img-fluid" />
                                    </div>
                                    <div className='p-3'>
                                        <img src={artist_4} alt="artist_2" className="rounded-3 img-fluid" />
                                    </div>
                                    {/* ))} */}
                                </Flicking>
                            </div>

                        </div>


                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="all-videos"
                    role="tabpanel"
                    aria-labelledby="all-video"
                >

                    <div className="container ">
                        <div className="row py-3">
                            <div className="col-md-12 ">
                                <h1>Video</h1>
                                <Flicking
                                    // defaultIndex={1}
                                    // bound={true}
                                    // deceleration={0.0005}
                                    circular={true}
                                    align={"prev"}
                                // renderOnlyVisible={true}
                                // duration={500}
                                // inputType={["touch", "mouse"]}
                                // moveType={["strict", { count: 4 }]}
                                // panelsPerView={4}
                                >
                                    {/* {list.map((item, index) => ( */}
                                    <div className='p-3'>
                                        <img src={artist_1} alt="artist_2" className="rounded-3 img-fluid" />
                                    </div>
                                    <div className='p-3'>
                                        <img src={artist_2} alt="artist_2" className="rounded-3 img-fluid" />
                                    </div>
                                    <div className='p-3'>
                                        <img src={artist_3} alt="artist_2" className="rounded-3 img-fluid" />
                                    </div>
                                    <div className='p-3'>
                                        <img src={artist_4} alt="artist_2" className="rounded-3 img-fluid" />
                                    </div>
                                    {/* ))} */}
                                </Flicking>

                            </div>

                        </div>


                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="all-reels"
                    role="tabpanel"
                    aria-labelledby="all-reel"
                >

                    <div className="container ">
                        <div className="row py-3">
                            <div className="col-md-12 ">
                                <h1>Reels</h1>
                                <Flicking
                                    // defaultIndex={1}
                                    // bound={true}
                                    // deceleration={0.0005}
                                    circular={true}
                                    align={"prev"}
                                // renderOnlyVisible={true}
                                // duration={500}
                                // inputType={["touch", "mouse"]}
                                // moveType={["strict", { count: 4 }]}
                                // panelsPerView={4}
                                >
                                    {/* {list.map((item, index) => ( */}
                                    <div className='p-3'>
                                        <img src={artist_1} alt="artist_2" className="rounded-3 img-fluid" />
                                    </div>
                                    <div className='p-3'>
                                        <img src={artist_2} alt="artist_2" className="rounded-3 img-fluid" />
                                    </div>
                                    <div className='p-3'>
                                        <img src={artist_3} alt="artist_2" className="rounded-3 img-fluid" />
                                    </div>
                                    <div className='p-3'>
                                        <img src={artist_4} alt="artist_2" className="rounded-3 img-fluid" />
                                    </div>
                                    {/* ))} */}
                                </Flicking>

                            </div>

                        </div>


                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="all-stories"
                    role="tabpanel"
                    aria-labelledby="all-stories"
                >

                    <div className="container ">
                        <div className="row py-3">
                            <div className="col-md-12 ">
                                <h1>Stories</h1>
                                <Flicking
                                    // defaultIndex={1}
                                    // bound={true}
                                    // deceleration={0.0005}
                                    circular={true}
                                    align={"prev"}
                                // renderOnlyVisible={true}
                                // duration={500}
                                // inputType={["touch", "mouse"]}
                                // moveType={["strict", { count: 4 }]}
                                // panelsPerView={4}
                                >
                                    {/* {list.map((item, index) => ( */}
                                    <div className='p-3'>
                                        <img src={artist_1} alt="artist_2" className="rounded-3 img-fluid" />
                                    </div>
                                    <div className='p-3'>
                                        <img src={artist_2} alt="artist_2" className="rounded-3 img-fluid" />
                                    </div>
                                    <div className='p-3'>
                                        <img src={artist_3} alt="artist_2" className="rounded-3 img-fluid" />
                                    </div>
                                    <div className='p-3'>
                                        <img src={artist_4} alt="artist_2" className="rounded-3 img-fluid" />
                                    </div>
                                    {/* ))} */}
                                </Flicking>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
            {/* <!-- Tabs content --> */}

        </>
    )
}

export default Portfolio