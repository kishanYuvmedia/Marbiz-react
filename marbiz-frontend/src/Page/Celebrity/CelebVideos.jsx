import React, { useState } from "react";
import { motion } from "framer-motion";
import { Modal, Button } from "react-bootstrap";
const CelebVideos = ({ movie }) => {

    const [show, setShow] = useState(false);
    const [videoSrc, setVideoSrc] = useState("");

    const handleShow = (src) => {
        setVideoSrc(src);
        setShow(true);
    };

    const handleClose = () => {
        setVideoSrc("");
        setShow(false);
    };


    return (
        <>
            <motion.div 
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opactiy: 0 }}
            >
                <div className="position-relative">
                    <a
                        onClick={() =>
                            handleShow("https://www.youtube.com/embed/IP7uGKgJL8U")
                        }
                    >

                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            alt={movie.title}
                            className="youtube-thumb"
                        />

                        <span className="play_icon"></span>
                    </a>
                    <p className="youtube-video-title">{movie.title}</p>
                </div>

                <Modal show={show} onHide={handleClose} centered closeButton size="lg" className="youtube-mobal-box" id="youtube-mobal-box">
                    {/* <Modal.Header  /> */}
                    <Modal.Body  >
                        <Button variant="danger" className="btn-close px-2" onClick={handleClose}></Button>
                        <div className="ratio ratio-16x9">
                            <iframe
                                className="embed-responsive-item"
                                src={videoSrc}
                                title={movie.title}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Modal.Body>
                </Modal>

            </motion.div>


        </>
    );
};

export default CelebVideos;
