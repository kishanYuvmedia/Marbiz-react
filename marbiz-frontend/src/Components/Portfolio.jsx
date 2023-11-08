import React, { useEffect, useState } from "react";
// import Flicking from '@egjs/react-flicking'
import { isEmpty, result } from "lodash";
import { Modal, Button } from "react-bootstrap";
import { getPublicList, getImagesListType } from "../services/api/api-service"

const Portfolio = ({ userId }) => {
    // console.log("Current userId", userId);
    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);
    const [videoSrc, setVideoSrc] = useState("");

    // Get the current URL pathname
    const currentPathname = window.location.pathname;

    const handleShow = (src) => {
        setVideoSrc(src);
        setShow(true);
    };

    const handleClose = () => {
        setVideoSrc("");
        setShow(false);
    };

    const [Category, setCategory] = useState('Image');
    const [user, setUser] = useState(userId);
    const [contentType, setContentType] = useState(null);

    useEffect(() => {
        if (userId !== null) {
            getPublicList("Content Type").then((result) => {
                setContentType(result);
                // console.log("Content type result:", result);
            });
            getPackage(Category)
        }
    }, [Category, userId])

    function getPackage(type) {
        setCategory(type);
        // console.log("Content Typessss:", type);
        setList([]);

        if (userId !== null) {
            getImagesListType(userId, type)
                .then(result => {
                    if (!isEmpty(result)) {
                        setList(result);
                        console.log("Content result:", list);

                    } else {
                        console.error("API Response is empty or not as expected.");
                    }
                })
                .catch(error => {
                    console.error("API Error:", error);
                });
        }
    }

    return (
        <>
            {/* Tabs navs */}
            <ul className="nav package-navigation nav-tabs mb-3" id="ex-with-icons" role="tablist">
                {contentType?.map((item, index) =>
                    <li className="nav-item" key={index}>
                        <button
                            className={`nav-link px-2 ${Category === item.value ? 'active' : ''}`}
                            id={`all-${item.value}`}
                            onClick={() => getPackage(item.value)}
                        >
                            {item.value}
                        </button>
                    </li>
                )}
            </ul>
            <div className="tab-content" id="ex-with-icons-content">
                <div
                    className="tab-pane fade show active"
                    id="all-posts"
                    role="tabpanel"
                    aria-labelledby="all-post"
                >
                    <div className="container-fluid ">
                        <div className="row py-2">
                            <span className="fs-5 text-white mb-2">{Category}</span>
                            {list.map((item, index) =>
                                <div className='col-md-3 col-6 mb-3 ' key={index}>
                                    <div className="reel-card">
                                        {item.caption === "Image" &&
                                            <div className="position-relative portfolio-images ">
                                                <img className="rounded-3"
                                                    src={item.src}
                                                    alt={item.caption}
                                                    style={{
                                                        objectFit: 'cover',
                                                        height: '100%',
                                                        width: '100%'
                                                    }}
                                                />
                                                {currentPathname.includes("/creatorDashboard/PortfolioList") &&
                                                    <div className="image-overlay  ">
                                                        <div className="d-flex">

                                                            <button className="px-3  btn border me-2">Delete</button>

                                                            <button className="px-3 btn border">Edit</button>
                                                        </div>
                                                        {/* <span className="bg-white p-2 rounded-3 btn-close img-close-btn"></span> */}
                                                    </div>

                                                }
                                            </div>
                                        }

                                        {item.caption !== "Image" &&
                                            <div className="position-relative youtube-container">
                                                <a onClick={() => handleShow(item.sourceUrl)}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <img
                                                        src={item.src}
                                                        alt={item.caption}
                                                        className="youtube-thumb"
                                                    />
                                                    <span className="play_icon"></span>
                                                </a>
                                                {currentPathname.includes("/creatorDashboard/PortfolioList") &&
                                                    <span className="bg-white p-2 rounded-3 btn-close video-close-btn"></span>
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Tabs content */}
            <Modal
                show={show}
                onHide={handleClose}
                centered
                closeButton
                size="lg"
                className="youtube-mobal-box"
                id="youtube-mobal-box"
            >
                {/* <Modal.Header  /> */}
                <Modal.Body  >
                    <Button
                        variant="danger"
                        className="btn-close px-2"
                        onClick={handleClose}>
                    </Button>
                    <div className="ratio ratio-16x9">
                        <iframe key={videoSrc} title={videoSrc}
                            className="embed-responsive-item"
                            src={`https://www.youtube.com/embed/${videoSrc}?si=2jZjY79pliCugrnY`}
                            allowFullScreen
                        ></iframe>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Portfolio