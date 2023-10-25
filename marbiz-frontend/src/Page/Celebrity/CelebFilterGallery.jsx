import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CelebFilterTabs from "./CelebFilterTabs";
import CelebVideos from "./CelebVideos";


const CelebFilterGallery = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);

    const fetchPopular = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=1dfcce0b8c5b9ce64123438b04c4e865&language=en-US"
        );
        const movies = await data.json();
        console.log(movies);
        setPopularMovies(movies.results);
        setFiltered(movies.results);
    };

    useEffect(() => {
        fetchPopular();
    }, []);

    return (
        <>
            <CelebFilterTabs
                activeGenre={activeGenre}
                setActiveGenre={setActiveGenre}
                popular={popularMovies}
                setFiltered={setFiltered}
            />
            
            <motion.div layout className="youtube-card">
                <AnimatePresence>
                    {filtered.map((movie) => {
                        return <CelebVideos movie={movie} key={movie.id} />;
                    })}
                </AnimatePresence>
            </motion.div>
        </>
    )
}

export default CelebFilterGallery