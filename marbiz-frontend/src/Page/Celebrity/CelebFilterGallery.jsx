import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Modal, Button } from "react-bootstrap";
import { getPublicList } from "../../services/api/api-service";


const CelebFilterGallery = ({ userId }) => {

    const [Category, setCategory] = useState("Celebrity");
    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);
    const [videoSrc, setVideoSrc] = useState("");


    const [uniqueListTypes, setUniqueListType] = useState([]);

    const handleShow = (src) => {
        setVideoSrc(src);
        setShow(true);
    };

    const handleClose = () => {
        setVideoSrc("");
        setShow(false);
    };

    const getPackage = (type) => {
        setCategory(type);
        // setList([]);
    };
    useEffect(() => {

        getPublicList(Category)
            .then((results) => {
                setList(results)
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, [Category]);

    useEffect(() => {

        getPublicList('VideoType')
            .then((results) => {
                setUniqueListType(results)
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, []);



    return (
        <>
            <ul className="nav justify-content-center nav-tabs my-3" role="tablist">
                {uniqueListTypes.map((list, index) => (
                    <li className="nav-item" key={index}>
                        <button
                            className={`nav-link text-capitalize px-3 ${Category === list.label ? "active" : ""}`}
                            id={`all-${list.label}`}
                            onClick={() => getPackage(list.label)}
                        >
                            {list.label}
                        </button>
                    </li>
                ))}
            </ul>


            <div className="container-fluid">
                <div className="row py-3 ">
                    <h3 className="text-capitalize text-danger text-center mb-3">All {Category} work</h3>
                    <hr className="border border-danger border-1 opacity-50 " />

                    <motion.div layout className="reel-card" style={{
                        display: "flex",
                        // justifyContent: "center",
                        flexWrap: "wrap",
                    }}>
                        <AnimatePresence>
                            {list.map((item, index) => (
                                <div className="col-12 col-md-3" key={index}>
                                    <motion.div
                                        layout
                                        animate={{ opacity: 1 }}
                                        initial={{ opacity: 0 }}
                                        exit={{ opacity: 0 }}
                                    >

                                        <div className="position-relative m-1">
                                            <a onClick={() => handleShow(item.videoSRC)}>
                                                <img
                                                    src={item.thumbnailSRC}
                                                    alt={item.label}
                                                    className="youtube-thumb "

                                                />
                                                <span className="play_icon"></span>
                                            </a>
                                            <p className="youtube-video-title">{item.title}</p>

                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

            {/* <!-- Tabs content --> */}
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
                        <iframe
                            className="embed-responsive-item"
                            src={`https://www.youtube.com/embed/${videoSrc}?si=2jZjY79pliCugrnY`}
                            allowFullScreen
                            crossOrigin="anonymous"
                        ></iframe>
                    </div>
                </Modal.Body>
            </Modal>


        </>
    );
};

export default CelebFilterGallery;
