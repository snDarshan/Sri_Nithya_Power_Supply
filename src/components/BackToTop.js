import React from 'react';

const BackToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top" onClick={scrollToTop}>
            <i className="bi bi-arrow-up"></i>
        </a>
    );
};

export default BackToTop;
