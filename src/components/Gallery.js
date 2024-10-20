import React from 'react';
import gallery1 from '../img/gallery-1.jpg';
import gallery2 from '../img/gallery-2.jpg';
import gallery3 from '../img/gallery-3.jpg';
import gallery4 from '../img/gallery-4.jpg';
import gallery5 from '../img/gallery-5.jpg';
import gallery6 from '../img/gallery-6.jpg';
import gallery7 from '../img/gallery-7.jpg';
import gallery8 from '../img/gallery-8.jpg';



const Gallery = () => {
    return (
        <div className="container-xxl py-5 px-0">
            <div className="row g-0">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-0">
                        <div className="col-12">
                            <a className="d-block" href={gallery5} data-lightbox="gallery">
                                <img className="img-fluid" src={gallery5} alt="" />
                            </a>
                        </div>
                        <div className="col-12">
                            <a className="d-block" href={gallery1} data-lightbox="gallery">
                                <img className="img-fluid" src={gallery1} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="row g-0">
                        <div className="col-12">
                            <a className="d-block" href={gallery2} data-lightbox="gallery">
                                <img className="img-fluid" src={gallery2} alt="" />
                            </a>
                        </div>
                        <div className="col-12">
                            <a className="d-block" href={gallery6} data-lightbox="gallery">
                                <img className="img-fluid" src={gallery6} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row g-0">
                        <div className="col-12">
                            <a className="d-block" href={gallery7} data-lightbox="gallery">
                                <img className="img-fluid" src={gallery7} alt="" />
                            </a>
                        </div>
                        <div className="col-12">
                            <a className="d-block" href={gallery3} data-lightbox="gallery">
                                <img className="img-fluid" src={gallery3} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="row g-0">
                        <div className="col-12">
                            <a className="d-block" href={gallery4} data-lightbox="gallery">
                                <img className="img-fluid" src={gallery4} alt="" />
                            </a>
                        </div>
                        <div className="col-12">
                            <a className="d-block" href={gallery8} data-lightbox="gallery">
                                <img className="img-fluid" src={gallery8} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
