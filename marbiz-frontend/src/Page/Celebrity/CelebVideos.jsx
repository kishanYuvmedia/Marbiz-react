import React from "react";
import { motion } from "framer-motion";

const CelebVideos = ({ movie }) => {
    return (
        <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opactiy: 0 }}
        >
        <div className="position-relative">

            <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
                className="youtube-thumb"
            />
            <span className="play_icon"></span>
            <p className="youtube-video-title">{movie.title}</p>
        </div>

        </motion.div>
    );
};

export default CelebVideos;
