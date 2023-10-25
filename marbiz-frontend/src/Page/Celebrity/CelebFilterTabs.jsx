import React, { useEffect } from "react";

const CelebFilterTabs = ({ setActiveGenre, activeGenre, setFiltered, popular }) => {
    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie) =>
            movie.genre_ids.includes(activeGenre)
        );

        setFiltered(filtered);
        console.log(filtered);
    }, [activeGenre]);
    
    return (
        <div className="filter-container d-flex justify-content-center my-3">
            <button
                className={`tab_title ${activeGenre === 0 ? "active" : ""}`}
                onClick={() => setActiveGenre(0)}
            >
                Celebrity
            </button>
            <button
                className={`tab_title  ${activeGenre === 28 ? "active" : ""}`}
                onClick={() => setActiveGenre(28)}
            >
                Spokesperson
            </button>
        </div>
    );
};

export default CelebFilterTabs;
