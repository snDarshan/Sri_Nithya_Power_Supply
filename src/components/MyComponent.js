import React, { useEffect } from 'react';
import {
    initSpinner,
    initWOW,
    initStickyNavbar,
    initBackToTop,
    initCounterUp,
    initCarousel
} from '../scripts/custom'; 

const MyComponent = () => {
    useEffect(() => {
        initSpinner();
        initWOW();
        initStickyNavbar();
        initBackToTop();
        initCounterUp();
        initCarousel();
    }, []);

    return (
        <div>
            {/* Your component JSX goes here */}
        </div>
    );
};

export default MyComponent;
