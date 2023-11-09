import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {

    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // console.log("Current path:", pathname)
    return (
        <></>
    )
}

export default ScrollToTop